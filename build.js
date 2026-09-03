// Genera los 6 slides del carrusel Urquisoft v2 — estética propuesta:
// Inter · fondo #22181C · magenta #CC007E · teal #4CC2A3 · liquid glass · grano sutil
const fs = require('fs');
const path = require('path');

const root = __dirname;
const srcDir = path.join(root, 'src');
if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir, { recursive: true });

const logoB64 = fs.readFileSync(path.join(root, 'assets', 'aakdsada-crop.png')).toString('base64');

const CSS = `
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1080px;height:1350px;overflow:hidden}
body{
  font-family:"Inter",ui-sans-serif,system-ui,sans-serif;
  background-color:#22181C;
  background-image:
    radial-gradient(ellipse 70% 45% at 85% -10%,rgba(204,0,126,0.30) 0%,rgba(204,0,126,0) 60%),
    radial-gradient(ellipse 55% 40% at -8% 105%,rgba(204,0,126,0.20) 0%,rgba(204,0,126,0) 55%),
    linear-gradient(160deg,#22181C 0%,#1E1318 40%,#2A1C22 75%,#33202A 100%);
  color:#fff;
}
.grain{position:fixed;inset:0;z-index:50;pointer-events:none;opacity:.2;mix-blend-mode:overlay;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='160' height='160' filter='url(%23n)' opacity='0.55'/></svg>")}
.slide{position:relative;width:1080px;height:1350px;display:flex;flex-direction:column;padding:64px 72px 56px;z-index:1;box-shadow:inset 0 0 170px rgba(204,0,126,0.12),inset 0 0 46px rgba(204,0,126,0.05)}
.edge{position:absolute;left:0;right:0;top:0;height:3px;background:linear-gradient(90deg,transparent 0%,rgba(204,0,126,0.6) 50%,transparent 100%);z-index:2}
header{display:flex;justify-content:space-between;align-items:center}
.logo{height:72px;width:auto;display:block;filter:drop-shadow(0 0 18px rgba(204,0,126,0.35))}
.tag{font-size:18px;letter-spacing:.28em;text-transform:uppercase;color:rgba(255,255,255,.5)}
main{flex:1;display:flex;flex-direction:column;justify-content:center;position:relative}
footer{display:flex;justify-content:space-between;align-items:center}
.pips{display:flex;gap:12px;align-items:center}
.pip{width:12px;height:12px;border-radius:999px;background:rgba(255,255,255,.22)}
.pip.on{width:34px;background:linear-gradient(90deg,#CC007E,#8A0055);box-shadow:0 0 14px rgba(204,0,126,0.55)}
.swipe{font-size:22px;color:rgba(255,255,255,.72);display:flex;align-items:center;gap:10px}
.swipe .arr{color:#CC007E;font-size:26px}
.pill{display:inline-flex;align-items:center;gap:10px;padding:14px 26px;border-radius:999px;font-size:22px;font-weight:600;letter-spacing:.24em;text-transform:uppercase}
.pill-myth{border:1px solid rgba(255,255,255,.28);color:rgba(255,255,255,.6);background:rgba(255,255,255,.03)}
.pill-reality{border:1px solid rgba(76,194,163,.5);color:#4CC2A3;background:rgba(76,194,163,.1)}
.ghost{position:absolute;right:-30px;top:-60px;font-weight:800;font-size:430px;line-height:1;color:rgba(204,0,126,.11);z-index:0}
.block{position:relative;z-index:1;display:flex;flex-direction:column;gap:26px;align-items:flex-start}
h2{font-weight:800;letter-spacing:-0.02em;font-size:76px;line-height:1.12;position:relative;white-space:nowrap}
.myth-block h2{color:rgba(255,255,255,.82)}
.myth-block h2::after{content:"";position:absolute;left:-10px;right:-10px;top:56%;height:10px;background:linear-gradient(90deg,#CC007E,#8A0055);border-radius:6px;transform:rotate(-2deg);box-shadow:0 0 22px rgba(204,0,126,.45)}
.arrow{color:#CC007E;font-size:56px;line-height:1;margin-left:30px;text-shadow:0 0 24px rgba(204,0,126,.6)}
.reality-block p{font-size:46px;font-weight:600;line-height:1.28;max-width:930px;padding:34px 40px;border-radius:24px;border:1px solid rgba(255,255,255,.16);background:linear-gradient(135deg,rgba(255,255,255,.10) 0%,rgba(255,255,255,.03) 45%,rgba(255,255,255,.01) 100%);box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 8px 32px rgba(0,0,0,.35)}
.cta{display:inline-flex;align-items:center;gap:14px;padding:26px 42px;border-radius:999px;border:1px solid rgba(204,0,126,.6);background:linear-gradient(135deg,rgba(204,0,126,.28) 0%,rgba(204,0,126,.08) 100%);font-weight:700;font-size:26px;letter-spacing:.04em;color:#fff;box-shadow:0 10px 40px rgba(204,0,126,.35),inset 0 1px 0 rgba(255,255,255,.25)}
.cta span{font-size:30px;line-height:1}
.kicker{display:inline-flex;align-items:center;padding:16px 30px;border-radius:999px;border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.03);font-size:22px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:rgba(255,255,255,.75)}
h1{font-weight:800;letter-spacing:-0.03em;font-size:92px;line-height:1.08;margin-top:48px}
h1 .mag{color:#CC007E}
h1 .strike{position:relative;white-space:nowrap}
h1 .strike::after{content:"";position:absolute;left:-8px;right:-8px;top:54%;height:14px;background:linear-gradient(90deg,#CC007E,#8A0055);border-radius:8px;transform:rotate(-2deg);box-shadow:0 0 28px rgba(204,0,126,.55)}
.cover{align-items:center;text-align:center}
.cover .sub{margin-top:36px;font-size:30px;color:rgba(255,255,255,.65)}
.cover .cta{margin-top:64px}
.close{align-items:center;text-align:center}
.close .pill{margin-bottom:48px}
.close h2{font-size:72px;line-height:1.14;white-space:normal}
.close h2 .grad{background:linear-gradient(135deg,#4CC2A3 0%,#2FA284 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
.close .cta{margin-top:64px}
.close .sub{margin-top:28px;font-size:26px;color:rgba(255,255,255,.45)}
.close .sub b{color:rgba(255,255,255,.85);font-weight:600}
`;

