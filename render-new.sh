#!/bin/bash
# render-new.sh — renderiza a PNG (1080x1350) los posts/singles del backlog. Uso: bash render-new.sh
C="/c/Program Files/Google/Chrome/Application/chrome.exe"
R="$(cd "$(dirname "$0")" && pwd -W)"
shot(){ "$C" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --virtual-time-budget=8000 --window-size=1080,1350 --screenshot="$2" "file:///$1" >/dev/null 2>&1; }
for n in 21 22 23 24 25; do mkdir -p "posts/post-$n/img"; for f in posts/post-$n/src/*.html; do b=$(basename "$f" .html); shot "$R/$f" "$R/posts/post-$n/img/$b.png"; done; done
for n in $(seq 27 38); do shot "$R/singles/single-$n/single.html" "$R/singles/single-$n/img/single.png"; done
