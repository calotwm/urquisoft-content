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
.cover h1{font-size:72px}
.cover.left{align-items:flex-start;text-align:left}
.cover.left h1{margin-top:40px}
.cover.left .sub{margin-top:32px}
.cover.left .cta{margin-top:56px}
.cover .ghost-char{position:absolute;right:20px;top:150px;font-weight:800;font-size:360px;line-height:1;color:rgba(204,0,126,0.10);z-index:0;pointer-events:none}
.cover.quote h1{position:relative}
.cover.quote h1::before{content:"«";position:absolute;top:-160px;left:50%;transform:translateX(-50%);font-size:380px;line-height:1;color:rgba(204,0,126,0.12);z-index:-1;pointer-events:none}
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
.statement{font-weight:800;letter-spacing:-0.02em;font-size:68px;line-height:1.12;position:relative;z-index:1;white-space:normal;color:var(--w100)}
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
/* ---- variantes de formato ---- */
.photo-card{display:flex;flex-direction:column;gap:24px;width:100%;position:relative;z-index:1}
.photo-card .meta{display:flex;align-items:center;gap:18px}
.photo-card .meta .pill{flex:none}
.photo{width:100%;aspect-ratio:16/9;border-radius:24px;border:1px dashed var(--w45);background:linear-gradient(135deg,var(--g1) 0%,var(--g2) 45%,var(--g3) 100%);display:flex;align-items:center;justify-content:center;overflow:hidden}
.photo img{width:100%;height:100%;object-fit:cover;display:block}
.photo .ph-label{font-size:24px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--w45)}
.chips.small .chip{padding:20px 14px;min-width:170px}
.chips.small .chip .t{font-size:20px}
.flow{display:flex;align-items:stretch;gap:16px;position:relative;z-index:1}
.fstep{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:28px 18px;border-radius:20px;border:1px solid var(--w16);background:linear-gradient(135deg,var(--g1) 0%,var(--g2) 45%,var(--g3) 100%);box-shadow:inset 0 1px 0 var(--gh),0 8px 32px var(--shadow);text-align:center}
.fstep .fnum{width:44px;height:44px;border-radius:999px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:20px;color:#fff;background:linear-gradient(135deg,#CC007E,#8A0055);box-shadow:0 0 14px rgba(204,0,126,0.4)}
.fstep .ft{font-size:24px;font-weight:600;color:var(--w100);line-height:1.2}
.fstep .ft small{display:block;font-size:19px;color:var(--w50);margin-top:4px;font-weight:500}
.farr{align-self:center;color:#CC007E;font-size:34px;font-weight:800;flex:none}
/* ---- arquetipos de inspiración ---- */
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
.metrics{display:flex;flex-direction:column;gap:28px;position:relative;z-index:1;width:100%;max-width:900px}
.metrics .ctx{font-size:34px;font-weight:600;color:var(--w60)}
.metrics .num{font-size:170px;font-weight:800;letter-spacing:-0.04em;line-height:1;background:linear-gradient(135deg,#E052A9 0%,#CC007E 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
.metrics .num small{font-size:60px;font-weight:800;background:none;-webkit-background-clip:initial;background-clip:initial;color:var(--w60)}
.metrics .chart{width:100%}
.metrics .chart svg{width:100%;height:120px;display:block}
.metrics .cap{font-size:24px;color:var(--w50)}
.search{width:100%;max-width:860px;position:relative;z-index:1;display:flex;flex-direction:column;gap:20px}
.search .bar{display:flex;align-items:center;gap:18px;padding:22px 28px;border-radius:18px;border:1px solid var(--w16);background:linear-gradient(135deg,var(--g1) 0%,var(--g2) 45%,var(--g3) 100%);box-shadow:inset 0 1px 0 var(--gh),0 8px 32px var(--shadow)}
.search .bar .mag{width:28px;height:28px;border:4px solid var(--w72);border-radius:999px;position:relative;flex:none}
.search .bar .mag::after{content:"";position:absolute;width:14px;height:4px;background:var(--w72);transform:rotate(45deg);bottom:-8px;right:-5px;border-radius:2px}
.search .bar .q{font-size:32px;font-weight:600;color:var(--w100);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.search .bar .cursor{width:3px;height:36px;background:#CC007E;animation:blink 1s step-end infinite;flex:none}
.search .results{display:flex;flex-direction:column;gap:12px}
.search .res{display:flex;align-items:center;gap:16px;padding:18px 26px;border-radius:14px;border:1px solid var(--w16);background:var(--g2)}
.search .res .ri{flex:none;width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,rgba(204,0,126,0.9),rgba(138,0,85,0.9));display:flex;align-items:center;justify-content:center;font-weight:800;color:#fff;font-size:17px}
.search .res .rt{font-size:27px;font-weight:600;color:var(--w100);line-height:1.2}
.search .res .rt small{display:block;font-size:19px;font-weight:500;color:var(--w50);margin-top:2px}
.browser{position:relative;z-index:1;width:100%;max-width:920px;border-radius:24px;border:1px solid var(--shot-border);overflow:hidden;box-shadow:0 10px 40px rgba(204,0,126,0.25)}
.browser .bar{display:flex;align-items:center;gap:10px;padding:14px 18px;background:var(--g2);border-bottom:1px solid var(--w16)}
.browser .dots{display:flex;gap:8px;flex:none}
.browser .dots i{width:12px;height:12px;border-radius:999px;display:block}
.browser .dots i:nth-child(1){background:#FF5F57}
.browser .dots i:nth-child(2){background:#FEBC2E}
.browser .dots i:nth-child(3){background:#28C840}
.browser .url{flex:1;text-align:center;font-size:18px;color:var(--w50);background:var(--g1);border-radius:999px;padding:6px 14px}
.browser img{width:100%;display:block;aspect-ratio:2.1;object-fit:cover;object-position:top}
.photo.tagged .tag{position:absolute;padding:9px 18px;border-radius:8px;background:rgba(204,0,126,0.92);color:#fff;font-weight:700;font-size:21px;letter-spacing:.08em;box-shadow:0 4px 16px rgba(0,0,0,0.3)}
.photo.tagged .tag.t1{left:18px;top:18px}
.photo.tagged .tag.t2{right:18px;bottom:18px}
.quoteauth{display:flex;flex-direction:column;gap:30px;position:relative;z-index:1;width:100%;max-width:920px}
.quoteauth .marks{font-size:110px;font-weight:800;line-height:.4;color:rgba(204,0,126,0.28)}
.quoteauth .q{font-size:56px;font-weight:800;line-height:1.16;color:var(--w100)}
.quoteauth .author{display:flex;align-items:center;gap:18px}
.quoteauth .author .avatar{flex:none;width:66px;height:66px;border-radius:999px;background:linear-gradient(135deg,#CC007E,#8A0055);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:22px;color:#fff;box-shadow:0 0 18px rgba(204,0,126,0.4)}
.quoteauth .author .who{font-size:25px;font-weight:700;color:var(--w100)}
.quoteauth .author .who small{display:block;font-size:19px;font-weight:500;color:var(--w50);margin-top:2px}
.scene .author{display:flex;align-items:center;gap:14px;margin-top:18px}
.scene .author .avatar{flex:none;width:52px;height:52px;border-radius:999px;background:linear-gradient(135deg,#CC007E,#8A0055);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:18px;color:#fff}
.scene .author .who{font-size:22px;font-weight:700;color:var(--w100)}
.scene .author .who small{display:block;font-size:17px;font-weight:500;color:var(--w50)}
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