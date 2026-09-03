// Post 4 — "Kiosco, carnicería, despensa: el mismo problema, la misma solución".
// Producto: Ticketera + Gestión (caja, ticket fiscal AFIP, inventario y reportes).
const path = require('path');
const { writeSlides } = require('./brand');

// Captura real del sistema para el slide 4. Dejá vacío para usar el placeholder;
// cuando tengas la imagen poné la ruta relativa (ej: "../assets/pantalla.png").
const SHOT = '';

const EXTRA = `
.cover h1{font-size:80px}
.pill-problem{border:1px solid rgba(204,0,126,.5);color:#E052A9;background:rgba(204,0,126,.10)}
.chips{display:flex;gap:22px;flex-wrap:wrap;position:relative;z-index:1}
.chip{flex:1;min-width:200px;display:flex;flex-direction:column;gap:16px;align-items:center;justify-content:center;padding:36px 18px;border-radius:24px;border:1px solid rgba(255,255,255,.16);background:linear-gradient(135deg,rgba(255,255,255,.10) 0%,rgba(255,255,255,.03) 45%,rgba(255,255,255,.01) 100%);box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 8px 32px rgba(0,0,0,.35)}
.chip .x,.chip .check{width:46px;height:46px;border-radius:999px;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff}
.chip .x{background:linear-gradient(135deg,rgba(204,0,126,.9),rgba(138,0,85,.9));box-shadow:0 0 18px rgba(204,0,126,.45)}
.chip .check{background:linear-gradient(135deg,rgba(76,194,163,.9),rgba(47,162,132,.9));box-shadow:0 0 18px rgba(76,194,163,.45)}
.chip .t{font-weight:700;font-size:25px;letter-spacing:.06em;text-transform:uppercase;color:#fff;text-align:center}
.lead-line{font-size:30px;color:rgba(255,255,255,.6);position:relative;z-index:1}
.statement{font-weight:800;letter-spacing:-0.02em;font-size:74px;line-height:1.1;position:relative;z-index:1;white-space:nowrap}
.statement .mag{color:#E052A9}
.statement .teal{color:#4CC2A3}
.strike2{position:relative;white-space:nowrap}
.strike2::after{content:"";position:absolute;left:-6px;right:-6px;top:56%;height:10px;background:linear-gradient(90deg,#CC007E,#8A0055);border-radius:6px;transform:rotate(-2deg);box-shadow:0 0 22px rgba(204,0,126,.45)}
.shot{position:relative;z-index:1;width:100%;max-width:900px;height:500px;border-radius:24px;border:1px solid rgba(204,0,126,.5);background:linear-gradient(135deg,rgba(204,0,126,.10) 0%,rgba(204,0,126,.02) 100%);box-shadow:0 10px 40px rgba(204,0,126,.25),inset 0 1px 0 rgba(255,255,255,.15);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden}
.shot img{width:100%;height:100%;object-fit:cover;object-position:top;display:block}
.shot .ph{font-size:28px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:rgba(255,255,255,.45)}
.shot .ph2{font-size:20px;color:rgba(255,255,255,.35)}
.screen-sub{margin-top:26px;font-size:26px;color:rgba(255,255,255,.6);position:relative;z-index:1}
`;

const shotHtml = SHOT
  ? `<img src="${SHOT}" alt="Pantalla real del sistema">`
  : `<div class="ph">Pantalla real</div><div class="ph2">Captura del sistema — pendiente</div>`;

const slides = [
  {
    file: 'slide-01-portada.html', title: 'Portada', tag: 'COMERCIOS DE MOSTRADOR · 04',
    extraCss: EXTRA,
    main: {
      cls: 'cover',
      body: `    <div class="kicker">Serie · Comercios de mostrador</div>
    <h1>
      <span>KIOSCO, CARNICERÍA,</span><br>
      <span>DESPENSA...</span><br>
      <span>EL MISMO <span class="mag">PROBLEMA</span></span>
    </h1>
    <div class="sub">…y la misma solución.</div>
    <div class="cta">Deslizá para ver cómo se resuelve <span>→</span></div>`
    },
    pipOn: 1, swipe: 'Seguí'
  },
  {
    file: 'slide-02-problema.html', title: 'El problema', tag: 'EL PROBLEMA · 01',
    extraCss: EXTRA,
    main: {
      cls: 'myth',
      body: `    <div class="pill pill-problem">El problema</div>
    <div class="chips">
      <div class="chip"><span class="x">✕</span><span class="t">Ticket</span></div>
      <div class="chip"><span class="x">✕</span><span class="t">Stock</span></div>
      <div class="chip"><span class="x">✕</span><span class="t">Caja</span></div>
    </div>
    <div class="lead-line">Cada cosa en un lugar distinto.</div>
    <div class="statement">El cierre <span class="mag">no cierra</span>.</div>`
    },
    pipOn: 2, swipe: 'Seguí'
  },
  {
    file: 'slide-03-solucion.html', title: 'La solución', tag: 'LA SOLUCIÓN · 02',
    extraCss: EXTRA,
    main: {
      cls: 'myth',
      body: `    <div class="pill pill-reality">La solución</div>
    <div class="chips">
      <div class="chip"><span class="check">✓</span><span class="t">Caja</span></div>
      <div class="chip"><span class="check">✓</span><span class="t">Inventario</span></div>
      <div class="chip"><span class="check">✓</span><span class="t">Clientes</span></div>
      <div class="chip"><span class="check">✓</span><span class="t">Reportes</span></div>
    </div>
    <div class="statement">Todo en <span class="teal">un solo sistema</span>.</div>`
    },
    pipOn: 3, swipe: 'Seguí'
  },
  {
    file: 'slide-04-pantalla.html', title: 'Pantalla real', tag: 'EN ACCIÓN · 03',
    extraCss: EXTRA,
    main: {
      cls: 'myth',
      body: `    <div class="pill pill-reality">Pantalla real</div>
    <div class="shot">
${shotHtml}
    </div>
    <div class="screen-sub">Una pantalla. Todo el negocio.</div>`
    },
    pipOn: 4, swipe: 'Seguí'
  },
  {
    file: 'slide-05-ejemplo.html', title: 'Un ejemplo', tag: 'UN EJEMPLO · 04',
    extraCss: EXTRA,
    main: {
      cls: 'myth',
      body: `    <div class="pill pill-reality">Un ejemplo</div>
    <div class="statement">
      El reporte de ventas<br>
      del día, <span class="teal">en segundos</span>.<br>
      No en <span class="strike2">la libreta</span>.
    </div>`
    },
    pipOn: 5, swipe: 'Seguí'
  },
  {
    file: 'slide-06-cierre.html', title: 'Cierre', tag: 'COMERCIOS DE MOSTRADOR · 04',
    extraCss: EXTRA,
    main: {
      cls: 'close',
      body: `    <div class="pill pill-reality">A tu medida</div>
    <h2>
      Contanos cómo trabajás hoy<br>
      <span class="grad">y te armamos la solución<br>a tu medida.</span>
    </h2>
    <div class="cta">Escribinos por privado</div>
    <div class="sub">Respondemos con una demo · <b>urquisoft.com</b></div>`
    },
    pipOn: 6, swipe: 'Última'
  }
];

writeSlides(slides, path.join(__dirname, 'post4', 'src'));