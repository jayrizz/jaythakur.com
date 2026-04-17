#!/bin/bash
# KB Weekly Compile Script
# Compiles and organizes knowledge base files

set -euo pipefail

echo "📚 KB Weekly Compilation - $(date '+%Y-%m-%d %H:%M:%S')"
echo

WORKSPACE="/Users/admin/.openclaw/workspace"
MEMORY_DIR="$WORKSPACE/memory"

# Ensure memory directory exists
mkdir -p "$MEMORY_DIR"

echo "✅ Memory directory: $MEMORY_DIR"

# Count memory files
if [[ -d "$MEMORY_DIR" ]]; then
    MEMORY_COUNT=$(find "$MEMORY_DIR" -name "*.md" | wc -l)
    MEMORY_SIZE=$(du -sh "$MEMORY_DIR" 2>/dev/null | cut -f1)
    echo "📄 Memory files: $MEMORY_COUNT files ($MEMORY_SIZE)"
    
    # List recent memory files (last 7 days)
    echo
    echo "📅 Recent memory files:"
    find "$MEMORY_DIR" -name "*.md" -mtime -7 | head -5 | while read file; do
        echo "   $(basename "$file")"
    done
else
    echo "⚠️  Memory directory not found"
fi

# Check for old files to archive (older than 30 days)
OLD_COUNT=$(find "$MEMORY_DIR" -name "*.md" -mtime +30 2>/dev/null | wc -l)
if [[ $OLD_COUNT -gt 0 ]]; then
    echo "📦 Found $OLD_COUNT old memory files (30+ days) - consider archiving"
fi

# Simple compilation summary
echo
echo "📊 KB Compilation Summary:"
echo "   Active memory files: $MEMORY_COUNT"
echo "   Memory storage: $MEMORY_SIZE" 
echo "   Old files: $OLD_COUNT"

# Check workspace health
cd "$WORKSPACE"
WORKSPACE_SIZE=$(du -sh . | cut -f1)
echo "   Workspace size: $WORKSPACE_SIZE"

echo "✅ KB compilation complete"