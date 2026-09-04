// build-singles.js — genera 26 posteos de imagen única (sin carrusel).
// Uso: node build-singles.js → singles/single-XX/{single.html, single.png}
const path = require('path');
const fs = require('fs');
const { html, ensureDir, root } = require('./brand');
const { renderSlide } = require('./render');
const SINGLES = require('./singles');

for (const s of SINGLES) {
  const id = String(s.id).padStart(2, '0');
  const main = renderSlide(s.slide);
  const out = html(s.title, s.tag, main, 1, '', '', { theme: s.theme, pips: 0, noFooter: true });
  const dir = path.join(root, 'singles', `single-${id}`);
  ensureDir(path.join(dir, 'img'));
  fs.writeFileSync(path.join(dir, 'single.html'), out, 'utf8');
  console.log(`OK single-${id} (${s.theme}) — ${s.title}`);
}