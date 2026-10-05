// Plan de contenido mensual v6 — 20 posts de Urquisoft (ids 21–40).
// DSL: cada slide es {type, ...campos}. Ver build-all-v6.js para el renderizado (render.js + brand.js).
// Convenciones: voseo con tilde, « », 5 hashtags sin #urquisoft, CTA por pilar
// (Herramientas → «Guardá este post» + keyword DM; Educación/Caso → «Escribinos y…»). Nunca WhatsApp como canal.
// Campos v6: pdf+dmKeyword (tool → PDF), liCaption (LinkedIn copy), liSlides (LinkedIn gráfica).
// Revisión de contenido: carruseles cortos (3–4 slides), tag sin render (brand.js ya no lo emite).

module.exports = [
  {
    id: 21, theme: 'magenta', tag: 'HERRAMIENTA · 2026', pdf: true, dmKeyword: 'CAJA',
    title: 'Checklist de cierre de caja: 5 pasos que cierran tu día',
    slides: [
      { type: 'cover', kicker: 'Herramienta gratuita', lines: ['CIERRE DE CAJA', 'EN <span class="mag">5 PASOS</span>'], sub: 'La checklist que cierra tu caja sin errores.', cta: 'Deslizá para verla' },
      { type: 'rows', items: [
        { k: 'n', v: '1', t: 'Cortar operaciones del turno', small: 'No más ventas ni movimientos hasta cerrar.' },
        { k: 'n', v: '2', t: 'Contar el efectivo físico', small: 'Billetes, monedas y tickets, uno por uno.' },
        { k: 'n', v: '3', t: 'Restar el fondo de apertura', small: 'Lo que dejaste para arrancar el día.' },
        { k: 'n', v: '4', t: 'Comparar con los registros', small: 'Lo que el sistema dice que deberías tener.' },
        { k: 'n', v: '5', t: 'Detectar diferencias', small: 'Si no cierra, algo se anotó mal.' }
      ] },
      { type: 'close', pill: 'Checklist de caja', lines: ['Comentá', { grad: 'CAJA' }, 'y te la mando.'], cta: 'Comentá CAJA y te la mando', sub: 'Guardá este post · urquisoft.com' }
    ],
    caption: '¿Cerrás la caja y siempre te falta o te sobra plata? El cierre de caja tiene un orden, y seguirlo te ahorra dolores de cabeza. Te comparto una checklist de 5 pasos: 1. Cortar operaciones del turno. 2. Contar el efectivo físico. 3. Restar el fondo de apertura. 4. Comparar con los registros. 5. Detectar diferencias. Si no cierra, algo se anotó mal. Guardá este post. Comentá CAJA y te la mando.',
    hashtags: ['#caja', '#cierrecaja', '#pymes', '#gestion', '#comercios']
  },
  {
    id: 22, theme: 'dark', tag: 'EDUCACIÓN · 2026',
    title: 'Hábitos que te roban plata: finanzas mezcladas',
    slides: [
      { type: 'cover', kicker: 'Educación · Hábitos', lines: ['HÁBITOS QUE', 'TE ROBAN PLATA:', 'FINANZAS <span class="mag">MEZCLADAS</span>'], sub: 'El primer hábito que ordena tu negocio.', cta: 'Deslizá para entenderlo' },
      { type: 'problem', pill: 'El problema', statement: 'Vendés todos los días<br>y no tenés plata.', lead: 'Porque la plata del negocio paga tus gastos personales.' },
      { type: 'solution', pill: 'El primer hábito', chips: ['Sueldo fijo', 'Cuenta separada', 'Solo el negocio'], statement: 'La plata del negocio y la tuya, en <span class="teal">cuentas separadas</span>.' },
      { type: 'close', pill: 'Finanzas separadas', lines: ['Vender y no tener plata', { grad: 'se arregla separando.' }], cta: 'Escribinos y ordenamos tus números', sub: 'urquisoft.com' }
    ],
    caption: '¿Vendés todos los días y a fin de mes no tenés plata? No es que te falte venta: es que mezclás la plata del negocio con la tuya. Separar es el primer hábito de todo comercio ordenado: un sueldo fijo para el dueño, una cuenta para el negocio y gastos personales afuera. Mezclar es la causa #1 del «vendo pero no tengo plata». Escribinos y ordenamos tus números.',
    hashtags: ['#finanzas', '#habitos', '#pymes', '#gestion', '#comercios']
  },
  {
    id: 23, theme: 'dark', tag: 'CASO REAL · 2026',
    title: 'Extractos a asientos: el estudio que dejó de cargar a mano',
    slides: [
      { type: 'cover', kicker: 'Caso real · Estudio contable', lines: ['EXTRACTOS A ASIENTOS:', 'DE CARGAR A MANO', 'A <span class="mag">UN CLIC</span>'], sub: 'Del PDF del banco al asiento, automático.', cta: 'Deslizá para ver el caso' },
      { type: 'rows', items: [
        { k: 'l', v: '✕', t: 'Horas mecánicas por mes' },
        { k: 'l', v: '✕', t: 'Errores de imputación' },
        { k: 'l', v: '✕', t: 'Cada banco es un mundo' }
      ] },
      { type: 'solution', pill: 'La solución', chips: ['PDF del banco', 'Clasifica solo', 'Export a Xubio'], statement: 'El PDF se convierte en <span class="teal">asientos</span>, validado por 340 pruebas automáticas.' },
      { type: 'close', pill: 'Menos carga, más análisis', lines: ['De horas de carga', { grad: 'a minutos de revisión.' }], cta: 'Escribinos y te lo mostramos con tus extractos', sub: 'Se publica con permiso del cliente · urquisoft.com' }
    ],
    caption: '¿Cuántas horas pierde tu estudio cargando extractos a mano? Un estudio contable pasaba horas por mes copiando movimientos del banco, con errores que después cuestan caro. Con Extractos a Asientos, el PDF del banco se convierte en asientos listos para Xubio: clasifica con reglas propias, valida con 340 pruebas automáticas y se revisa en un clic. Menos carga, más tiempo para analizar. Escribinos y te lo mostramos con tus extractos.',
    hashtags: ['#estudioscontables', '#xubio', '#contabilidad', '#automatizacion', '#pymes'],
    liCaption: 'Un estudio contable cargaba extractos a mano, movimiento por movimiento, banco por banco. Horas mecánicas, errores de imputación y ningún tiempo para analizar. Hoy el PDF del banco se convierte en asientos listos para Xubio: el sistema extrae, clasifica con las reglas del estudio y valida cada asiento con 340 pruebas automáticas antes de exportar. La revisión es en un clic. Resultado: menos carga mecánica y más tiempo para lo que importa. Escribinos y te lo mostramos con tus extractos.',
    liSlides: [
      { type: 'cover', kicker: 'Caso real · Automatización contable', lines: ['DEL PDF DEL BANCO', 'AL ASIENTO,', '<span class="mag">AUTOMÁTICO</span>'], sub: 'Cómo un estudio dejó de cargar extractos a mano.', cta: 'Deslizá para ver el caso' },
      { type: 'solution', pill: 'La solución', chips: ['Extrae', 'Clasifica', 'Valida'], statement: 'Cada asiento se valida con <span class="teal">340 pruebas</span> antes de exportar.' },
      { type: 'close', pill: 'Extractos a asientos', lines: ['Menos carga mecánica,', { grad: 'más tiempo para analizar.' }], cta: 'Escribinos y te lo mostramos', sub: 'urquisoft.com' }
    ]
  },
  {
    id: 24, theme: 'light', tag: 'EQUIPO · 2026',
    title: 'Cómo probamos cada migración antes de tocar tus datos',
    slides: [
      { type: 'cover', kicker: 'Nuestro equipo', lines: ['CÓMO PROBAMOS', 'ANTES DE', '<span class="mag">MIGRAR</span>'], sub: 'El proceso honesto de Camilo y Adrián.', cta: 'Deslizá para ver el proceso' },
      { type: 'rows', items: [
        { k: 'l', v: '✓', t: 'Escuchamos tu negocio primero', small: 'Antes de proponer nada.' },
        { k: 'l', v: '✓', t: 'Diseñamos la migración a tu medida', small: 'Sin tocar lo que ya funciona.' },
        { k: 'l', v: '✓', t: 'Probamos 340 veces', small: 'Cada paso se valida antes de tocar tus datos.' },
        { k: 'l', v: '✓', t: 'Te acompañamos después', small: 'Instalación, capacitación y soporte.' }
      ] },
      { type: 'quote', lines: ['Probamos cada migración', 'como si fuera <span class="mag">nuestro negocio</span>.'] },
      { type: 'close', pill: 'Antes de migrar', lines: ['Lo probamos 340 veces', { grad: 'antes de tocarte un dato.' }], cta: 'Escribinos y te contamos cómo migramos', sub: 'urquisoft.com' }
    ],
    caption: 'Migrar tu sistema da miedo, por eso lo probamos todo antes. Nuestro proceso, de Camilo y Adrián: escuchamos tu negocio primero. Diseñamos la migración a tu medida, sin tocar lo que ya funciona. Probamos 340 veces cada paso antes de tocar tus datos. Y te acompañamos después, con instalación, capacitación y soporte. Probamos cada migración como si fuera nuestro negocio. Escribinos y te contamos cómo lo hacemos.',
    hashtags: ['#equipo', '#detrasdeescena', '#migracion', '#pymes', '#gestion']
  },
  {
    id: 25, theme: 'light', tag: 'DATOS · 2026',
    title: 'El 82% de las pymes fracasa por una caja mal gestionada',
    slides: [
      { type: 'cover', kicker: 'Dato del día', lines: ['<span class="mag">82%</span> FRACASA', 'POR UNA CAJA', 'MAL GESTIONADA'], sub: 'Y no es falta de apps.', cta: 'Deslizá para ver el dato' },
      { type: 'metrics', ctx: 'De las pymes que cierran, la causa #1 es', num: '82%', cap: 'La gestión del flujo de caja, no la falta de apps.' },
      { type: 'close', pill: 'Tu flujo de caja', lines: ['Saber qué entra y qué sale', { grad: 'es lo primero que ordenamos.' }], cta: 'Escribinos y ordenamos tu caja', sub: 'urquisoft.com' }
    ],
    caption: '¿Por qué cierran las pymes? No es falta de apps ni de clientes: el 82% fracasa por una caja mal gestionada. El flujo de caja —qué entra y qué sale— es el indicador que más se descuida y el que más duele cuando se rompe. La buena noticia: es el primero que se ordena. Saber qué entra y qué sale, todos los días. Escribinos y ordenamos tu caja.',
    hashtags: ['#flujodecaja', '#datos', '#pymes', '#gestion', '#comercios']
  },
  {
    id: 26, theme: 'magenta', tag: 'HERRAMIENTA · 2026', pdf: true, dmKeyword: 'STOCK',
    title: 'Planilla de stock con alertas: sabés qué te queda',
    slides: [
      { type: 'cover', kicker: 'Herramienta gratuita', lines: ['PLANILLA DE STOCK', 'CON <span class="mag">ALERTAS</span>', 'AUTOMÁTICAS'], sub: 'Stock mínimo + avisos cuando te quedás corto.', cta: 'Deslizá para verla' },
      { type: 'rows', items: [
        { k: 'l', v: '✓', t: 'Stock mínimo por producto', small: 'El nivel al que tenés que reponer.' },
        { k: 'l', v: '✓', t: 'Alertas automáticas', small: 'Te avisa cuando algo está por agotarse.' },
        { k: 'l', v: '✓', t: 'Movimientos registrados', small: 'Entradas y salidas, al día.' }
      ] },
      { type: 'close', pill: 'Planilla de stock', lines: ['Comentá', { grad: 'STOCK' }, 'y te la mando.'], cta: 'Comentá STOCK y te la mando', sub: 'Guardá este post · urquisoft.com' }
    ],
    caption: '¿Te quedaste sin vender porque nadie avisó que faltaba stock? Comprar de más o quedarte corto es el precio de no tener alertas. Te comparto una planilla de stock: stock mínimo por producto, alertas automáticas cuando algo está por agotarse y movimientos registrados. Lista para usar desde el día uno. Guardá este post. Comentá STOCK y te la mando.',
    hashtags: ['#stock', '#inventario', '#pymes', '#gestion', '#comercios']
  },
  {
    id: 27, theme: 'dark', tag: 'EDUCACIÓN · 2026',
    title: 'Urgente vs importante: el enemigo del dueño',
    slides: [
      { type: 'cover', kicker: 'Educación · Gestión del tiempo', lines: ['URGENTE VS IMPORTANTE:', 'EL ENEMIGO', 'DEL <span class="mag">DUEÑO</span>'], sub: 'Cuando hacés de todo, lo importante espera.', cta: 'Deslizá para entenderlo' },
      { type: 'problem', pill: 'El problema', statement: 'Hacés de todo, todo el día.', lead: 'Y lo estratégico queda para mañana. Siempre para mañana.' },
      { type: 'solution', pill: 'La clave', chips: ['Urgente', 'Importante', 'Estratégico'], statement: 'Lo urgente se delega o se automatiza; lo <span class="teal">importante</span> se agenda.' },
      { type: 'close', pill: 'Tu negocio primero', lines: ['El negocio no crece', { grad: 'si el dueño no lo piensa.' }], cta: 'Escribinos y te mostramos qué automatizar', sub: 'urquisoft.com' }
    ],
    caption: 'El mayor enemigo de tu negocio no es la competencia: es el día a día. Cuando hacés de todo —atender, cobrar, perseguir proveedores—, lo estratégico queda para mañana. Y mañana nunca llega. La clave está en separar lo urgente de lo importante: lo urgente se delega o se automatiza, y lo importante se agenda. Un sistema te saca de encima la operación para que vuelvas a pensar tu negocio. Escribinos y te mostramos qué automatizar.',
    hashtags: ['#productividad', '#gestion', '#pymes', '#liderazgo', '#comercios']
  },
  {
    id: 28, theme: 'dark', tag: 'EDUCACIÓN · 2026',
    title: 'Cobrar a crédito sin perseguir a nadie',
    slides: [
      { type: 'cover', kicker: 'Educación · Crédito', lines: ['COBRAR A CRÉDITO', 'SIN', '<span class="mag">PERSEGUIR</span>'], sub: 'El crédito bien manejado se cobra solo.', cta: 'Deslizá para entenderlo' },
      { type: 'problem', pill: 'El problema', statement: 'Vendés a crédito y anotás en la libreta.', lead: 'Después no sabés quién te debe ni desde cuándo.' },
      { type: 'solution', pill: 'Lo básico', chips: ['Cuenta corriente', 'Antigüedad', 'Recordatorios'], statement: 'Cada crédito, registrado con su <span class="teal">antigüedad</span> y sus recordatorios.' },
      { type: 'close', pill: 'Crédito ordenado', lines: ['Cuándo sí, cuándo no,', { grad: 'y a quién cobrar primero.' }], cta: 'Escribinos y te lo mostramos', sub: 'urquisoft.com' }
    ],
    caption: 'Vender a crédito está bien: perseguir deudas no. El problema empieza en la libreta, donde todo se mezcla. Lo básico: saber cuándo sí dar crédito y cuándo no. Tener la antigüedad de cada deuda para cobrar primero lo más viejo. Y recordatorios automáticos para no perseguir a nadie. La libreta olvida; el sistema recuerda. Escribinos y te lo mostramos.',
    hashtags: ['#credito', '#cuentacorriente', '#cobranzas', '#pymes', '#gestion']
  },
  {
    id: 29, theme: 'light', tag: 'DATOS · 2026',
    title: '5 indicadores que todo dueño tiene que mirar',
    slides: [
      { type: 'cover', kicker: 'Dato del día', lines: ['5 INDICADORES', 'QUE TODO DUEÑO', 'DEBERÍA <span class="mag">MIRAR</span>'], sub: 'Los números que mandan en tu negocio.', cta: 'Deslizá para verlos' },
      { type: 'rows', items: [
        { k: 'l', v: '✓', t: 'Flujo de caja', small: 'Qué entra y qué sale, sin sorpresas.' },
        { k: 'l', v: '✓', t: 'Margen', small: 'Cuánto te queda de cada venta.' },
        { k: 'l', v: '✓', t: 'Stock', small: 'Qué tenés, qué te falta, qué sobra.' },
        { k: 'l', v: '✓', t: 'Deuda por cliente', small: 'Quién te debe y desde cuándo.' },
        { k: 'l', v: '✓', t: 'Ticket promedio', small: 'Cuánto gasta cada cliente, de media.' }
      ] },
      { type: 'close', pill: 'Tus 5 indicadores', lines: ['Si mirás estos cinco,', { grad: 'tu negocio se ordena solo.' }], cta: 'Escribinos y armamos tu tablero', sub: 'urquisoft.com' }
    ],
    caption: 'Hay 5 números que todo dueño debería mirar cada semana: 1. Flujo de caja: qué entra y qué sale. 2. Margen: cuánto te queda de cada venta. 3. Stock: qué tenés, qué falta, qué sobra. 4. Deuda por cliente: quién te debe y desde cuándo. 5. Ticket promedio: cuánto gasta cada cliente. Si mirás estos cinco, tu negocio se ordena solo. Escribinos y armamos tu tablero.',
    hashtags: ['#indicadores', '#kpis', '#pymes', '#gestion', '#datos'],
    liCaption: 'Un dueño que no mira números no maneja un negocio: lo adivina. Cinco indicadores separan al que sobrevive del que crece: flujo de caja, margen, stock, deuda por cliente y ticket promedio. Mirarlos cada semana no lleva más de diez minutos y cambia las decisiones que tomás. Si todavía los seguís de memoria, es momento de un tablero. Escribinos y armamos el tuyo.',
    liSlides: [
      { type: 'cover', kicker: 'Gestión · Indicadores', lines: ['LOS 5 NÚMEROS', 'QUE <span class="mag">MANDAN</span>', 'EN TU NEGOCIO'], sub: 'Los indicadores que separan al que crece del que adivina.', cta: 'Deslizá para verlos' },
      { type: 'rows', items: [
        { k: 'l', v: '✓', t: 'Flujo de caja', small: 'Qué entra y qué sale, sin sorpresas.' },
        { k: 'l', v: '✓', t: 'Margen', small: 'Cuánto te queda de cada venta.' },
        { k: 'l', v: '✓', t: 'Stock', small: 'Qué tenés, qué te falta, qué sobra.' },
        { k: 'l', v: '✓', t: 'Deuda por cliente', small: 'Quién te debe y desde cuándo.' },
        { k: 'l', v: '✓', t: 'Ticket promedio', small: 'Cuánto gasta cada cliente, de media.' }
      ] },
      { type: 'close', pill: 'Los 5 números', lines: ['Si mirás estos cinco,', { grad: 'tu negocio se ordena solo.' }], cta: 'Escribinos y armamos tu tablero', sub: 'urquisoft.com' }
    ]
  },
  {
    id: 30, theme: 'light', tag: 'HUMOR · 2026',
    title: 'POV: el dueño cerrando el mes',
    slides: [
      { type: 'cover', coverStyle: 'quote', kicker: 'POV · Cierre de mes', lines: ['POV: EL DUEÑO', 'CERRANDO', 'EL <span class="mag">MES</span>'], sub: 'Sin drama, prometemos.', cta: 'Deslizá para sufrir con él' },
      { type: 'scene', q: 'Facturas, tickets y una pregunta…', small: '«¿Cuánto vendí este mes?»', author: 'EL DUEÑO', role: 'POV' },
      { type: 'scene', q: '«…no sé. Ahora lo sumo a mano.»', author: 'EL DUEÑO', role: 'POV' },
      { type: 'close', pill: 'Con un sistema', lines: ['El cierre de mes son 5 minutos.', { grad: 'Sin drama.' }], cta: 'Contanos: ¿cuánto te lleva cerrar el mes?', sub: 'Los honestos ponen el número · urquisoft.com' }
    ],
    caption: 'POV: el dueño cerrando el mes. Facturas por todos lados, tickets en una caja y la pregunta de siempre: «¿cuánto vendí este mes?». La respuesta duele: «no sé, ahora lo sumo a mano». Con un sistema, el cierre son 5 minutos: ventas del mes al instante, reportes armados solos. Sin drama. Contanos: ¿cuánto te lleva cerrar el mes? Los honestos ponen el número.',
    hashtags: ['#humor', '#pymes', '#cierremes', '#gestion', '#comercios']
  },
  {
    id: 31, theme: 'magenta', tag: 'HERRAMIENTA · 2026', pdf: true, dmKeyword: 'PRESUPUESTO',
    title: 'Presupuesto que se cobra: estructura y seguimiento',
    slides: [
      { type: 'cover', kicker: 'Herramienta gratuita', lines: ['EL PRESUPUESTO', 'QUE SE', '<span class="mag">COBRA</span>'], sub: 'Estructura + seguimiento, sin perder ventas.', cta: 'Deslizá para verla' },
      { type: 'rows', items: [
        { k: 'l', v: '✓', t: 'Estructura clara', small: 'Productos, precios y condiciones, sin letra chica.' },
        { k: 'l', v: '✓', t: 'Cierre sin «me lo llevo a pensar»', small: 'Seguimiento para que la venta no se enfríe.' },
        { k: 'l', v: '✓', t: 'Estado de cada presupuesto', small: 'Enviado, visto, aceptado o perdido.' }
      ] },
      { type: 'close', pill: 'Presupuesto', lines: ['Comentá', { grad: 'PRESUPUESTO' }, 'y te lo mando.'], cta: 'Comentá PRESUPUESTO y te lo mando', sub: 'Guardá este post · urquisoft.com' }
    ],
    caption: '¿Cuántos presupuestos mandaste y nunca más supiste de ellos? El presupuesto que se cobra tiene tres cosas: estructura clara, sin letra chica; cierre sin «me lo llevo a pensar», con seguimiento para que la venta no se enfríe; y estado de cada presupuesto: enviado, visto, aceptado o perdido. Te comparto una planilla para ordenar todo eso. Guardá este post. Comentá PRESUPUESTO y te lo mando.',
    hashtags: ['#presupuesto', '#ventas', '#pymes', '#gestion', '#comercios']
  },
  {
    id: 32, theme: 'dark', tag: 'CASO REAL · 2026',
    title: 'Del pedido al reparto, sin papel: huevos a domicilio',
    slides: [
      { type: 'cover', kicker: 'Caso real · Reparto a domicilio', lines: ['DEL PEDIDO AL REPARTO,', 'SIN <span class="mag">PAPEL</span>'], sub: 'Huevos a domicilio, de punta a punta.', cta: 'Deslizá para ver el caso' },
      { type: 'rows', items: [
        { k: 'l', v: '✕', t: 'Pedidos por WhatsApp, mezclados con los mensajes' },
        { k: 'l', v: '✕', t: 'Anotados a mano, con errores' },
        { k: 'l', v: '✕', t: 'Reparto armado de memoria' }
      ] },
      { type: 'solution', pill: 'La solución', chips: ['Pedidos', 'Reparto', 'Entregas'], statement: 'Del pedido a la entrega, sin papel y sin <span class="teal">memoria</span>.' },
      { type: 'close', pill: 'El reparto también se ordena', lines: ['El reparto también se ordena.', { grad: 'Contanos cómo es el tuyo.' }], cta: 'Escribinos y lo ordenamos', sub: 'urquisoft.com' }
    ],
    caption: 'Vender por WhatsApp es cómodo… hasta que los pedidos se mezclan con los mensajes. Trabajamos con un negocio de huevos a domicilio para ordenar el pedido de punta a punta: qué pidió cada cliente, qué va en cada reparto y qué se entregó. Sin papel, sin memoria, sin errores. Si tu negocio reparte, podemos ordenarlo también. Escribinos y lo ordenamos.',
    hashtags: ['#reparto', '#domicilio', '#pedidos', '#casosdeexito', '#pymes']
  },
  {
    id: 33, theme: 'dark', tag: 'EDUCACIÓN · 2026',
    title: 'Stock mínimo: la regla anti-desabastecimiento',
    slides: [
      { type: 'cover', kicker: 'Educación · Inventario', lines: ['STOCK MÍNIMO:', 'LA REGLA ANTI-', '<span class="mag">FALTANTES</span>'], sub: 'Cómo calcularlo y que el sistema avise solo.', cta: 'Deslizá para entenderla' },
      { type: 'problem', pill: 'El problema', statement: 'Reponés cuando te acordás.', lead: 'Y a veces te quedás sin vender lo que más sale.' },
      { type: 'solution', pill: 'Lo básico', chips: ['Stock mínimo', 'Alerta', 'Reposición'], statement: 'Cada producto con su nivel <span class="teal">mínimo</span>; el sistema avisa solo.' },
      { type: 'close', pill: 'Reponer a tiempo', lines: ['Reponer a tiempo', { grad: 'es vender más.' }], cta: 'Escribinos y te lo mostramos', sub: 'urquisoft.com' }
    ],
    caption: '¿Reponés cuando te acordás o cuando hace falta? El stock mínimo es la regla anti-desabastecimiento: el nivel al que tenés que reponer cada producto, calculado según cuánto vendés y cuánto tarda el proveedor. Con un sistema, cada producto tiene su mínimo y el sistema avisa solo antes de quedarte sin stock. Comprás lo justo, vendés sin cortarte. Escribinos y te lo mostramos.',
    hashtags: ['#stock', '#stockminimo', '#inventario', '#pymes', '#gestion']
  },
  {
    id: 34, theme: 'light', tag: 'EQUIPO · 2026',
    title: 'De escuchar a construir: nuestro proceso de relevamiento',
    slides: [
      { type: 'cover', kicker: 'Nuestro equipo', lines: ['DE ESCUCHAR', 'A', '<span class="mag">CONSTRUIR</span>'], sub: 'Primero escuchamos, después proponemos.', cta: 'Deslizá para ver cómo' },
      { type: 'rows', items: [
        { k: 'l', v: '✓', t: 'Escuchamos tu problema primero', small: 'Antes de proponer nada.' },
        { k: 'l', v: '✓', t: 'Relevamos cómo trabajás hoy', small: 'Tus procesos, tus papeles, tus tiempos.' },
        { k: 'l', v: '✓', t: 'Recién ahí proponemos', small: 'Una solución a tu medida, no de catálogo.' }
      ] },
      { type: 'quote', lines: ['No vendemos lo que tenemos:', 'construimos lo que <span class="mag">necesitás</span>.'] },
      { type: 'close', pill: 'Hecho a tu medida', lines: ['Escuchamos primero,', { grad: 'construimos después.' }], cta: 'Escribinos y charlamos tu caso', sub: 'urquisoft.com' }
    ],
    caption: 'De escuchar a construir. Nuestro proceso de relevamiento arranca sin vender nada: escuchamos tu problema primero. Relevamos cómo trabajás hoy: tus procesos, tus papeles, tus tiempos. Y recién ahí proponemos, una solución a tu medida y no de catálogo. No vendemos lo que tenemos: construimos lo que necesitás. Escribinos y charlamos tu caso.',
    hashtags: ['#equipo', '#detrasdeescena', '#pymes', '#gestion', '#comercios']
  },
  {
    id: 35, theme: 'light', tag: 'DATOS · 2026',
    title: '3 tools gratis que usamos todos los días',
    slides: [
      { type: 'cover', kicker: 'Dato del día', lines: ['TOOLS GRATIS', 'QUE USAMOS Y', '<span class="mag">RECOMENDAMOS</span>'], sub: 'Sin venderte nada, te las compartimos.', cta: 'Deslizá para verlas' },
      { type: 'rows', items: [
        { k: 'l', v: '✓', t: 'Toggl Track', small: 'Para medir el tiempo de cada tarea.' },
        { k: 'l', v: '✓', t: 'Wave', small: 'Contabilidad gratis, simple y en la nube.' },
        { k: 'l', v: '✓', t: 'Facturador AFIP', small: 'Para emitir comprobantes sin complicarte.' }
      ] },
      { type: 'close', pill: 'Nuestras herramientas', lines: ['Las usamos todos los días.', { grad: 'Y queremos que vos también.' }], cta: 'Guardá este post y probalas', sub: 'urquisoft.com' }
    ],
    caption: 'Te compartimos las tools gratis que usamos todos los días, sin venderte nada: Toggl Track, para medir el tiempo de cada tarea. Wave, contabilidad gratis y simple en la nube. Facturador AFIP, para emitir comprobantes sin complicarte. Las usamos nosotros y las recomendamos porque funcionan. Guardá este post y probalas.',
    hashtags: ['#herramientas', '#productividad', '#pymes', '#contabilidad', '#gestion'],
    liCaption: 'Antes de gastar en software, hay herramientas gratis que resolvemos todos los días. Las tres que usamos en Urquisoft: Toggl Track para medir el tiempo de cada tarea, Wave para llevar contabilidad simple en la nube, y el facturador AFIP para emitir comprobantes sin fricción. No tienen costo de entrada y se integran bien a un flujo ordenado. Las compartimos sin venderte nada: si te sirven, úsalas.',
    liSlides: [
      { type: 'cover', kicker: 'Recursos · Herramientas', lines: ['3 HERRAMIENTAS GRATIS', 'QUE USAMOS', 'EN <span class="mag">URQUISOFT</span>'], sub: 'Sin costo de entrada, probadas por nosotros.', cta: 'Deslizá para verlas' },
      { type: 'rows', items: [
        { k: 'l', v: '✓', t: 'Toggl Track', small: 'Para medir el tiempo de cada tarea.' },
        { k: 'l', v: '✓', t: 'Wave', small: 'Contabilidad gratis, simple y en la nube.' },
        { k: 'l', v: '✓', t: 'Facturador AFIP', small: 'Para emitir comprobantes sin complicarte.' }
      ] },
      { type: 'close', pill: 'Nuestras herramientas', lines: ['Las usamos todos los días.', { grad: 'Y queremos que vos también.' }], cta: 'Guardá este post y probalas', sub: 'urquisoft.com' }
    ]
  },
  {
    id: 36, theme: 'magenta', tag: 'HERRAMIENTA · 2026', pdf: true, dmKeyword: 'HORAS',
    title: 'Calculadora: cuánto te cuesta cada hora no facturada',
    slides: [
      { type: 'cover', kicker: 'Herramienta · Calculadora', lines: ['¿CUÁNTO TE CUESTA', 'CADA HORA QUE', 'NO <span class="mag">FACTURÁS</span>?'], sub: 'Calculalo con tu número.', cta: 'Deslizá y calculalo' },
      { type: 'flow', steps: [
        { t: 'Anotá tus horas no facturadas', small: 'Reuniones, viajes, papeles.' },
        { t: 'Multiplicá por tu valor hora', small: 'Lo que cobrás por trabajar.' },
        { t: 'Ese es el costo de no facturar', small: 'Plata que se escapa sola.' }
      ] },
      { type: 'close', pill: 'Calculadora', lines: ['Comentá', { grad: 'HORAS' }, 'y te la mando.'], cta: 'Comentá HORAS y te la mando', sub: 'Respuesta el mismo día · urquisoft.com' }
    ],
    caption: 'Cada hora que pasás anotando a mano es una hora que no facturás. Sumá reuniones, viajes y papeles, y multiplicá por lo que vale tu hora: esa es la plata que se escapa sola. Te comparto una calculadora que lo hace por vos: anotás tus horas no facturadas y ves cuánto te cuesta no facturar. Guardá este post. Comentá HORAS y te la mando.',
    hashtags: ['#horas', '#productividad', '#pymes', '#gestion', '#costos']
  },
  {
    id: 37, theme: 'light', tag: 'VALORES · 2026',
    title: 'Vos sos el dueño de tus datos, siempre',
    slides: [
      { type: 'cover', coverStyle: 'quote', kicker: 'Nuestro principio', lines: ['VOS SOS EL', 'DUEÑO DE', 'TUS <span class="mag">DATOS</span>'], sub: 'Una regla que no negociamos.', cta: 'Deslizá para conocerla' },
      { type: 'rows', items: [
        { k: 'l', v: '✓', t: 'Tus datos son tuyos, siempre', small: 'Clientes, ventas, stock e historial.' },
        { k: 'l', v: '✓', t: 'Los exportás cuando quieras', small: 'Sin retenerte nada, sin letra chica.' },
        { k: 'l', v: '✓', t: 'Backups incluidos', small: 'Tu información, protegida.' }
      ] },
      { type: 'close', pill: 'Confianza', lines: ['Tu negocio, ordenado.', { grad: 'Tu información, en tus manos.' }], cta: 'Escribinos y ordenamos el tuyo', sub: 'urquisoft.com' }
    ],
    caption: 'Vos sos el dueño de tus datos, siempre. Es una regla que no negociamos: tus clientes, tus ventas y tu stock son tuyos. Los cuidamos con backups incluidos. Y si mañana querés exportar todo, se exporta: sin retenerte nada, sin letra chica. Tu negocio, ordenado. Tu información, en tus manos. Escribinos y empezá a ordenar el tuyo.',
    hashtags: ['#datos', '#confianza', '#transparencia', '#pymes', '#gestion']
  },
  {
    id: 38, theme: 'dark', tag: 'EDUCACIÓN · 2026',
    title: 'WhatsApp que vende 24/7: catálogo y pedidos conectados',
    slides: [
      { type: 'cover', kicker: 'Educación · Venta por mensaje', lines: ['WHATSAPP QUE', 'VENDE', '24/<span class="mag">7</span>'], sub: 'Catálogo conectado, pedidos que se registran solos.', cta: 'Deslizá para entenderlo' },
      { type: 'problem', pill: 'El problema', statement: 'Tu catálogo vive en fotos<br>y listas de precios.', lead: 'Y cada pedido se copia y pega a mano.' },
      { type: 'solution', pill: 'Lo básico', chips: ['Catálogo conectado', 'Pedidos solos', 'Cobro con link'], statement: 'El pedido se registra solo y el <span class="teal">cobro</span> llega con un link.' },
      { type: 'close', pill: 'Vendé 24/7', lines: ['Tu negocio vende', { grad: 'mientras vos dormís.' }], cta: 'Escribinos y lo armamos', sub: 'urquisoft.com' }
    ],
    caption: '¿Tu WhatsApp vende solo cuando estás despierto? El problema: el catálogo vive en fotos y listas de precios, y cada pedido se copia y pega a mano. Con un sistema, el catálogo queda conectado, los pedidos se registran solos y el cobro llega con un link. Tu negocio vende mientras vos dormís. Escribinos y lo armamos.',
    hashtags: ['#whatsapp', '#ventasonline', '#pymes', '#comercios', '#gestion']
  },
  {
    id: 39, theme: 'dark', tag: 'CASO REAL · 2026',
    title: 'Del caos al orden: un comercio en 4 pasos',
    slides: [
      { type: 'cover', kicker: 'Caso real · Nuestro proceso', lines: ['DEL CAOS AL ORDEN,', 'EN <span class="mag">4 PASOS</span>'], sub: 'El proceso simple, de principio a fin.', cta: 'Deslizá para ver los pasos' },
      { type: 'rows', items: [
        { k: 'n', v: '1', t: 'Reunión', small: 'Conocemos tu negocio, sin cargo.' },
        { k: 'n', v: '2', t: 'Propuesta', small: 'Solución, tiempos y precio final.' },
        { k: 'n', v: '3', t: 'Instalación y capacitación', small: 'Migramos tus datos y te enseñamos.' },
        { k: 'n', v: '4', t: 'Acompañamiento', small: 'Soporte y mejoras, todos los meses.' }
      ] },
      { type: 'close', pill: 'Antes, durante y después', lines: ['No entregamos software', { grad: 'y nos despedimos.' }], cta: 'Escribinos y coordinamos la primera reunión', sub: 'urquisoft.com' }
    ],
    caption: 'Del caos al orden, en 4 pasos. 1. Reunión: conocemos tu negocio, sin cargo. 2. Propuesta: solución, tiempos y precio final. 3. Instalación y capacitación: migramos tus datos y te enseñamos. 4. Acompañamiento: soporte y mejoras, todos los meses. No entregamos software y nos despedimos: trabajamos con vos antes, durante y después. Escribinos y coordinamos la primera reunión.',
    hashtags: ['#transformaciondigital', '#pymes', '#casosdeexito', '#gestion', '#comercios'],
    liCaption: 'Cambiar de sistema es una decisión que se toma con miedo, y un proceso claro lo baja. El nuestro tiene 4 pasos: reunión inicial sin cargo para entender el negocio, propuesta con tiempos y precio final, instalación con migración de datos y capacitación, y acompañamiento mensual con soporte y mejoras. Nada de «te instalo y chau». Escribinos y coordinamos la primera reunión.',
    liSlides: [
      { type: 'cover', kicker: 'Nuestro proceso', lines: ['ORDENAR TU NEGOCIO', 'EN <span class="mag">4 PASOS</span>'], sub: 'Simple por diseño, de principio a fin.', cta: 'Deslizá para ver los pasos' },
      { type: 'rows', items: [
        { k: 'n', v: '1', t: 'Reunión', small: 'Conocemos tu negocio, sin cargo.' },
        { k: 'n', v: '2', t: 'Propuesta', small: 'Solución, tiempos y precio final.' },
        { k: 'n', v: '3', t: 'Instalación y capacitación', small: 'Migramos tus datos y te enseñamos.' },
        { k: 'n', v: '4', t: 'Acompañamiento', small: 'Soporte y mejoras, todos los meses.' }
      ] },
      { type: 'close', pill: 'Antes, durante y después', lines: ['Un proceso simple', { grad: 'de principio a fin.' }], cta: 'Escribinos y coordinamos la primera reunión', sub: 'urquisoft.com' }
    ]
  },
  {
    id: 40, theme: 'light', tag: 'ENCUESTA · 2026',
    title: 'Encuesta: ¿qué te cuesta más en tu negocio?',
    slides: [
      { type: 'cover', coverStyle: 'left', ghost: 'A', kicker: 'Encuesta de fin de mes', lines: ['¿QUÉ TE CUESTA', 'MÁS EN TU', '<span class="mag">NEGOCIO</span>?'], sub: 'Respondé con la letra en comentarios.', cta: 'Deslizá y elegí' },
      { type: 'options', items: [
        { v: 'A', t: 'El stock: qué tenés y qué te falta.' },
        { v: 'B', t: 'La cobranza: quién te debe y desde cuándo.' },
        { v: 'C', t: 'Los turnos: cómo organizar a tus clientes.' },
        { v: 'D', t: 'La facturación: comprobantes y números.' }
      ] },
      { type: 'close', pill: 'Votá', lines: ['El tema más votado', { grad: 'es el próximo post.' }], cta: 'Respondé con la letra en comentarios', sub: 'Tu voto define el próximo mes · urquisoft.com' }
    ],
    caption: 'Encuesta de fin de mes: ¿qué te cuesta más en tu negocio? A) El stock: qué tenés y qué te falta. B) La cobranza: quién te debe y desde cuándo. C) Los turnos: cómo organizar a tus clientes. D) La facturación: comprobantes y números. Respondé con la letra en comentarios. El tema más votado es el próximo post.',
    hashtags: ['#encuesta', '#pymes', '#comercios', '#gestion', '#contenido']
  }
];
