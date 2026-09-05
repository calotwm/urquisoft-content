// Plan de contenido mensual v5 — 20 posts de Urquisoft (edición 2026).
// DSL: cada slide es {type, ...campos}. Ver build-all.js para el renderizado.
// Convenciones: voseo con tilde, « », sin AFIP, CTA único "Escribinos y...".

module.exports = [
  {
    id: 1, theme: 'dark', tag: 'PROYECTO NUEVO · 2026',
    title: 'Tu comercio puede vender online sin dejar el mostrador',
    slides: [
      { type: 'cover', kicker: 'Proyecto nuevo · 2026', lines: ['TU COMERCIO', 'PUEDE VENDER ONLINE', 'SIN DEJAR EL <span class="mag">MOSTRADOR</span>'], sub: 'Tu tienda propia, integrada con tu sistema.', cta: 'Deslizá para ver la oportunidad' },
      { type: 'metrics', ctx: 'El ecommerce argentino creció en 2025', num: '+214%', cap: 'Y 2 de cada 3 compras se hacen desde el celular.' },
      { type: 'problem', pill: 'El problema', statement: 'Depender solo del mostrador<br>limita tus ventas.', lead: 'Los marketplaces se llevan hasta 30% de comisión.' },
      { type: 'solution', pill: 'La solución', chips: ['Tienda online', 'Stock sincronizado', 'Precios del sistema'], statement: 'Tu tienda integrada con tu <span class="teal">sistema</span>.' },
      { type: 'flow', steps: [
        { t: 'El cliente ve el catálogo', small: 'Con tus productos' },
        { t: 'Pide por la web o mensaje', small: 'Cuando quiere' },
        { t: 'Vos lo ves todo', small: 'En un solo lugar' }
      ] },
      { type: 'close', pill: 'Tu tienda, tus datos', lines: ['Sin marketplaces, sin comisiones.', { grad: 'Tu tienda. Tus datos.' }], cta: 'Escribinos y te mostramos tu tienda', sub: 'Proyecto nuevo · 2026 · urquisoft.com' }
    ],
    caption: 'Tu comercio puede vender online sin dejar el mostrador. El ecommerce argentino creció +214% en 2025, y 2 de cada 3 compras ya se hacen desde el celular. Tu tienda propia, integrada con tu sistema: Catálogo online con tus productos. Stock y precios sincronizados. Cobro sin marketplaces ni comisiones. Cada venta registrada. Sin comisiones, sin perder el control: tu tienda, tus datos, tus ventas. Escribinos y te mostramos cómo sería tu tienda.',
    hashtags: ['#ecommerce', '#ventasonline', '#pymes', '#comercios', '#gestion']
  },
  {
    id: 2, theme: 'dark', tag: 'SOLUCIÓN · 2026',
    title: 'Kiosco, carnicería, despensa: el mismo problema, la misma solución',
    slides: [
      { type: 'cover', kicker: 'Serie · Comercios de mostrador', lines: ['KIOSCO, CARNICERÍA,', 'DESPENSA...', 'EL MISMO <span class="mag">PROBLEMA</span>'], sub: '…y la misma solución.', cta: 'Deslizá para ver cómo se resuelve' },
      { type: 'problem', pill: 'El problema', chips: ['Ticket', 'Stock', 'Caja'], lead: 'Cada cosa en un lugar distinto.', statement: 'El cierre <span class="mag">no cierra</span>.' },
      { type: 'solution', pill: 'La solución', chips: ['Caja', 'Inventario', 'Clientes', 'Reportes'], statement: 'Todo en <span class="teal">un solo sistema</span>.' },
      { type: 'shot', pill: 'Pantalla real', src: '../../assets/bibliotheca.png', sub: 'Una pantalla. Todo el negocio.', chrome: true, url: 'app.urquisoft.com' },
      { type: 'quote', lines: ['El reporte de ventas del día, <span class="teal">en segundos</span>.', 'No en <span class="strike2">la libreta</span>.'] },
      { type: 'close', pill: 'A tu medida', lines: ['Contanos cómo trabajás hoy', { grad: 'y te armamos la solución a tu medida.' }], cta: 'Escribinos y te lo mostramos aplicado a tu negocio', sub: 'Respondemos con una demo · urquisoft.com' }
    ],
    caption: 'Un kiosco, una carnicería o una despensa tienen el mismo problema: la caja, el ticket y el stock viven separados. Nuestra gestión une todo en un solo sistema: Caja. Inventario. Clientes. Reportes de ventas. Simple por diseño, sin funciones innecesarias. Te acompañamos con instalación, capacitación y soporte permanente. Escribinos y te lo mostramos aplicado a tu negocio.',
    hashtags: ['#kiosco', '#carniceria', '#despensa', '#gestion', '#pymes']
  },
  {
    id: 3, theme: 'dark', tag: 'CASO REAL · 2026',
    title: 'Estos son los rubros que ya dejaron el Excel',
    slides: [
      { type: 'cover', kicker: 'Prueba social', lines: ['ESTOS RUBROS', 'YA DEJARON', 'EL <span class="strike">EXCEL</span>'], sub: 'Cada rubro, con su solución a medida.', cta: 'Deslizá para ver la lista' },
      { type: 'photocard', label: 'Librerías', photo: '', tags: ['RUBRO #1'], chips: ['Inventario', 'Ventas POS', 'Factura PDF', 'Reportes'] },
      { type: 'photocard', label: 'Lubricentros', photo: '', tags: ['RUBRO #2'], chips: ['Servicios', 'Vehículos', 'Clientes'] },
      { type: 'photocard', label: 'Distribución de alimentos', photo: '', tags: ['RUBRO #3'], chips: ['Pedidos', 'Reparto a domicilio'] },
      { type: 'photocard', label: 'Mayoristas y estudios', photo: '', tags: ['RUBRO #4'], chips: ['Stock', 'Pedidos', 'Extractos a asientos'] },
      { type: 'close', pill: 'El próximo puede ser el tuyo', lines: ['Cada negocio es distinto.', { grad: 'El tuyo puede ser el próximo.' }], cta: 'Escribinos y lo armamos a tu medida', sub: '¿Tu rubro no está en la lista? Lo charlamos · urquisoft.com' }
    ],
    caption: 'Estos rubros ya dejaron el Excel. No vendemos un software único para todos: Librerías: inventario, POS y factura PDF. Lubricentros: servicios y clientes ordenados. Distribución: pedidos y reparto sin papel. Estudios: extractos convertidos en asientos. Escuchamos tu problema y armamos la solución que necesitas. Si tu rubro no está en la lista, lo charlamos. Escribinos.',
    hashtags: ['#casosdeexito', '#pymes', '#libreria', '#lubricentro', '#gestion']
  },
  {
    id: 4, theme: 'magenta', tag: 'MARCA · 2026',
    title: 'Lo que NO hacemos: venderte tecnología por venderla',
    slides: [
      { type: 'cover', kicker: 'Nuestros valores', lines: ['LO QUE', '<span class="mag">NO</span> HACEMOS'], sub: 'Honestidad como estrategia.', cta: 'Deslizá para conocerlos' },
      { type: 'rows', items: [{ k: 'l', v: '✕', t: 'Venderte funciones que no vas a usar', small: 'Simple por diseño.' }] },
      { type: 'rows', items: [{ k: 'l', v: '✕', t: 'Esconder precios en letra chica', small: 'Precios claros y accesibles, pensados para el comercio real.' }] },
      { type: 'rows', items: [{ k: 'l', v: '✕', t: 'Dejarte solo después de instalar', small: 'Soporte en tu idioma, sin call center.' }] },
      { type: 'rows', items: [{ k: 'l', v: '✕', t: 'Quedarnos con tus datos', small: 'Vos sos el dueño de tu información, siempre.' }] },
      { type: 'close', pill: 'Nuestra forma de trabajar', lines: ['Escuchamos tu problema y armamos', { grad: 'la solución que realmente necesitas.' }], cta: 'Escribinos y coordinamos una reunión inicial sin cargo', sub: 'Sin compromiso · urquisoft.com' }
    ],
    caption: 'Hay mucha tecnología dando vueltas. Nosotros preferimos decirte lo que NO hacemos: Venderte funciones que no vas a usar. Esconder precios en letra chica. Desaparecer después de instalar. Quedarnos con tus datos. Trabajamos con comercios reales, con precios claros y acompañamiento de principio a fin. Escribinos y coordinamos una reunión inicial sin cargo.',
    hashtags: ['#confianza', '#pymes', '#preciosclaros', '#soporte', '#tecnologia']
  },
  {
    id: 5, theme: 'light', tag: 'INTERACCIÓN · 2026',
    title: '¿Cuántas horas por semana perdés anotando a mano?',
    slides: [
      { type: 'cover', coverStyle: 'left', ghost: '?', kicker: 'Pregunta del día', lines: ['¿CUÁNTAS HORAS', 'POR SEMANA PERDÉS', 'ANOTANDO A MANO?'], sub: 'Respuesta honesta abajo ↓', cta: 'Pensalo y deslizá' },
      { type: 'rows', items: [{ k: 'l', v: '✕', t: 'Ventas, stock, deudas y pedidos...', small: 'Anotados en papel o en la cabeza.' }] },
      { type: 'scene', q: '15 minutos acá, media hora allá...', small: 'Al final del mes, ¿cuántas horas son?' },
      { type: 'quote', lines: ['Ese tiempo <span class="mag">no se factura</span>.', 'Es tiempo que el negocio pierde.'] },
      { type: 'close', pill: 'Contanos', lines: ['¿Cuántas horas calculás que perdés?', { grad: 'Respondé con un número en comentarios.' }], cta: 'Escribinos y agendamos una reunión', sub: 'Tu respuesta nos ayuda a crear mejores posts · urquisoft.com' }
    ],
    caption: '¿Cuántas horas por semana perdés anotando a mano? Anotar ventas, stock, deudas y pedidos... no parece mucho hasta que sumás el mes. Ese tiempo no se factura y los datos quedan dispersos. La buena noticia: se resuelve con un sistema simple, hecho a tu medida. Contanos: ¿cuántas horas calculás que perdés? Respondé con un número.',
    hashtags: ['#pymes', '#tiempo', '#productividad', '#gestion', '#comercios']
  },
  {
    id: 6, theme: 'light', tag: 'PROYECTO NUEVO · 2026',
    title: 'Cobrá con QR y dejá de perseguir la plata',
    slides: [
      { type: 'cover', kicker: 'Proyecto nuevo · 2026', lines: ['COBRÁ CON QR', 'Y DEJÁ DE', 'PERSEGUIR LA <span class="mag">PLATA</span>'], sub: 'QR interoperable, integrado a tu caja.', cta: 'Deslizá para ver cómo funciona' },
      { type: 'metrics', ctx: 'Las pymes que digitalizan sus cobros', num: '2.7x', cap: 'crecen más rápido que las que no.' },
      { type: 'problem', pill: 'El problema', statement: 'Efectivo que no se cuenta,<br>transferencias que no se registran.', lead: 'La caja no cierra y no sabés por qué.' },
      { type: 'solution', pill: 'La solución', chips: ['QR interoperable', 'Integrado a tu caja', 'Registra solo'], statement: 'El cliente paga con su app y el sistema <span class="teal">registra solo</span>.' },
      { type: 'close', pill: 'Cada cobro, registrado', lines: ['Cada cobro, registrado.', { grad: 'La caja cierra sola.' }], cta: 'Escribinos y te mostramos cómo funciona', sub: 'Proyecto nuevo · 2026 · urquisoft.com' }
    ],
    caption: 'Cobrá con QR y dejá de perseguir la plata. Las pymes que digitalizan sus cobros crecen hasta 2.7x más rápido. Con QR interoperable integrado a tu caja: El cliente paga con su app. Cada cobro queda registrado. La caja cierra sola. Sin cuadernos, sin sorpresas, sin plata que no se cuenta. Escribinos y te mostramos cómo funciona.',
    hashtags: ['#pagosdigitales', '#qr', '#pymes', '#cobranzas', '#gestion']
  },
  {
    id: 7, theme: 'magenta', tag: 'FEATURE · 2026',
    title: '¿Sabías que tu sistema puede cobrar por vos?',
    slides: [
      { type: 'cover', kicker: 'Feature · Deudores y cobranza', lines: ['¿SABÍAS QUE TU', 'SISTEMA PUEDE', '<span class="teal">COBRAR</span> POR VOS?'], sub: 'Con recordatorios automáticos.', cta: 'Deslizá para ver el módulo' },
      { type: 'problem', pill: 'El problema', statement: 'La libreta de deudores: se vende a crédito, se anota...', lead: 'Y después... se olvida.' },
      { type: 'search', query: '¿cómo cobrar sin perseguir a nadie?', results: [
        { ic: '✓', t: 'Deuda por cliente', small: 'Siempre al día' },
        { ic: '✓', t: 'Antigüedad visible', small: 'Desde cuándo te deben' },
        { ic: '✓', t: 'Recordatorio automático', small: 'El sistema avisa por vos' }
      ] },
      { type: 'quote', lines: ['El sistema avisa.', 'Vos no <span class="mag">perseguís</span> a nadie.'] },
      { type: 'close', pill: 'Menos perseguir, más cobrar', lines: ['Cobra lo que te deben', { grad: 'sin perseguir a nadie.' }], cta: 'Escribinos y te mostramos el módulo funcionando', sub: 'urquisoft.com' }
    ],
    caption: '¿Sabías que tu sistema puede cobrar por vos? Vender a crédito es normal. Lo que no es normal es perseguir la libreta: Deudas que se olvidan. Clientes que no se acuerdan. Mensajes uno por uno a mano. Tu sistema te muestra cuánto te debe cada cliente, desde cuándo, y manda recordatorios automáticos por WhatsApp. Menos perseguir, más cobrar. Escribinos y te mostramos el módulo funcionando.',
    hashtags: ['#cobranzas', '#deudores', '#whatsapp', '#pymes', '#gestion']
  },
  {
    id: 8, theme: 'dark', tag: 'CASO REAL · 2026', extraCss: '.cover h1{font-size:62px}',
    title: 'Una librería con inventario, POS y factura PDF: sin Excel',
    slides: [
      { type: 'cover', kicker: 'Caso real · Librería', lines: ['UNA LIBRERÍA CON INVENTARIO,', 'POS Y FACTURA PDF:', '<span class="strike">SIN EXCEL</span>'], sub: 'El caso bibliotheca.', cta: 'Deslizá para ver la historia' },
      { type: 'rows', items: [
        { k: 'l', v: '✕', t: 'Stock en planillas' },
        { k: 'l', v: '✕', t: 'Ventas anotadas a mano' },
        { k: 'l', v: '✕', t: 'Proveedores en papeles' }
      ] },
      { type: 'solution', pill: 'La solución', chips: ['Inventario', 'Ventas POS', 'Factura PDF', 'Proveedores'], statement: 'Todo en <span class="teal">un solo sistema</span>.' },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'El salto: importamos tus datos desde Excel', small: 'Migración en la puesta en marcha, sin perder nada.' }] },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'Reportes al día', small: 'Saber qué se vendió, qué falta y qué se debe, cuando se necesita.' }] },
      { type: 'close', pill: 'La tuya puede ser la próxima', lines: ['La librería también se ordena.', { grad: 'La tuya puede ser la próxima.' }], cta: 'Escribinos y lo armamos a tu medida', sub: 'urquisoft.com' }
    ],
    caption: 'Una librería también se ordena. Trabajamos con una librería para que su stock, ventas y proveedores estén en un solo lugar: Inventario y stock al día. Ventas POS y factura PDF. Proveedores y reportes. Sus datos migrados desde Excel, sin perder nada. Cada rubro tiene su forma de trabajar: la respetamos y la ordenamos. La tuya puede ser la próxima. Escribinos.',
    hashtags: ['#libreria', '#inventario', '#facturacion', '#casosdeexito', '#pymes']
  },
  {
    id: 9, theme: 'light', tag: 'PROCESO · 2026',
    title: 'Del cuaderno a la pantalla en 4 pasos',
    slides: [
      { type: 'cover', coverStyle: 'left', ghost: '4', kicker: 'Nuestro proceso', lines: ['DEL CUADERNO', 'A LA PANTALLA', 'EN <span class="teal">4 PASOS</span>'], sub: 'Cambiar da miedo. Por eso es simple.', cta: 'Deslizá para ver los pasos' },
      { type: 'rows', items: [{ k: 'n', v: '1', t: 'Reunión inicial sin cargo', small: 'Conocemos tu negocio y detectamos dónde se pierde plata.' }] },
      { type: 'rows', items: [{ k: 'n', v: '2', t: 'Propuesta a tu medida', small: 'Solución, tiempos y precio final, sin compromiso.' }] },
      { type: 'rows', items: [{ k: 'n', v: '3', t: 'Instalación y capacitación', small: 'Migramos TUS datos, configuramos todo y te enseñamos a usarlo.' }] },
      { type: 'rows', items: [{ k: 'n', v: '4', t: 'Acompañamiento mensual', small: 'Soporte, actualizaciones y mejoras. El sistema crece con tu negocio.' }] },
      { type: 'close', pill: 'Antes, durante y después', lines: ['No entregamos un software y nos despedimos.', { grad: 'Trabajamos con vos antes, durante y después.' }], cta: 'Escribinos y coordinamos la primera reunión', sub: 'urquisoft.com' }
    ],
    caption: 'Cambiar la forma de trabajar da miedo. Por eso nuestro proceso es simple: 1. Reunión inicial sin cargo. 2. Propuesta a tu medida, sin compromiso. 3. Instalación, migración de datos y capacitación. 4. Acompañamiento mensual. No entregamos un software y nos despedimos: trabajamos con vos antes, durante y después. Escribinos y coordinamos la primera reunión.',
    hashtags: ['#transformaciondigital', '#pymes', '#capacitacion', '#soporte', '#gestion']
  },
  {
    id: 10, theme: 'light', tag: 'HUMOR · 2026',
    title: 'POV: el dueño cerrando la caja un viernes',
    slides: [
      { type: 'cover', coverStyle: 'quote', kicker: 'POV · Viernes', lines: ['POV: EL DUEÑO', 'CERRANDO LA CAJA', 'UN <span class="mag">VIERNES</span>'], sub: 'Sin drama, prometemos.', cta: 'Deslizá para sufrir con él' },
      { type: 'scene', q: 'Papelitos, tickets sueltos y...', small: '«¿Cuánto vendí hoy?... no sé.»', author: 'EL DUEÑO', role: 'POV' },
      { type: 'scene', q: '«Un momento, ¿este ticket es de la semana pasada?»' },
      { type: 'scene', q: 'Resultado: 40 minutos y un total que no cierra.', small: 'El clásico.' },
      { type: 'close', pill: 'Con un sistema', lines: ['El cierre del día son 5 minutos.', { grad: 'Sin drama.' }], cta: 'Escribinos y probás el cierre en serio', sub: 'Contanos: ¿cuántos minutos te lleva? · urquisoft.com' }
    ],
    caption: 'POV: el dueño cerrando la caja un viernes. Papelitos por todos lados y la pregunta de siempre: "¿cuánto vendí hoy?". Con un sistema, el cierre son 5 minutos: Caja al instante. Stock actualizado. Reportes del día. Sin drama. Contanos: ¿cuántos minutos te lleva cerrar la caja? Los honestos ponen el número.',
    hashtags: ['#humor', '#pymes', '#cierrecaja', '#gestion', '#comercios']
  },
  {
    id: 11, theme: 'magenta', tag: 'CHECKLIST · 2026',
    title: '4 señales de que tu negocio necesita un sistema (y no lo sabías)',
    slides: [
      { type: 'cover', kicker: 'Checklist de autodiagnóstico', lines: ['4 SEÑALES DE QUE', 'TU NEGOCIO NECESITA', 'UN <span class="teal">SISTEMA</span>'], sub: 'Si te pasan 2 o más, hablemos.', cta: 'Deslizá y contá tu puntaje' },
      { type: 'rows', items: [{ k: 'n', v: '1', t: 'Sabés el stock de memoria', small: '«El último paquete se fue ayer... creo.»' }] },
      { type: 'rows', items: [{ k: 'n', v: '2', t: 'Las deudas están en la libreta', small: 'No sabés cuánto te deben ni desde cuándo.' }] },
      { type: 'rows', items: [{ k: 'n', v: '3', t: 'Mandás los mismos mensajes todos los días', small: 'Uno por uno, a mano.' }] },
      { type: 'rows', items: [{ k: 'n', v: '4', t: 'Los números solo los sabe el dueño', small: 'Si no está, no hay datos.' }] },
      { type: 'close', pill: '2 o más señales', lines: ['Tu negocio te está pidiendo orden.', { grad: 'Agendá tu reunión sin cargo.' }], cta: 'Escribinos y coordinamos', sub: 'urquisoft.com' }
    ],
    caption: '4 señales de que tu negocio necesita un sistema: 1. Sabés el stock de memoria. 2. Las deudas están en la libreta. 3. Mandás los mismos mensajes todos los días. 4. Los números solo los sabe el dueño. Si te pasan 2 o más, tu negocio te está pidiendo orden. Escribinos y coordinamos una reunión inicial sin cargo.',
    hashtags: ['#pymes', '#comercios', '#stock', '#cobranzas', '#gestion']
  },
  {
    id: 12, theme: 'dark', tag: 'SOLUCIÓN POR RUBRO · 2026', extraCss: '.cover h1{font-size:68px}',
    title: 'Talleres y técnicos: adiós a los papelitos de presupuesto',
    slides: [
      { type: 'cover', kicker: 'Solución por rubro', lines: ['TALLERES Y TÉCNICOS:', 'ADIÓS A LOS', 'PAPELITOS DE <span class="mag">PRESUPUESTO</span>'], sub: 'Órdenes de trabajo y servicio técnico.', cta: 'Deslizá para ver la solución' },
      { type: 'problem', pill: 'El problema', statement: 'Presupuestos en papel, trabajos que se pierden de vista.', lead: 'Clientes que reclaman, horas que se escapan.' },
      { type: 'solution', pill: 'La solución', statement: 'Presupuesto, trabajo y entrega en <span class="teal">un solo lugar</span>.' },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'Historial completo', small: 'Qué equipo, qué cliente, qué se hizo y cuándo.' }] },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'Estado de cada trabajo al instante', small: 'Sin preguntar de memoria.' }] },
      { type: 'close', pill: 'Del presupuesto a la entrega', lines: ['Del presupuesto a la entrega, ordenado.', { grad: 'Te mostramos cómo.' }], cta: 'Escribinos y te mostramos cómo funciona', sub: 'urquisoft.com' }
    ],
    caption: 'Talleres y técnicos: adiós a los papelitos de presupuesto. Un técnico vive de su trabajo, no de perseguir papel: Presupuesto, trabajo y entrega en un solo lugar. Historial de clientes y equipos. Estado de cada trabajo al instante. Del presupuesto a la entrega, ordenado. Escribinos y te mostramos cómo funciona.',
    hashtags: ['#serviciotecnico', '#talleres', '#presupuestos', '#gestion', '#pymes']
  },
  {
    id: 13, theme: 'dark', tag: 'CASO ESTRELLA · 2026', extraCss: '.cover h1{font-size:52px}',
    title: 'Un estudio contable cargaba extractos a mano, movimiento por movimiento',
    slides: [
      { type: 'cover', kicker: 'Caso estrella · Estudio contable', lines: ['UN ESTUDIO CONTABLE', 'CARGABA EXTRACTOS', 'A MANO, MOVIMIENTO POR <span class="mag">MOVIMIENTO</span>'], sub: 'Extractos a asientos, automático.', cta: 'Deslizá para ver el caso' },
      { type: 'rows', items: [
        { k: 'l', v: '✕', t: 'Horas mecánicas por mes' },
        { k: 'l', v: '✕', t: 'Errores de imputación' },
        { k: 'l', v: '✕', t: 'Cada banco es un mundo' }
      ] },
      { type: 'solution', pill: 'La solución', statement: 'Se sube el PDF del banco y el sistema <span class="teal">extrae y clasifica</span> los movimientos solo.' },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'Las reglas del estudio', small: 'Palabras clave, CUIT, gastos bancarios y sueldos.' }] },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'Revisión en un clic', small: 'Lo correcto se aprueba; lo corregido queda aprendido.' }] },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'Export listo para Xubio', small: 'Asientos balanceados, validados contra tu plantilla.' }] },
      { type: 'close', pill: '340 pruebas automáticas', lines: ['Más de 340 pruebas automáticas', { grad: 'antes de tocar un extracto.' }], cta: 'Escribinos y te lo mostramos con tus extractos', sub: 'Se publica con permiso del cliente · urquisoft.com' }
    ],
    caption: 'Un estudio contable cargaba extractos a mano, movimiento por movimiento. Horas mecánicas y errores que después cuestan caro. Extractos a Asientos convierte el PDF del banco en asientos listos para Xubio: Extrae movimientos automáticamente. Clasifica con las reglas del estudio. Revisión en un clic, y aprende de cada corrección. Export balanceado, validado contra tu plantilla. Más de 340 pruebas automáticas antes de tocar un extracto. Escribinos y te lo mostramos con extractos reales.',
    hashtags: ['#estudioscontables', '#xubio', '#contabilidad', '#automatizacion', '#pymes']
  },
  {
    id: 14, theme: 'light', tag: 'PRECIOS · 2026',
    title: 'Precios claros, sin letra chica',
    slides: [
      { type: 'cover', coverStyle: 'left', ghost: '$', kicker: 'Transparencia', lines: ['PRECIOS CLAROS,', 'SIN <span class="strike">LETRA CHICA</span>'], sub: 'Sin sorpresas ni costos ocultos.', cta: 'Deslizá para ver el desglose' },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'Instalación: pago único', small: 'Migración de datos, configuración y capacitación.' }] },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'Mantenimiento mensual', small: 'Soporte, actualizaciones y copias de seguridad.' }] },
      { type: 'rows', items: [
        { k: 'n', v: '1', t: 'Plan Básico', small: '1 solución.' },
        { k: 'n', v: '2', t: 'Plan Estándar', small: '2-3 soluciones.' },
        { k: 'n', v: '3', t: 'Plan Premium', small: 'Todas + soporte prioritario.' }
      ] },
      { type: 'quote', lines: ['El sistema crece con tu negocio,', 'sin <span class="mag">costos ocultos</span>.'] },
      { type: 'close', pill: 'Sin compromiso', lines: ['Te presentamos la solución, los tiempos', { grad: 'y el precio final.' }], cta: 'Escribinos y te armamos la propuesta', sub: 'urquisoft.com' }
    ],
    caption: 'Precios claros, sin letra chica. Instalación con pago único: Migración de tus datos. Configuración a tu medida. Capacitación del equipo. Y mantenimiento mensual: soporte, actualizaciones y backups. Planes simples: Básico, Estándar y Premium. Empezás por lo que más te duele y crecés cuando hace falta. Escribinos y te presentamos la solución, los tiempos y el precio final.',
    hashtags: ['#preciosclaros', '#pymes', '#planes', '#gestion', '#comercios']
  },
  {
    id: 15, theme: 'magenta', tag: 'PROYECTO NUEVO · 2026',
    title: 'Tu WhatsApp puede vender mientras dormís',
    slides: [
      { type: 'cover', kicker: 'Proyecto nuevo · WhatsApp Commerce', lines: ['TU WHATSAPP PUEDE', 'VENDER MIENTRAS', '<span class="teal">DORMÍS</span>'], sub: 'Catálogo, pedidos y cobro en el chat.', cta: 'Deslizá para ver cómo' },
      { type: 'metrics', ctx: 'De los argentinos prefiere hacer negocios por WhatsApp', num: '78%', cap: 'Es tu canal de ventas más importante.' },
      { type: 'problem', pill: 'El problema', statement: 'Consultas que nadie responde fuera de horario.', lead: 'Pedidos que se pierden entre mensajes.' },
      { type: 'solution', pill: 'La solución', chips: ['Catálogo conectado', 'Pedidos que llegan solos', 'Cobro con link de pago'], statement: 'Tu WhatsApp conectado a tu <span class="teal">sistema</span>.' },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'Cada pedido se registra solo', small: 'Stock, cliente y venta, sin copiar y pegar.' }] },
      { type: 'close', pill: '24/7', lines: ['Tu WhatsApp trabaja 24/7.', { grad: 'Vos también podés.' }], cta: 'Escribinos y te mostramos cómo se ve en tu negocio', sub: 'Proyecto nuevo · 2026 · urquisoft.com' }
    ],
    caption: 'Tu WhatsApp puede vender mientras dormís. El 78% de los argentinos prefiere contactar negocios por WhatsApp, pero la mayoría responde a mano y pierde pedidos fuera de horario. Conectamos tu WhatsApp con tu sistema: Catálogo siempre disponible. Pedidos que se registran solos. Cobro con link de pago. Tu WhatsApp trabaja 24/7, y vos también podés. Escribinos y te mostramos cómo se ve en tu negocio.',
    hashtags: ['#whatsapp', '#ventas', '#comercios', '#automatizacion', '#pymes']
  },
  {
    id: 16, theme: 'dark', tag: 'EL PROBLEMA · 2026', extraCss: '.cover h1{font-size:62px}',
    title: 'La libreta de deudores: el agujero negro de tu negocio',
    slides: [
      { type: 'cover', kicker: 'El problema con números', lines: ['LA LIBRETA DE DEUDORES:', 'EL AGUJERO', '<span class="mag">NEGRO</span> DE TU NEGOCIO'], sub: 'La plata que no se cobra.', cta: 'Deslizá para ver el agujero' },
      { type: 'problem', pill: 'El dato', statement: 'Lo que se anota a mano, se olvida.', lead: 'Y lo que se olvida, no se cobra.' },
      { type: 'problem', pill: 'El total de la libreta', statement: 'Nadie sabe cuánto te deben<br>ni desde cuándo.', lead: 'El total es una estimación.' },
      { type: 'problem', pill: 'El costo', statement: 'Plata trabajada que vuelve tarde, <span class="mag">o no vuelve</span>.' },
      { type: 'solution', pill: 'La solución', statement: 'Deuda por cliente y antigüedad, <span class="teal">siempre al día</span>.' },
      { type: 'close', pill: 'Menos perseguir, más cobrar', lines: ['Cobra lo que te deben,', { grad: 'sin perseguir a nadie.' }], cta: 'Escribinos y te mostramos el módulo', sub: 'Recordatorios automáticos por WhatsApp · urquisoft.com' }
    ],
    caption: 'La libreta de deudores es el agujero negro de tu negocio. Lo que se anota a mano, se olvida. Y lo que se olvida, no se cobra. Con gestión de deudores y cobranza: Deuda por cliente, siempre al día. Antigüedad visible. Recordatorios automáticos por WhatsApp. Menos perseguir, más cobrar. Escribinos y te mostramos el módulo.',
    hashtags: ['#deudores', '#cobranzas', '#pymes', '#whatsapp', '#gestion']
  },
  {
    id: 17, theme: 'light', tag: 'FEATURE POR RUBRO · 2026', extraCss: '.cover h1{font-size:64px}',
    title: 'Peluquerías y barberías: turnos que se avisan solos',
    slides: [
      { type: 'cover', kicker: 'Agenda de turnos', lines: ['PELUQUERÍAS Y BARBERÍAS:', 'TURNOS QUE SE', '<span class="teal">AVISAN SOLOS</span>'], sub: 'Menos huecos, más horas facturadas.', cta: 'Deslizá para ver la agenda' },
      { type: 'problem', pill: 'El problema', statement: 'Agenda en papel o en la cabeza.', lead: 'Clientes que no aparecen, horas perdidas.' },
      { type: 'solution', pill: 'La solución', statement: 'Turnos organizados, con recordatorio <span class="teal">automático</span> al cliente.' },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'Control de ausencias', small: 'Saber cuánto perdiste por no-show y recuperar esas horas.' }] },
      { type: 'close', pill: 'Más horas facturadas', lines: ['Menos huecos en la agenda,', { grad: 'más horas facturadas.' }], cta: 'Escribinos y te mostramos cómo funciona', sub: 'urquisoft.com' }
    ],
    caption: 'Peluquerías y barberías: turnos que se avisan solos. Un turno que no aparece es plata perdida dos veces: la hora vacía y el cliente enojado. Con agenda de turnos: Agenda organizada. Recordatorio automático al cliente. Control de ausencias. Menos huecos en la agenda, más horas facturadas. Escribinos y te mostramos cómo funciona.',
    hashtags: ['#agendadeturnos', '#peluqueria', '#barberia', '#turnos', '#pymes']
  },
  {
    id: 18, theme: 'dark', tag: 'CASO REAL · 2026',
    title: 'Del pedido al reparto, sin papel: huevos a domicilio',
    slides: [
      { type: 'cover', kicker: 'Caso real · Reparto a domicilio', lines: ['DEL PEDIDO AL REPARTO,', '<span class="strike">SIN PAPEL</span>'], sub: 'Huevos a domicilio: del pedido a la entrega.', cta: 'Deslizá para ver el caso' },
      { type: 'rows', items: [
        { k: 'l', v: '✕', t: 'Pedidos por WhatsApp' },
        { k: 'l', v: '✕', t: 'Anotados a mano' },
        { k: 'l', v: '✕', t: 'Reparto en la memoria' }
      ] },
      { type: 'solution', pill: 'La solución', statement: 'Gestión de pedidos y reparto, del pedido a la <span class="teal">entrega</span>.' },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'El dueño ve todos los pedidos del día ordenados', small: 'Sin perseguir papeles.' }] },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'Menos errores de reparto', small: 'Clientes que vuelven.' }] },
      { type: 'close', pill: 'El reparto también se ordena', lines: ['El reparto también se ordena.', { grad: 'Contanos cómo es el tuyo.' }], cta: 'Escribinos y lo ordenamos', sub: 'urquisoft.com' }
    ],
    caption: 'Del pedido al reparto, sin papel. Vender por WhatsApp es cómodo... hasta que los pedidos se mezclan con los mensajes y el reparto se arma de memoria. Trabajamos con un negocio de huevos a domicilio para ordenar el pedido de punta a punta: Qué pidió cada cliente. Qué va en cada reparto. Sin papel, sin memoria, sin errores. Si tu negocio reparte, podemos ordenarlo también. Escribinos.',
    hashtags: ['#reparto', '#domicilio', '#pedidos', '#casosdeexito', '#pymes']
  },
  {
    id: 19, theme: 'magenta', tag: 'VALORES · 2026',
    title: 'Vos sos el dueño de tus datos',
    slides: [
      { type: 'cover', coverStyle: 'quote', kicker: 'Nuestro principio', lines: ['VOS SOS EL', 'DUEÑO DE', 'TUS <span class="teal">DATOS</span>'], sub: 'Una regla que no negociamos.', cta: 'Deslizá para conocerla' },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'Tu información es tuya, siempre', small: 'Productos, clientes, ventas e historial.' }] },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'Nosotros la cuidamos', small: 'Copias de seguridad incluidas en el mantenimiento.' }] },
      { type: 'rows', items: [{ k: 'l', v: '✓', t: 'Si mañana querés exportar todo, se exporta', small: 'Sin retenerte nada.' }] },
      { type: 'close', pill: 'Confianza', lines: ['Tu negocio, ordenado.', { grad: 'Tu información, al alcance de la mano.' }], cta: 'Escribinos y empezá a ordenar el tuyo', sub: 'La confianza se construye con transparencia · urquisoft.com' }
    ],
    caption: 'Hay una regla que no negociamos: tu información es tuya. Tus productos, tus clientes y tus ventas son de tu negocio, no nuestros: Backups incluidos. Exportación libre cuando quieras. Confianza construida con transparencia. Tu negocio, ordenado. Tu información, al alcance de la mano. Escribinos y empezá a ordenar el tuyo.',
    hashtags: ['#datos', '#confianza', '#transparencia', '#pymes', '#gestion']
  },
  {
    id: 20, theme: 'light', tag: 'ENCUESTA · 2026',
    title: '¿Qué es lo que más te cuesta de tu negocio?',
    slides: [
      { type: 'cover', coverStyle: 'left', ghost: 'A', kicker: 'Encuesta de cierre de mes', lines: ['¿QUÉ ES LO QUE MÁS', 'TE CUESTA DE', 'TU <span class="mag">NEGOCIO</span>?'], sub: 'Respondé con la letra en comentarios.', cta: 'Deslizá y elegí' },
      { type: 'options', items: [{ v: 'A', t: 'El stock: nunca sé cuánto me queda.' }] },
      { type: 'options', items: [{ v: 'B', t: 'La cobranza: me deben y no me acuerdo cuánto.' }] },
      { type: 'options', items: [{ v: 'C', t: 'Los turnos: se me superponen y los clientes no aparecen.' }] },
      { type: 'options', items: [{ v: 'D', t: 'La facturación: los papeles me comen el tiempo.' }] },
      { type: 'close', pill: 'Votá', lines: ['El tema más votado lo trabajamos', { grad: 'la próxima semana.' }], cta: 'Respondé con la letra en comentarios', sub: 'Tu voto define el próximo mes de contenido · urquisoft.com' }
    ],
    caption: '¿Qué es lo que más te cuesta de tu negocio? A) El stock: nunca sé cuánto me queda. B) La cobranza: me deben y no me acuerdo cuánto. C) Los turnos: se me superponen y no aparecen. D) La facturación: los papeles me comen el tiempo. Respondé con la letra en comentarios. El tema más votado lo trabajamos la próxima semana.',
    hashtags: ['#encuesta', '#pymes', '#stock', '#cobranzas', '#gestion']
  }
];