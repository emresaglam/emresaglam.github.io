#!/usr/bin/env bash
set -euo pipefail

SRC="$HOME/emre-blog/_site/"
PUB="$HOME/jekyll/emresaglam.github.io"

# safety checks
[ -d "$SRC" ] || { echo "Missing build dir: $SRC"; exit 1; }
[ -d "$PUB/.git" ] || { echo "Not a git repo: $PUB"; exit 1; }

# rsync everything except the target repo’s .git directory
# preserve CNAME if you keep it only in the publish repo: add --exclude 'CNAME'
rsync -av --delete --exclude '.git' "$SRC" "$PUB"

# ensure GitHub Pages doesn’t try to run Jekyll on the artifacts
touch "$PUB/.nojekyll"

# commit and push
cd "$PUB"
git add -A
git commit -m "Publish $(date -u +'%Y-%m-%d %H:%M:%S UTC')" || echo "No changes to commit."
git push

