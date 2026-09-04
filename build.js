// Post 3 — "El mito de 'esto lo manejo con Excel'" (carrusel original).
const path = require('path');
const { writeSlides } = require('./brand');

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
    extraCss: '.cover h1{font-size:92px}',
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

writeSlides(slides, path.join(__dirname, 'src'));