// Plan de contenido mensual v6 — 20 posts de Urquisoft (ids 21–40).
// DSL: cada slide es {type, ...campos}. Ver build-all-v6.js para el renderizado (render.js + brand.js).
// Convenciones: voseo con tilde, « », 5 hashtags sin #urquisoft, CTA por pilar
// (Herramientas → «Guardá este post» + keyword DM; Educación/Caso → «Escribinos y…»). Nunca WhatsApp como canal.
// Campos nuevos v6: pdf+dmKeyword (tool → PDF), liCaption (LinkedIn copy), liSlides (LinkedIn gráfica).

module.exports = [
  {
    id: 21, theme: 'magenta', tag: 'HERRAMIENTA · 2026', pdf: true, dmKeyword: 'STOCK',
    title: 'Control de stock: sabés qué te queda sin contar a mano',
    slides: [
      { type: 'cover', kicker: 'Herramienta gratuita', lines: ['CONTROL DE STOCK:', 'SABÉS QUÉ', 'TE <span class="mag">QUEDA</span>'], sub: 'La planilla que ordena tu inventario.', cta: 'Deslizá para verla' },
      { type: 'problem', pill: 'El problema', statement: 'No sabés cuánto stock te queda<br>ni cuándo reponer.', lead: 'Comprás de más o te quedás sin vender.' },
      { type: 'solution', pill: 'La solución', chips: ['Stock al día', 'Alertas de mínimo', 'Movimientos'], statement: 'Una planilla simple para controlar tu <span class="teal">inventario</span>.' },
      { type: 'rows', items: [
        { k: 'l', v: '✓', t: 'Sabés cuánto te queda', small: 'Y cuándo tenés que reponer.' },
        { k: 'l', v: '✓', t: 'Sin fórmulas complicadas', small: 'Lista para usar desde el día uno.' }
      ] },
      { type: 'close', pill: 'Control de stock', lines: ['Comentá', { grad: 'STOCK' }, 'y te lo mando.'], cta: 'Comentá STOCK y te lo mando', sub: 'Guardá este post · urquisoft.com' }
    ],
    caption: '¿Sabés cuánto stock te queda sin contar a mano? Comprar de más o quedarte sin vender es el precio de no tener un control simple. Te comparto una planilla de control de stock: Stock al día, con alertas de mínimo. Movimientos registrados. Sin fórmulas complicadas, lista para usar. Guardá este post. Comentá STOCK y te lo mando.',
    hashtags: ['#stock', '#inventario', '#pymes', '#gestion', '#comercios']
  },
  {
    id: 22, theme: 'dark', tag: 'EDUCACIÓN · 2026',
    title: 'Ticket o factura: ¿qué comprobante le das a tu cliente?',
    slides: [
      { type: 'cover', kicker: 'Educación · Facturación', lines: ['TICKET O FACTURA:', '¿QUÉ COMPROBANTE', 'LE DÁS A TU <span class="mag">CLIENTE</span>?'], sub: 'Cada comprobante tiene su momento.', cta: 'Deslizá para entenderlo' },
      { type: 'problem', pill: 'La duda', statement: 'No siempre queda claro qué comprobante corresponde.', lead: 'Y entregar mal puede traerte problemas.' },
      { type: 'solution', pill: 'Lo básico', chips: ['Ticket', 'Factura', 'Comprobante'], statement: 'Cada comprobante, en su <span class="teal">momento</span>.' },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'El ticket', small: 'Para la venta de mostrador, al consumidor final.' }] },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'La factura', small: 'Cuando tu cliente la pide, para su contabilidad.' }] },
      { type: 'close', pill: 'Emitido desde el sistema', lines: ['Tu sistema emite el comprobante', { grad: 'que corresponde, sin dudar.' }], cta: 'Escribinos y te lo mostramos', sub: 'urquisoft.com' }
    ],
    caption: 'Ticket o factura: ¿qué comprobante le das a tu cliente? No siempre queda claro, y entregar mal puede traerte problemas. Lo básico: El ticket va en la venta de mostrador. La factura, cuando tu cliente la pide para su contabilidad. Con un sistema, cada comprobante se emite en el momento, sin dudar. Escribinos y te lo mostramos aplicado a tu negocio.',
    hashtags: ['#facturacion', '#afip', '#pymes', '#comercios', '#gestion']
  },
  {
    id: 23, theme: 'dark', tag: 'CASO REAL · 2026',
    title: 'Extractos a asientos: el estudio que dejó de cargar a mano',
    slides: [
      { type: 'cover', kicker: 'Caso real · Estudio contable', lines: ['EXTRACTOS A ASIENTOS:', 'EL ESTUDIO QUE DEJÓ', 'DE CARGAR <span class="mag">A MANO</span>'], sub: 'Del PDF del banco al asiento, automático.', cta: 'Deslizá para ver el caso' },
      { type: 'rows', items: [
        { k: 'l', v: '✕', t: 'Horas mecánicas por mes' },
        { k: 'l', v: '✕', t: 'Errores de imputación' },
        { k: 'l', v: '✕', t: 'Cada banco es un mundo' }
      ] },
      { type: 'solution', pill: 'La solución', statement: 'Se sube el PDF del banco y el sistema <span class="teal">extrae y clasifica</span> los movimientos solo.' },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'Las reglas del estudio', small: 'Palabras clave, CUIT, gastos bancarios y sueldos.' }] },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'Revisión en un clic', small: 'Lo correcto se aprueba; lo corregido queda aprendido.' }] },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'Export listo para Xubio', small: 'Asientos balanceados, validados contra tu plantilla.' }] },
      { type: 'close', pill: 'Menos carga, más análisis', lines: ['De horas de carga', { grad: 'a minutos de revisión.' }], cta: 'Escribinos y te lo mostramos con tus extractos', sub: 'Se publica con permiso del cliente · urquisoft.com' }
    ],
    caption: 'Un estudio contable cargaba extractos a mano, movimiento por movimiento. Horas mecánicas y errores que después cuestan caro. Con Extractos a Asientos, el PDF del banco se convierte en asientos listos para Xubio: Extrae movimientos automáticamente. Clasifica con las reglas del estudio. Revisión en un clic, y aprende de cada corrección. Export balanceado, validado contra tu plantilla. Menos carga mecánica, más tiempo para analizar. Escribinos y te lo mostramos con tus extractos.',
    hashtags: ['#estudioscontables', '#xubio', '#contabilidad', '#automatizacion', '#pymes'],
    liCaption: 'Los estudios contables pierden horas cada mes cargando extractos a mano: movimiento por movimiento, banco por banco, con errores que después cuestan caro. Con Extractos a Asientos, el PDF del banco se convierte en asientos listos para Xubio. El sistema extrae movimientos, clasifica con las reglas del estudio y permite revisar en un clic, aprendiendo de cada corrección. Resultado: menos carga mecánica y más tiempo para analizar. Escribinos y te lo mostramos con tus extractos.',
    liSlides: [
      { type: 'cover', kicker: 'Caso real · Automatización contable', lines: ['DE EXTRACTOS', 'A ASIENTOS', 'EN <span class="mag">MINUTOS</span>'], sub: 'Cómo un estudio dejó de cargar a mano.', cta: 'Deslizá para ver el caso' },
      { type: 'problem', pill: 'El problema', statement: 'Horas de carga mecánica<br>y errores de imputación.', lead: 'Cada banco, un formato distinto.' },
      { type: 'solution', pill: 'La solución', chips: ['Extrae', 'Clasifica', 'Exporta'], statement: 'El PDF del banco se convierte en <span class="teal">asientos</span>.' },
      { type: 'close', pill: 'Extractos a asientos', lines: ['Menos carga mecánica,', { grad: 'más tiempo para analizar.' }], cta: 'Escribinos y te lo mostramos', sub: 'urquisoft.com' }
    ]
  },
  {
    id: 24, theme: 'light', tag: 'EQUIPO · 2026',
    title: 'Así testeamos cada solución antes de entregarla',
    slides: [
      { type: 'cover', kicker: 'Nuestro equipo', lines: ['ASÍ TESTEAMOS', 'CADA SOLUCIÓN', 'ANTES DE <span class="mag">ENTREGARLA</span>'], sub: 'Hecho para comercios reales.', cta: 'Deslizá para ver el proceso' },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'Probamos con casos reales', small: 'Con datos de comercios, no de laboratorio.' }] },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'Cada pantalla se revisa a fondo', small: 'Antes de que la veas vos.' }] },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'Mejoramos con tu feedback', small: 'Lo que usás todos los días se pule.' }] },
      { type: 'quote', lines: ['Si no lo usaríamos en nuestro comercio,', '<span class="mag">no lo entregamos</span>.'] },
      { type: 'close', pill: 'Hecho para comercios reales', lines: ['Lo probamos, lo usamos', { grad: 'y recién ahí lo entregamos.' }], cta: 'Escribinos y probalo vos', sub: 'urquisoft.com' }
    ],
    caption: 'Así testeamos cada solución antes de entregarla. No probamos en un laboratorio: Probamos con casos reales, con datos de comercios. Cada pantalla se revisa a fondo. Mejoramos con tu feedback: lo que usás todos los días se pule. Nuestra regla: «Si no lo usaríamos en nuestro comercio, no lo entregamos». Escribinos y probalo vos.',
    hashtags: ['#equipo', '#detrasdeescena', '#pymes', '#calidad', '#gestion']
  },
  {
    id: 25, theme: 'light', tag: 'DATOS · 2026',
    title: 'El ecommerce argentino creció +214%: ¿tu negocio vende online?',
    slides: [
      { type: 'cover', kicker: 'Dato del día', lines: ['EL ECOMMERCE', 'ARGENTINO CRECIÓ', '<span class="mag">+214%</span>'], sub: '¿Tu negocio ya vende online?', cta: 'Deslizá para ver el dato' },
      { type: 'metrics', ctx: 'El ecommerce argentino creció en 2025', num: '+214%', cap: 'Y 2 de cada 3 compras se hacen desde el celular.' },
      { type: 'close', pill: 'Tu tienda online', lines: ['El mostrador solo no alcanza.', { grad: 'Tu tienda, abierta 24/7.' }], cta: 'Escribinos y armamos tu tienda online', sub: 'urquisoft.com' }
    ],
    caption: 'El ecommerce argentino creció +214% en 2025. Y 2 de cada 3 compras ya se hacen desde el celular. El mostrador solo no alcanza: tu cliente también compra online. Una tienda integrada con tu sistema te deja vender 24/7, con stock y precios sincronizados. Escribinos y armamos tu tienda online.',
    hashtags: ['#ecommerce', '#ventasonline', '#pymes', '#comercios', '#datos']
  },
  {
    id: 26, theme: 'magenta', tag: 'HERRAMIENTA · 2026', pdf: true, dmKeyword: 'CAJA',
    title: 'Control de caja: sabés qué te entra y qué te sale',
    slides: [
      { type: 'cover', kicker: 'Herramienta gratuita', lines: ['CONTROL DE CAJA:', 'SABÉS QUÉ TE', '<span class="mag">ENTRA</span> Y SALE'], sub: 'La planilla que cierra tu caja sola.', cta: 'Deslizá para verla' },
      { type: 'rows', items: [
        { k: 'l', v: '✕', t: 'Cierres que no cierran' },
        { k: 'l', v: '✕', t: 'Plata que no sabés dónde quedó' },
        { k: 'l', v: '✕', t: 'Tickets en una caja de zapatos' }
      ] },
      { type: 'solution', pill: 'La solución', chips: ['Ingresos', 'Egresos', 'Cierre diario'], statement: 'Una planilla simple para controlar tu <span class="teal">caja</span>.' },
      { type: 'rows', items: [
        { k: 'l', v: '✓', t: 'Sabés cuánto entra y sale', small: 'Cada movimiento, registrado.' },
        { k: 'l', v: '✓', t: 'Cierre diario en un vistazo', small: 'Sin sumar a mano al final del día.' }
      ] },
      { type: 'close', pill: 'Control de caja', lines: ['Comentá', { grad: 'CAJA' }, 'y te lo mando.'], cta: 'Comentá CAJA y te lo mando', sub: 'Guardá este post · urquisoft.com' }
    ],
    caption: '¿Sabés cuánto te entra y cuánto te sale por día? Cierres que no cierran y plata que no sabés dónde quedó son el precio de no tener un control simple. Te comparto una planilla de control de caja: Ingresos y egresos registrados. Cierre diario en un vistazo. Sin fórmulas complicadas, lista para usar. Guardá este post. Comentá CAJA y te lo mando.',
    hashtags: ['#caja', '#controlcaja', '#pymes', '#gestion', '#comercios']
  },
  {
    id: 27, theme: 'dark', tag: 'MITO · 2026',
    title: 'Mito: «con Excel me alcanza» para manejar mi negocio',
    slides: [
      { type: 'cover', kicker: 'Mito vs realidad', lines: ['EL MITO:', '«CON EXCEL', 'ME <span class="strike">ALCANZA</span>»'], sub: 'Mito o realidad: lo charlamos.', cta: 'Deslizá para descubrirlo' },
      { type: 'problem', pill: 'El mito', statement: '«Con una planilla de Excel manejo todo.»', lead: 'Total, es gratis y ya la sé usar.' },
      { type: 'solution', pill: 'La realidad', chips: ['Caja', 'Stock', 'Clientes', 'Reportes'], statement: 'El Excel no conecta tu caja con tu <span class="teal">stock</span>, y cada venta se anota a mano.' },
      { type: 'close', pill: 'El salto', lines: ['Del Excel al sistema:', { grad: 'más orden, menos planillas.' }], cta: 'Escribinos y te mostramos el salto', sub: 'urquisoft.com' }
    ],
    caption: 'Mito: «con Excel me alcanza». Es gratis y ya lo sé usar, pero el Excel no conecta tu caja con tu stock: cada venta se anota a mano y los reportes los armás vos. La realidad: con un sistema, caja, stock, clientes y reportes viven en un solo lugar. Del Excel al sistema, el salto es más orden y menos planillas. Escribinos y te lo mostramos aplicado a tu negocio.',
    hashtags: ['#excel', '#mitos', '#pymes', '#gestion', '#digitalizacion']
  },
  {
    id: 28, theme: 'dark', tag: 'EDUCACIÓN · 2026',
    title: 'Vender a crédito: ¿sabés quién te debe y desde cuándo?',
    slides: [
      { type: 'cover', kicker: 'Educación · Crédito', lines: ['VENDER A CRÉDITO:', '¿SABÉS QUIÉN', 'TE <span class="mag">DEBE</span>?'], sub: 'El crédito bien manejado se cobra.', cta: 'Deslizá para entenderlo' },
      { type: 'problem', pill: 'La duda', statement: 'Vendés a crédito y anotás en la libreta.', lead: 'Y después no sabés quién te debe ni desde cuándo.' },
      { type: 'solution', pill: 'Lo básico', chips: ['Cuenta corriente', 'Antigüedad', 'Recordatorios'], statement: 'Cada crédito, registrado en su <span class="teal">cuenta</span>.' },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'La cuenta corriente', small: 'Cuánto te debe cada cliente, siempre al día.' }] },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'La antigüedad de la deuda', small: 'Desde cuándo te deben, para saber a quién cobrar primero.' }] },
      { type: 'close', pill: 'Crédito ordenado', lines: ['El crédito se cobra', { grad: 'cuando está ordenado.' }], cta: 'Escribinos y te lo mostramos', sub: 'urquisoft.com' }
    ],
    caption: 'Vender a crédito es normal. El problema es anotarlo en la libreta y olvidarse. Con un sistema, cada crédito queda registrado: Cuenta corriente por cliente, siempre al día. Antigüedad de cada deuda, para saber a quién cobrar primero. Recordatorios para no perseguir a nadie. El crédito se cobra cuando está ordenado. Escribinos y te lo mostramos.',
    hashtags: ['#credito', '#cuentacorriente', '#cobranzas', '#pymes', '#gestion']
  },
  {
    id: 29, theme: 'light', tag: 'DATOS · 2026',
    title: 'Las pymes que se digitalizan venden hasta 3x más',
    slides: [
      { type: 'cover', kicker: 'Dato del día', lines: ['LAS PYMES QUE SE', 'DIGITALIZAN VENDEN', 'HASTA <span class="mag">3X</span> MÁS'], sub: '¿Tu negocio ya dio el salto?', cta: 'Deslizá para ver el dato' },
      { type: 'metrics', ctx: 'Las pymes que digitalizan su gestión', num: '3x', cap: 'venden más que las que siguen con papeles.' },
      { type: 'rows', items: [
        { k: 'l', v: '✓', t: 'Facturación al día', small: 'Cada venta queda registrada, sin papeles.' },
        { k: 'l', v: '✓', t: 'Stock en tiempo real', small: 'Sabés qué te queda sin contar a mano.' }
      ] },
      { type: 'close', pill: 'Tu negocio digital', lines: ['Digitalizar no es un lujo.', { grad: 'Es la diferencia entre vender y quedarse.' }], cta: 'Escribinos y digitalizamos tu negocio', sub: 'urquisoft.com' }
    ],
    caption: 'Las pymes que digitalizan su gestión venden hasta 3x más que las que siguen con papeles. Digitalizar no es un lujo: Facturación al día, sin papeles. Stock en tiempo real, sin contar a mano. Reportes que se arman solos. Es la diferencia entre vender y quedarse. Escribinos y digitalizamos tu negocio.',
    hashtags: ['#digitalizacion', '#datos', '#pymes', '#comercios', '#gestion'],
    liCaption: 'Las pymes que digitalizan su gestión venden hasta 3x más que las que siguen con papeles. La digitalización deja de ser una opción cuando la facturación manual, el stock a ojo y los reportes armados a mano empiezan a costar ventas. Un sistema integrado registra cada venta, mantiene el stock en tiempo real y genera los números del negocio en segundos. Es la diferencia entre vender y quedarse. Escribinos y digitalizamos tu negocio.',
    liSlides: [
      { type: 'cover', kicker: 'Transformación digital', lines: ['LAS PYMES QUE SE', 'DIGITALIZAN VENDEN', 'HASTA <span class="mag">3X</span> MÁS'], sub: 'El dato que cambia el juego.', cta: 'Deslizá para verlo' },
      { type: 'metrics', ctx: 'Las pymes que digitalizan su gestión', num: '3x', cap: 'venden más que las que siguen con papeles.' },
      { type: 'rows', items: [
        { k: 'l', v: '✓', t: 'Facturación al día', small: 'Cada venta queda registrada, sin papeles.' },
        { k: 'l', v: '✓', t: 'Stock en tiempo real', small: 'Sabés qué te queda sin contar a mano.' }
      ] },
      { type: 'close', pill: 'El salto digital', lines: ['Digitalizar es la diferencia', { grad: 'entre vender y quedarse.' }], cta: 'Escribinos y digitalizamos tu negocio', sub: 'urquisoft.com' }
    ]
  },
  {
    id: 30, theme: 'light', tag: 'HUMOR · 2026',
    title: 'POV: el dueño cerrando el mes',
    slides: [
      { type: 'cover', coverStyle: 'quote', kicker: 'POV · Cierre de mes', lines: ['POV: EL DUEÑO', 'CERRANDO', 'EL <span class="mag">MES</span>'], sub: 'Sin drama, prometemos.', cta: 'Deslizá para sufrir con él' },
      { type: 'scene', q: 'Facturas, tickets y...', small: '«¿Cuánto vendí este mes?... no sé.»', author: 'EL DUEÑO', role: 'POV' },
      { type: 'scene', q: '«Un momento, ¿este papel es de marzo?»' },
      { type: 'close', pill: 'Con un sistema', lines: ['El cierre de mes son 5 minutos.', { grad: 'Sin drama.' }], cta: 'Contanos: ¿cuánto te lleva cerrar el mes?', sub: 'Los honestos ponen el número · urquisoft.com' }
    ],
    caption: 'POV: el dueño cerrando el mes. Papeles por todos lados y la pregunta de siempre: «¿cuánto vendí este mes?». Con un sistema, el cierre son 5 minutos: Ventas del mes al instante. Reportes armados solos. Sin drama. Contanos: ¿cuánto te lleva cerrar el mes? Los honestos ponen el número.',
    hashtags: ['#humor', '#pymes', '#cierremes', '#gestion', '#comercios']
  }
];
