// Urquisoft brand kit v2 — motor compartido de carruseles.
// Estética oficial: Inter · tema dark (#22181C, magenta #CC007E, teal #4CC2A3, liquid glass, grano sutil)
// con variante light para algunos posts. Variables de opacidad exactas del dark aprobado.
const fs = require('fs');
const path = require('path');

const root = __dirname;

const logoB64 = fs.readFileSync(path.join(root, 'assets', 'aakdsada-crop.png')).toString('base64');

const CSS = `
:root{
  --w100:#FFFFFF; --w85:rgba(255,255,255,0.85); --w82:rgba(255,255,255,0.82);
  --w75:rgba(255,255,255,0.75); --w72:rgba(255,255,255,0.72); --w65:rgba(255,255,255,0.65);
  --w60:rgba(255,255,255,0.6); --w50:rgba(255,255,255,0.5); --w45:rgba(255,255,255,0.45);
  --w35:rgba(255,255,255,0.35); --w28:rgba(255,255,255,0.28); --w22:rgba(255,255,255,0.22);
  --w16:rgba(255,255,255,0.16);
  --g1:rgba(255,255,255,0.10); --g2:rgba(255,255,255,0.03); --g3:rgba(255,255,255,0.01); --gh:rgba(255,255,255,0.18);
  --bg:#22181C; --bg1:#1E1318; --bg2:#2A1C22; --bg3:#33202A;
  --glow1:rgba(204,0,126,0.30); --glow2:rgba(204,0,126,0.20);
  --mag:#CC007E; --mag-soft:#E052A9; --mag-dark:#8A0055;
  --teal:#4CC2A3; --teal-dark:#2FA284;
  --grain-op:0.2;
  --edge:rgba(204,0,126,0.6);
  --inset1:rgba(204,0,126,0.12); --inset2:rgba(204,0,126,0.05);
  --shadow:rgba(0,0,0,0.35);
  --cta1:rgba(204,0,126,0.28); --cta2:rgba(204,0,126,0.08); --cta-border:rgba(204,0,126,0.6);
  --shot-border:rgba(204,0,126,0.5);
}
body.light{
  --w100:#241A1F; --w85:rgba(36,26,31,0.85); --w82:rgba(36,26,31,0.82);
  --w75:rgba(36,26,31,0.75); --w72:rgba(36,26,31,0.72); --w65:rgba(36,26,31,0.66);
  --w60:rgba(36,26,31,0.62); --w50:rgba(36,26,31,0.55); --w45:rgba(36,26,31,0.5);
  --w35:rgba(36,26,31,0.38); --w28:rgba(36,26,31,0.3); --w22:rgba(36,26,31,0.26);
  --w16:rgba(36,26,31,0.16);
  --g1:rgba(255,255,255,0.70); --g2:rgba(255,255,255,0.45); --g3:rgba(255,255,255,0.20); --gh:rgba(255,255,255,0.95);
  --bg:#F6F3F5; --bg1:#F1EDF0; --bg2:#FBF8FA; --bg3:#F3EDF1;
  --glow1:rgba(204,0,126,0.16); --glow2:rgba(204,0,126,0.10);
  --grain-op:0.06;
  --edge:rgba(204,0,126,0.4);
  --inset1:rgba(204,0,126,0.08); --inset2:rgba(204,0,126,0.03);
  --shadow:rgba(36,26,31,0.18);
  --cta1:rgba(204,0,126,0.35); --cta2:rgba(204,0,126,0.14); --cta-border:rgba(204,0,126,0.55);
  --shot-border:rgba(204,0,126,0.45);
}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1080px;height:1350px;overflow:hidden}
body{
  font-family:"Inter",ui-sans-serif,system-ui,sans-serif;
  background-color:var(--bg);
  background-image:
    radial-gradient(ellipse 70% 45% at 85% -10%,var(--glow1) 0%,rgba(204,0,126,0) 60%),
    radial-gradient(ellipse 55% 40% at -8% 105%,var(--glow2) 0%,rgba(204,0,126,0) 55%),
    linear-gradient(160deg,var(--bg) 0%,var(--bg1) 40%,var(--bg2) 75%,var(--bg3) 100%);
  color:var(--w100);
}
.grain{position:fixed;inset:0;z-index:50;pointer-events:none;opacity:var(--grain-op);mix-blend-mode:overlay;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='160' height='160' filter='url(%23n)' opacity='0.55'/></svg>")}
.slide{position:relative;width:1080px;height:1350px;display:flex;flex-direction:column;padding:64px 72px 56px;z-index:1;box-shadow:inset 0 0 170px var(--inset1),inset 0 0 46px var(--inset2)}
.edge{position:absolute;left:0;right:0;top:0;height:3px;background:linear-gradient(90deg,transparent 0%,var(--edge) 50%,transparent 100%);z-index:2}
header{display:flex;justify-content:space-between;align-items:center}
.logo{height:72px;width:auto;display:block;filter:drop-shadow(0 0 18px rgba(204,0,126,0.35))}
.tag{font-size:18px;letter-spacing:.28em;text-transform:uppercase;color:var(--w50)}
main{flex:1;display:flex;flex-direction:column;justify-content:center;position:relative}
.myth{gap:52px}
footer{display:flex;justify-content:space-between;align-items:center}
.pips{display:flex;gap:12px;align-items:center}
.pip{width:12px;height:12px;border-radius:999px;background:var(--w22)}
.pip.on{width:34px;background:linear-gradient(90deg,#CC007E,#8A0055);box-shadow:0 0 14px rgba(204,0,126,0.55)}
.swipe{font-size:22px;color:var(--w72);display:flex;align-items:center;gap:10px}
.swipe .arr{color:#CC007E;font-size:26px}
.pill{display:inline-flex;align-items:center;gap:10px;padding:14px 26px;border-radius:999px;font-size:22px;font-weight:600;letter-spacing:.24em;text-transform:uppercase}
.pill-myth{border:1px solid var(--w28);color:var(--w60);background:var(--g2)}
.pill-problem{border:1px solid rgba(204,0,126,0.5);color:#E052A9;background:rgba(204,0,126,0.10)}
.pill-reality{border:1px solid rgba(76,194,163,0.5);color:var(--teal);background:rgba(76,194,163,0.10)}
.ghost{position:absolute;right:-30px;top:-60px;font-weight:800;font-size:430px;line-height:1;color:rgba(204,0,126,0.11);z-index:0}
.block{position:relative;z-index:1;display:flex;flex-direction:column;gap:26px;align-items:flex-start}
h2{font-weight:800;letter-spacing:-0.02em;font-size:76px;line-height:1.12;position:relative;white-space:nowrap}
.myth-block h2{color:var(--w82)}
.myth-block h2::after{content:"";position:absolute;left:-10px;right:-10px;top:56%;height:10px;background:linear-gradient(90deg,#CC007E,#8A0055);border-radius:6px;transform:rotate(-2deg);box-shadow:0 0 22px rgba(204,0,126,0.45)}
.arrow{color:#CC007E;font-size:56px;line-height:1;margin-left:30px;text-shadow:0 0 24px rgba(204,0,126,0.6)}
.reality-block p{font-size:46px;font-weight:600;line-height:1.28;max-width:930px;padding:34px 40px;border-radius:24px;border:1px solid var(--w16);background:linear-gradient(135deg,var(--g1) 0%,var(--g2) 45%,var(--g3) 100%);box-shadow:inset 0 1px 0 var(--gh),0 8px 32px var(--shadow)}
.cta{display:inline-flex;align-items:center;gap:14px;padding:26px 42px;border-radius:999px;border:1px solid var(--cta-border);background:linear-gradient(135deg,var(--cta1) 0%,var(--cta2) 100%);font-weight:700;font-size:26px;letter-spacing:.04em;color:#fff;box-shadow:0 10px 40px rgba(204,0,126,0.35),inset 0 1px 0 rgba(255,255,255,0.25)}
.cta span{font-size:30px;line-height:1}
.kicker{display:inline-flex;align-items:center;padding:16px 30px;border-radius:999px;border:1px solid var(--w28);background:var(--g2);font-size:22px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--w75)}
h1{font-weight:800;letter-spacing:-0.03em;font-size:92px;line-height:1.08;margin-top:48px;color:var(--w100)}
h1 .mag{color:#CC007E}
h1 .teal{color:var(--teal)}
h1 .strike{position:relative;white-space:nowrap}
h1 .strike::after{content:"";position:absolute;left:-8px;right:-8px;top:54%;height:14px;background:linear-gradient(90deg,#CC007E,#8A0055);border-radius:8px;transform:rotate(-2deg);box-shadow:0 0 28px rgba(204,0,126,0.55)}
.cover{align-items:center;text-align:center}
.cover .sub{margin-top:36px;font-size:30px;color:var(--w65)}
.cover .cta{margin-top:64px}
.cover h1{font-size:80px}
.close{align-items:center;text-align:center}
.close .pill{margin-bottom:48px}
.close h2{font-size:72px;line-height:1.14;white-space:normal;color:var(--w100)}
.close h2 .grad{background:linear-gradient(135deg,#4CC2A3 0%,#2FA284 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
.close .cta{margin-top:64px}
.close .sub{margin-top:28px;font-size:26px;color:var(--w45)}
.close .sub b{color:var(--w85);font-weight:600}
/* ---- componentes de layout ---- */
.chips{display:flex;gap:22px;flex-wrap:wrap;position:relative;z-index:1}
.chip{flex:1;min-width:200px;display:flex;flex-direction:column;gap:16px;align-items:center;justify-content:center;padding:36px 18px;border-radius:24px;border:1px solid var(--w16);background:linear-gradient(135deg,var(--g1) 0%,var(--g2) 45%,var(--g3) 100%);box-shadow:inset 0 1px 0 var(--gh),0 8px 32px var(--shadow)}
.chip .x,.chip .check{width:46px;height:46px;border-radius:999px;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff}
.chip .x{background:linear-gradient(135deg,rgba(204,0,126,0.9),rgba(138,0,85,0.9));box-shadow:0 0 18px rgba(204,0,126,0.45)}
.chip .check{background:linear-gradient(135deg,rgba(76,194,163,0.9),rgba(47,162,132,0.9));box-shadow:0 0 18px rgba(76,194,163,0.45)}
.chip .t{font-weight:700;font-size:25px;letter-spacing:.06em;text-transform:uppercase;color:var(--w100);text-align:center}
.lead-line{font-size:30px;color:var(--w60);position:relative;z-index:1}
.statement{font-weight:800;letter-spacing:-0.02em;font-size:74px;line-height:1.1;position:relative;z-index:1;white-space:nowrap;color:var(--w100)}
.statement .mag{color:#E052A9}
.statement .teal{color:var(--teal)}
.strike2{position:relative;white-space:nowrap}
.strike2::after{content:"";position:absolute;left:-6px;right:-6px;top:56%;height:10px;background:linear-gradient(90deg,#CC007E,#8A0055);border-radius:6px;transform:rotate(-2deg);box-shadow:0 0 22px rgba(204,0,126,0.45)}
.shot{position:relative;z-index:1;width:100%;max-width:920px;aspect-ratio:2.1;border-radius:24px;border:1px solid var(--shot-border);background:linear-gradient(135deg,rgba(204,0,126,0.10) 0%,rgba(204,0,126,0.02) 100%);box-shadow:0 10px 40px rgba(204,0,126,0.25),inset 0 1px 0 rgba(255,255,255,0.15);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden}
.shot img{width:100%;height:100%;object-fit:cover;object-position:top;display:block}
.shot .ph{font-size:28px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--w45)}
.shot .ph2{font-size:20px;color:var(--w35)}
.screen-sub{margin-top:26px;font-size:26px;color:var(--w60);position:relative;z-index:1}
.statrow{display:flex;align-items:center;gap:44px;position:relative;z-index:1}
.statrow .num{font-weight:800;font-size:128px;line-height:1;letter-spacing:-0.04em;background:linear-gradient(135deg,#E052A9 0%,#CC007E 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
.statrow .lab{font-size:36px;font-weight:600;line-height:1.25;color:var(--w100);max-width:520px}
.statrow .lab small{display:block;font-size:26px;font-weight:500;color:var(--w50);margin-top:6px}
.rows{display:flex;flex-direction:column;gap:20px;width:100%;position:relative;z-index:1}
.rowline{display:flex;align-items:center;gap:22px;padding:22px 28px;border-radius:20px;border:1px solid var(--w16);background:linear-gradient(135deg,var(--g1) 0%,var(--g2) 45%,var(--g3) 100%);box-shadow:inset 0 1px 0 var(--gh),0 8px 32px var(--shadow)}
.rowline .n{flex:none;width:52px;height:52px;border-radius:999px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:24px;color:#fff;background:linear-gradient(135deg,#CC007E,#8A0055);box-shadow:0 0 16px rgba(204,0,126,0.4)}
.rowline .l{flex:none;width:52px;height:52px;border-radius:999px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:22px;color:#fff;background:linear-gradient(135deg,rgba(76,194,163,0.95),rgba(47,162,132,0.95));box-shadow:0 0 16px rgba(76,194,163,0.4)}
.rowline .t{font-size:34px;font-weight:600;line-height:1.2;color:var(--w100)}
.rowline .t small{display:block;font-size:24px;font-weight:500;color:var(--w50);margin-top:2px}
.optrow{display:flex;align-items:center;gap:24px;width:100%;padding:24px 30px;border-radius:20px;border:1px solid var(--w16);background:linear-gradient(135deg,var(--g1) 0%,var(--g2) 45%,var(--g3) 100%);box-shadow:inset 0 1px 0 var(--gh),0 8px 32px var(--shadow)}
.optrow .letter{flex:none;width:56px;height:56px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:28px;color:#fff;background:linear-gradient(135deg,#CC007E,#8A0055);box-shadow:0 0 16px rgba(204,0,126,0.4)}
.optrow .t{font-size:32px;font-weight:600;color:var(--w100);line-height:1.2}
.scene{width:100%;padding:32px 36px;border-radius:24px;border:1px solid var(--w16);background:linear-gradient(135deg,var(--g1) 0%,var(--g2) 45%,var(--g3) 100%);box-shadow:inset 0 1px 0 var(--gh),0 8px 32px var(--shadow);position:relative;z-index:1}
.scene .q{font-size:40px;font-weight:600;line-height:1.28;color:var(--w100)}
.scene .q small{display:block;font-size:26px;font-weight:500;color:var(--w50);margin-top:10px}
.bigq{font-weight:800;font-size:62px;line-height:1.14;letter-spacing:-0.02em;color:var(--w100);position:relative;z-index:1;white-space:normal}
.bigq .teal{color:var(--teal)}
.bigq .mag{color:#E052A9}
`;

