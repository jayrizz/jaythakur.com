#!/bin/bash
# Backup critical scripts to prevent loss
# Run this before any major git operations

BACKUP_DIR="$HOME/.openclaw-script-backups/$(date +%Y%m%d-%H%M%S)"
WORKSPACE="/Users/admin/.openclaw/workspace"

mkdir -p "$BACKUP_DIR"

# Backup scripts directory
if [[ -d "$WORKSPACE/scripts" ]]; then
    cp -r "$WORKSPACE/scripts" "$BACKUP_DIR/"
    echo "✅ Scripts backed up to: $BACKUP_DIR/scripts"
fi

# Backup core config files
for file in AGENTS.md SOUL.md USER.md TOOLS.md HEARTBEAT.md; do
    if [[ -f "$WORKSPACE/$file" ]]; then
        cp "$WORKSPACE/$file" "$BACKUP_DIR/"
        echo "✅ $file backed up"
    fi
done

echo "🔒 Backup complete: $BACKUP_DIR"
echo "Restore with: cp -r $BACKUP_DIR/* $WORKSPACE/"