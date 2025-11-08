#!/usr/bin/env bash
# publish.sh — build locally & publish to GitHub Pages artifacts repo
# Usage:
#   ./publish.sh                # build + publish
#   ./publish.sh --dry-run      # show what would change
#   ./publish.sh -m "My note"   # custom commit message
#   SRC=/path/to/_site PUB=/path/to/repo ./publish.sh

set -euo pipefail

### --- CONFIG --- ###
SRC="${SRC:-$HOME/emre-blog/_site/}"
PUB="${PUB:-$HOME/jekyll/emresaglam.github.io}"
CUSTOM_DOMAIN="${CUSTOM_DOMAIN:-blog.emresaglam.com}"
BUILD_CMD="${BUILD_CMD:-bundle exec jekyll clean && bundle exec jekyll build}"
EXCLUDES=( ".git" "CNAME" )

### --- ARGS --- ###
DRY_RUN=false
COMMIT_MSG="Publish $(date -u +'%Y-%m-%d %H:%M:%S UTC')"

while (( "$#" )); do
  case "$1" in
    --dry-run|-n) DRY_RUN=true; shift ;;
    -m|--message) COMMIT_MSG="$2"; shift 2 ;;
    *) echo "Unknown arg: $1" >&2; exit 1 ;;
  esac
done

### --- CHECKS --- ###
[ -d "$PUB/.git" ] || { echo "ERROR: $PUB is not a git repo"; exit 1; }

# Build (optional)
if [ -n "${BUILD_CMD:-}" ]; then
  echo "==> Building site..."
  ( cd "$HOME/emre-blog" && bash -lc "$BUILD_CMD" )
fi

[ -d "$SRC" ] || { echo "ERROR: build directory missing: $SRC"; exit 1; }
[ -f "${SRC%/}/index.html" ] || echo "WARN: ${SRC%/}/index.html not found. Did the build succeed?"

# Prepare rsync flags
RSYNC_FLAGS=(-av --delete)
$DRY_RUN && RSYNC_FLAGS+=(--dry-run)
for x in "${EXCLUDES[@]}"; do RSYNC_FLAGS+=(--exclude "$x"); done

echo "==> Syncing _site -> artifacts repo"
echo "SRC: $SRC"
echo "PUB: $PUB"
rsync "${RSYNC_FLAGS[@]}" "$SRC" "$PUB"

# Ensure Pages serves static output only
touch "$PUB/.nojekyll"

# Ensure/refresh CNAME
if [ -n "$CUSTOM_DOMAIN" ]; then
  echo "$CUSTOM_DOMAIN" > "$PUB/CNAME"
fi

# Commit + push
cd "$PUB"
git add -A
if $DRY_RUN; then
  echo "==> Dry run: not committing or pushing."
  git status --short
else
  git commit -m "$COMMIT_MSG" || echo "No changes to commit."
  git push
  echo "==> Deployed. Visit: https://${CUSTOM_DOMAIN:-emresaglam.github.io}"
fi

