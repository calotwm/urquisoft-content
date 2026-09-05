// build-singles.js — genera 26 posteos de imagen única (catchphrase + mensaje + CTA + decoraciones).
// Uso: node build-singles.js → singles/single-XX/{single.html, single.png}
const path = require('path');
const fs = require('fs');
const { html, ensureDir, root } = require('./brand');
const SINGLES = require('./singles');

const SINGLE_EXTRA = `
.single{align-items:flex-start}
.decors{position:absolute;inset:0;pointer-events:none;z-index:0}
.single-title,.single-msg,.single .cta{position:relative;z-index:1}
.single-title{font-weight:800;letter-spacing:-0.03em;font-size:80px;line-height:1.08;color:var(--w100);max-width:930px}
.single-title .mag{color:var(--mag-soft)}
.single-title .teal{color:var(--teal)}
.single-title .strike{position:relative;white-space:nowrap}
.single-title .strike::after{content:"";position:absolute;left:-6px;right:-6px;top:56%;height:12px;background:linear-gradient(90deg,var(--mag-soft),var(--mag-dark));border-radius:8px;transform:rotate(-2deg)}
.single-msg{margin-top:34px;font-size:29px;color:var(--w60);line-height:1.35;max-width:760px}
.single .cta{margin-top:56px}
.ghost-char{position:absolute;right:-10px;top:60px;font-weight:800;font-size:380px;line-height:1;color:var(--mag-soft);opacity:.13;z-index:0}
.badge{position:absolute;right:34px;top:190px;transform:rotate(-8deg);padding:14px 28px;border-radius:999px;border:2px solid var(--mag);background:var(--g1);color:var(--w100);font-weight:800;font-size:28px;letter-spacing:.08em;box-shadow:0 8px 24px var(--shadow);z-index:0}
.qmarks{position:absolute;left:-16px;top:-60px;font-size:340px;line-height:1;font-weight:800;font-family:serif;color:var(--mag-soft);opacity:.16;z-index:0}
.rings{position:absolute;left:-50px;bottom:-70px;width:270px;height:270px;border-radius:999px;border:3px solid var(--w16);z-index:0}
.rings::after{content:"";position:absolute;inset:38px;border-radius:999px;border:3px solid var(--w22)}
.slash{position:absolute;right:-70px;bottom:30px;width:540px;height:230px;background:linear-gradient(135deg,var(--mag-soft),rgba(204,0,126,0));opacity:.16;transform:rotate(-18deg);border-radius:40px;z-index:0}
.dots{position:absolute;left:34px;bottom:40px;width:140px;height:140px;background-image:radial-gradient(var(--w35) 2px,transparent 2.5px);background-size:22px 22px;opacity:.7;z-index:0}
`;

function decorHtml(s) {
  const parts = [];
  switch (s.dec) {
    case 'ghost': parts.push(`<div class="ghost-char">${s.ghost}</div>`); break;
    case 'quote': parts.push(`<div class="qmarks">«</div>`); break;
    case 'rings': parts.push(`<div class="rings"></div>`); if (s.badge) parts.push(`<div class="badge">${s.badge}</div>`); break;
    case 'slash': parts.push(`<div class="slash"></div><div class="dots"></div>`); break;
    case 'combo': if (s.ghost) parts.push(`<div class="ghost-char">${s.ghost}</div>`); if (s.badge) parts.push(`<div class="badge">${s.badge}</div>`); break;
  }
  return `<div class="decors">${parts.join('')}</div>`;
}

for (const s of SINGLES) {
  const id = String(s.id).padStart(2, '0');
  const titleHtml = s.title.map((ln, i) => `<span>${ln}</span>${i < s.title.length - 1 ? '<br>' : ''}`).join('');
  const main = {
    cls: 'single',
    body: `    ${decorHtml(s)}
    <div class="single-title">${titleHtml}</div>
    <div class="single-msg">${s.msg}</div>
    <div class="cta">${s.cta}</div>`
  };
  const out = html(s.title.join(' ').replace(/<[^>]+>/g, ' ').trim(), '', main, 1, '', SINGLE_EXTRA, { theme: s.theme, pips: 0, noFooter: true });
  const dir = path.join(root, 'singles', `single-${id}`);
  ensureDir(path.join(dir, 'img'));
  fs.writeFileSync(path.join(dir, 'single.html'), out, 'utf8');
  console.log(`OK single-${id} (${s.theme}, dec ${s.dec})`);
}