const FONT = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">`;

const LOGO = `<img class="logo" src="data:image/png;base64,${logoB64}" alt="Urquisoft">`;

function html(title, tag, mainHtml, pipOn, swipe, extraCss, opts) {
  const o = opts || {};
  const pipsN = o.pips || 6;
  const theme = o.theme === 'light' ? ' light' : '';
  const pips = Array.from({ length: pipsN }, (_, i) =>
    `<span class="pip${i + 1 === pipOn ? ' on' : ''}"></span>`).join('');
  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>${title}</title>
${FONT}
<style>${CSS}${extraCss || ''}</style>
</head>
<body class="${theme.trim() ? 'light' : ''}">
<div class="grain"></div>
<div class="slide">
  <div class="edge"></div>
  <header>
    <div class="brand">${LOGO}</div>
    <div class="tag">${tag}</div>
  </header>
  <main class="${mainHtml.cls}">
${mainHtml.body}
  </main>
  <footer>
    <div class="pips">${pips}</div>
    <div class="swipe">${swipe} <span class="arr">→</span></div>
  </footer>
</div>
</body>
</html>`;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeSlides(slides, outDir) {
  ensureDir(outDir);
  for (const s of slides) {
    const out = html(s.title, s.tag, s.main, s.pipOn, s.swipe, s.extraCss, s.opts);
    fs.writeFileSync(path.join(outDir, s.file), out, 'utf8');
  }
}

module.exports = { CSS, FONT, LOGO, html, ensureDir, writeSlides, root };