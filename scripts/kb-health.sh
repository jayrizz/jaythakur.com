#!/bin/bash
# KB Health Check Script
# Checks knowledge base integrity and system health

set -euo pipefail

echo "📊 KB Health Check - $(date '+%Y-%m-%d %H:%M:%S')"
echo

# Check workspace directory exists and is accessible
WORKSPACE="/Users/admin/.openclaw/workspace"
if [[ ! -d "$WORKSPACE" ]]; then
    echo "❌ CRITICAL: Workspace directory not found: $WORKSPACE"
    exit 1
fi

echo "✅ Workspace directory: $WORKSPACE"

# Check memory directory
MEMORY_DIR="$WORKSPACE/memory"
if [[ -d "$MEMORY_DIR" ]]; then
    MEMORY_FILES=$(find "$MEMORY_DIR" -name "*.md" | wc -l)
    MEMORY_SIZE=$(du -sh "$MEMORY_DIR" 2>/dev/null | cut -f1)
    echo "✅ Memory files: $MEMORY_FILES files ($MEMORY_SIZE)"
else
    echo "⚠️  Memory directory not found"
fi

# Check core files exist
CORE_FILES=("SOUL.md" "AGENTS.md" "USER.md" "TOOLS.md")
MISSING_CORE=0
for file in "${CORE_FILES[@]}"; do
    if [[ -f "$WORKSPACE/$file" ]]; then
        echo "✅ Core file: $file"
    else
        echo "⚠️  Missing core file: $file"
        ((MISSING_CORE++))
    fi
done

# Check disk space - use the root volume as the reference
ROOT_DISK=$(df -h / | awk 'NR==2 {print $1}')
ROOT_USAGE=$(df -h / | awk 'NR==2 {print $5}' | tr -d '%')
DATA_DISK=$(df -h /System/Volumes/Data 2>/dev/null | awk 'NR==2 {print $1}')
DATA_USAGE=$(df -h /System/Volumes/Data 2>/dev/null | awk 'NR==2 {print $5}' | tr -d '%' || echo "N/A")

# Show both volumes for clarity
echo "📊 Disk Usage:"
echo "   Root (/): ${ROOT_USAGE}% used on ${ROOT_DISK}"
if [[ "$DATA_USAGE" != "N/A" ]]; then
    echo "   Data (/System/Volumes/Data): ${DATA_USAGE}% used on ${DATA_DISK}"
fi

# Use the higher usage for thresholds
MAX_USAGE=$ROOT_USAGE
[[ "$DATA_USAGE" != "N/A" && "$DATA_USAGE" -gt "$ROOT_USAGE" ]] && MAX_USAGE=$DATA_USAGE

if [[ $MAX_USAGE -gt 95 ]]; then
    echo "❌ CRITICAL: Disk usage critical: ${MAX_USAGE}%"
    exit 2
elif [[ $MAX_USAGE -gt 85 ]]; then
    echo "⚠️  WARNING: Disk usage high: ${MAX_USAGE}%"
else
    echo "✅ Disk usage OK: ${MAX_USAGE}%"
fi

# Check if important processes are running
if pgrep -f "openclaw" > /dev/null; then
    echo "✅ OpenClaw process running"
else
    echo "⚠️  OpenClaw process not detected"
fi

# Check log files for recent errors (if they exist)
LOG_ERRORS=0
if [[ -f "$HOME/.openclaw/logs/gateway.log" ]]; then
    RECENT_ERRORS=$(tail -100 "$HOME/.openclaw/logs/gateway.log" | grep -i "error" | wc -l)
    if [[ $RECENT_ERRORS -gt 0 ]]; then
        echo "⚠️  Recent log errors: $RECENT_ERRORS"
        LOG_ERRORS=$RECENT_ERRORS
    else
        echo "✅ No recent log errors"
    fi
fi

# Summary
echo
echo "📋 Summary:"
echo "   Missing core files: $MISSING_CORE"
echo "   Max disk usage: ${MAX_USAGE}%"
echo "   Log errors: $LOG_ERRORS"

# Exit codes: 0=healthy, 1=critical, 2=warnings
if [[ $MISSING_CORE -gt 2 ]] || [[ $MAX_USAGE -gt 95 ]]; then
    echo "❌ CRITICAL issues detected"
    exit 1
elif [[ $MISSING_CORE -gt 0 ]] || [[ $MAX_USAGE -gt 85 ]] || [[ $LOG_ERRORS -gt 5 ]]; then
    echo "⚠️  Warnings detected"
    exit 2
else
    echo "✅ All systems healthy"
    exit 0
fi