const FONT = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">`;

const LOGO = `<img class="logo" src="data:image/png;base64,${logoB64}" alt="Urquisoft">`;

function html(title, tag, mainHtml, pipOn, swipe) {
  const pips = Array.from({ length: 6 }, (_, i) =>
    `<span class="pip${i + 1 === pipOn ? ' on' : ''}"></span>`).join('');
  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>${title}</title>
${FONT}
<style>${CSS}</style>
</head>
<body>
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

const slides = [
  {
    file: 'slide-01-portada.html', title: 'Portada', tag: 'MitOS de Gestión · 03',
    main: {
      cls: 'cover',
      body: `    <div class="kicker">La excusa más común de todo negocio</div>
    <h1>
      <span>EL <span class="mag">MITO</span> DE</span><br>
      <span>«ESTO LO MANEJO</span><br>
      <span>CON <span class="strike">EXCEL</span>»</span>
    </h1>
    <div class="sub">Cuatro mitos. Cuatro realidades.</div>
    <div class="cta">Deslizá para ver la realidad <span>→</span></div>`
    },
    pipOn: 1, swipe: 'Seguí'
  },
  {
    file: 'slide-02-mito-1.html', title: 'Mito 1', tag: 'MITO 1 DE 4',
    main: {
      cls: 'myth',
      body: `    <div class="ghost">01</div>
    <div class="block myth-block">
      <div class="pill pill-myth">Mito</div>
      <h2>«Excel me alcanza»</h2>
    </div>
    <div class="arrow">↓</div>
    <div class="block reality-block">
      <div class="pill pill-reality">Realidad</div>
      <p>Excel no te avisa cuando te quedás sin stock.</p>
    </div>`
    },
    pipOn: 2, swipe: 'Seguí'
  },
  {
    file: 'slide-03-mito-2.html', title: 'Mito 2', tag: 'MITO 2 DE 4',
    main: {
      cls: 'myth',
      body: `    <div class="ghost">02</div>
    <div class="block myth-block">
      <div class="pill pill-myth">Mito</div>
      <h2>«Yo anoto todo»</h2>
    </div>
    <div class="arrow">↓</div>
    <div class="block reality-block">
      <div class="pill pill-reality">Realidad</div>
      <p>Los datos quedan en planillas, papeles y en tu cabeza.</p>
    </div>`
    },
    pipOn: 3, swipe: 'Seguí'
  },
  {
    file: 'slide-04-mito-3.html', title: 'Mito 3', tag: 'MITO 3 DE 4',
    main: {
      cls: 'myth',
      body: `    <div class="ghost">03</div>
    <div class="block myth-block">
      <div class="pill pill-myth">Mito</div>
      <h2>«Es más barato»</h2>
    </div>
    <div class="arrow">↓</div>
    <div class="block reality-block">
      <div class="pill pill-reality">Realidad</div>
      <p>El error de tipeo, la falta y la deuda olvidada cuestan más caro.</p>
    </div>`
    },
    pipOn: 4, swipe: 'Seguí'
  },
  {
    file: 'slide-05-mito-4.html', title: 'Mito 4', tag: 'MITO 4 DE 4',
    main: {
      cls: 'myth',
      body: `    <div class="ghost">04</div>
    <div class="block myth-block">
      <div class="pill pill-myth">Mito</div>
      <h2>«Ya lo conozco»</h2>
    </div>
    <div class="arrow">↓</div>
    <div class="block reality-block">
      <div class="pill pill-reality">Realidad</div>
      <p>Un sistema te avisa, te recuerda y trabaja cuando vos no estás.</p>
    </div>`
    },
    pipOn: 5, swipe: 'Seguí'
  },
  {
    file: 'slide-06-cierre.html', title: 'Cierre', tag: 'MitOS de Gestión · 03',
    main: {
      cls: 'close',
      body: `    <div class="pill pill-reality">La realidad</div>
    <h2>
      Excel es una herramienta.<br>
      <span class="grad">Un sistema es un empleado<br>que nunca se enferma.</span>
    </h2>
    <div class="cta">Escribinos por privado</div>
    <div class="sub">Consultá por una demo · <b>urquisoft.com</b></div>`
    },
    pipOn: 6, swipe: 'Última'
  }
];

for (const s of slides) {
  const out = html(s.title, s.tag, s.main, s.pipOn, s.swipe);
  fs.writeFileSync(path.join(srcDir, s.file), out, 'utf8');
  console.log('OK', s.file, '(' + out.length + ' bytes)');
}