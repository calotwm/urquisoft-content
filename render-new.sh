#!/bin/bash
# render-new.sh — renderiza a PNG (1080x1350) TODOS los posts y singles, en paralelo. Uso: bash render-new.sh
C="/c/Program Files/Google/Chrome/Application/chrome.exe"
R="$(cd "$(dirname "$0")" && pwd -W)"
export C R
shot(){ "$C" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --virtual-time-budget=8000 --window-size=1080,1350 --user-data-dir="$TEMP/chr-$$" --screenshot="$2" "file:///$1" >/dev/null 2>&1; rm -rf "$TEMP/chr-$$" 2>/dev/null; }
export -f shot
{
  for f in posts/post-*/src/*.html; do d=$(dirname "$(dirname "$f")"); mkdir -p "$d/img"; echo "$R/$f|$R/$d/img/$(basename "$f" .html).png"; done
  for f in singles/single-*/single.html; do d=$(dirname "$f"); mkdir -p "$d/img"; echo "$R/$f|$R/$d/img/single.png"; done
} | xargs -P 8 -I{} bash -c 'p="{}"; shot "${p%%|*}" "${p##*|}"'
