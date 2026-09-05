// build-singles.js — genera 26 posteos de imagen única (título + mensaje + CTA).
// Uso: node build-singles.js → singles/single-XX/{single.html, single.png}
const path = require('path');
const fs = require('fs');
const { html, ensureDir, root } = require('./brand');
const SINGLES = require('./singles');

const SINGLE_EXTRA = `
.single{align-items:flex-start}
.single-title{font-weight:800;letter-spacing:-0.02em;font-size:74px;line-height:1.1;color:var(--w100);max-width:900px}
.single-msg{margin-top:36px;font-size:30px;color:var(--w60);line-height:1.35;max-width:780px}
.single .cta{margin-top:60px}
`;

for (const s of SINGLES) {
  const id = String(s.id).padStart(2, '0');
  const main = {
    cls: 'single',
    body: `    <div class="single-title">${s.title}</div>
    <div class="single-msg">${s.msg}</div>
    <div class="cta">${s.cta}</div>`
  };
  const out = html(s.title, '', main, 1, '', SINGLE_EXTRA, { theme: s.theme, pips: 0, noFooter: true });
  const dir = path.join(root, 'singles', `single-${id}`);
  ensureDir(path.join(dir, 'img'));
  fs.writeFileSync(path.join(dir, 'single.html'), out, 'utf8');
  console.log(`OK single-${id} (${s.theme}) — ${s.title}`);
}