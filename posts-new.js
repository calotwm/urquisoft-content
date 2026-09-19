// posts-new.js — carruseles nuevos (ideas propias, ids 26–31). Uso: node build-all.js ./posts-new
// Reglas: voseo con tilde, « », sin AFIP, CTA "Escribinos y...", sin casos inventados. Formatos: poster / versus / bignum.
module.exports = [
  {
    id: 26, theme: 'dark', tag: 'PRECIOS',
    title: 'Subió el dólar. ¿Y tu lista?',
    slides: [
      { type: 'poster', lines: ['SUBIÓ.', '¿Y TU', '<span class="mag">LISTA</span>?'], sub: 'Precios viejos = plata perdida.', cta: 'Deslizá', sticker: 'PRECIOS' },
      { type: 'versus', a: { h: 'Lista en papel', t: 'Cada uno tiene su versión' }, b: { h: 'Catálogo único', t: 'Todos ven el mismo precio' }, note: '¿Con cuál vendés tranquilo?' },
      { type: 'poster', lines: ['UN PRECIO.', '<span class="teal">UNA VEZ.</span>'] },
      { type: 'solution', pill: 'Con sistema', chips: ['Catálogo central', 'Todos ven lo mismo', 'Sin reenviar listas'], statement: 'Cambiás el precio <span class="teal">una sola vez</span>.' },
      { type: 'bignum', num: '1', label: 'lugar para cambiar precios', small: 'Mostrador · tienda online · WhatsApp' },
      { type: 'poster', lines: ['PRECIOS', '<span class="teal">AL DÍA.</span>'], cta: 'Escribinos y armamos tu catálogo' }
    ],
    caption: 'Sube el dólar, suben los costos, y tu lista de precios sigue en tres lugares distintos: el papel del mostrador, el WhatsApp y la cabeza de quien atiende. Con un catálogo centralizado cambiás el precio una sola vez y todos ven la información correcta, sin reenviar listas ni pisar precios viejos. ¿Cuántos lugares tenés que tocar hoy para actualizar un precio? Escribinos y armamos tu catálogo.',
    hashtags: ['#precios', '#catalogo', '#pymes', '#comercios', '#gestion']
  },
  {
    id: 27, theme: 'magenta', tag: 'FIN DE MES',
    title: 'Fin de mes sin susto',
    slides: [
      { type: 'poster', lines: ['FIN DE MES.', '¿SUSTO', 'O <span class="teal">DATOS</span>?'], sub: 'Los números, sin pelearte con planillas.', cta: 'Deslizá', sticker: 'CIERRE' },
      { type: 'poster', lines: ['SIN', 'PLANILLAS', 'SUELTAS.'] },
      { type: 'flow', steps: [
        { t: 'Ventas', small: 'Todo registrado' },
        { t: 'Gastos y cobros', small: 'En el mismo lugar' },
        { t: 'Resumen del mes', small: 'Listo para mirar' }
      ] },
      { type: 'bignum', num: '30', label: 'días de datos en una pantalla', small: 'Ventas · gastos · deudas · stock' },
      { type: 'versus', a: { h: 'Antes', t: 'Juntar papeles y sumar' }, b: { h: 'Ahora', t: 'Abrir el reporte' }, note: 'Decidí con números, no con sensaciones.' },
      { type: 'poster', lines: ['MIRÁ EL MES', '<span class="teal">EN MINUTOS.</span>'], cta: 'Escribinos y armamos tu reporte' }
    ],
    caption: 'Llega fin de mes y toca juntar papeles, abrir planillas y sumar de memoria. Con ventas, gastos, cobros y stock registrados en el mismo lugar, el resumen del mes se abre en minutos: sabés cuánto vendiste, cuánto cobraste y qué está pendiente. Menos susto, más decisiones con datos. Escribinos y armamos tu reporte.',
    hashtags: ['#findemes', '#reportes', '#pymes', '#comercios', '#gestion']
  },
  {
    id: 28, theme: 'light', tag: 'EQUIPO',
    title: '¿Quién vendió qué?',
    slides: [
      { type: 'poster', lines: ['¿QUIÉN', 'VENDIÓ', '<span class="mag">QUÉ</span>?'], sub: 'Si no lo sabés, no lo controlás.', cta: 'Deslizá', sticker: 'EQUIPO' },
      { type: 'poster', lines: ['«YO NO', 'FUI».', '<span class="mag">¿SEGURO?</span>'] },
      { type: 'versus', a: { h: 'Sin registro', t: 'Discusiones y dudas' }, b: { h: 'Con historial', t: 'Cada movimiento tiene nombre' }, note: 'Ni culpas ni sospechas: datos.' },
      { type: 'solution', pill: 'Con sistema', chips: ['Usuarios', 'Permisos', 'Historial'], statement: 'Cada uno ve <span class="teal">lo que le toca</span>.' },
      { type: 'poster', lines: ['REGLAS', '<span class="teal">CLARAS.</span>', 'CERO', 'ÓRDENES', 'VERBALES.'] },
      { type: 'poster', lines: ['EQUIPO', '<span class="teal">EN ORDEN.</span>'], cta: 'Escribinos y armamos tus permisos' }
    ],
    caption: '¿Sabés quién vendió qué, quién cambió un precio y quién cerró la caja? Sin registro, todo se resuelve con memoria y discusiones. Con usuarios, permisos e historial, cada persona ve lo que le corresponde y cada movimiento queda con nombre. No es desconfianza: es orden para que el equipo trabaje tranquilo. Escribinos y armamos tus permisos.',
    hashtags: ['#equipo', '#permisos', '#pymes', '#gestion', '#negocios']
  },
  {
    id: 29, theme: 'dark', tag: 'STOCK',
    title: 'Se acabó. Justo hoy.',
    slides: [
      { type: 'poster', lines: ['SE ACABÓ.', '<span class="mag">JUSTO</span>', '<span class="mag">HOY.</span>'], sub: 'Y te enteraste con el cliente enfrente.', cta: 'Deslizá', sticker: 'STOCK' },
      { type: 'poster', lines: ['«CREÍ QUE', 'QUEDABAN».'] },
      { type: 'bignum', num: '0', label: 'unidades. venta perdida.', small: 'Un faltante cuesta más que reponer a tiempo.' },
      { type: 'solution', pill: 'Con sistema', chips: ['Stock mínimo', 'Alertas', 'Qué comprar'], statement: 'Te avisa <span class="teal">antes de que falte</span>.' },
      { type: 'poster', lines: ['REPONÉ', '<span class="teal">A TIEMPO.</span>'] },
      { type: 'poster', lines: ['NUNCA', 'MÁS', '<span class="teal">«NO QUEDA»</span>'], cta: 'Escribinos y ordenamos tu stock' }
    ],
    caption: '«Creí que quedaban.» Un faltante en el momento justo es una venta perdida y un cliente que se va a otro lado. Con stock mínimo y alertas, el sistema te avisa cuándo reponer y qué conviene comprar, antes de que el producto se acabe. Así comprás lo necesario, no lo que ya tenías. Escribinos y ordenamos tu stock.',
    hashtags: ['#stock', '#inventario', '#pymes', '#comercios', '#gestion']
  },
  {
    id: 30, theme: 'magenta', tag: 'CLIENTES',
    title: 'El cliente vuelve. ¿Lo recordás?',
    slides: [
      { type: 'poster', lines: ['VOLVIÓ.', '¿LO', '<span class="teal">RECORDÁS</span>?'], sub: 'Un cliente conocido compra más.', cta: 'Deslizá', sticker: 'CLIENTES' },
      { type: 'versus', a: { h: 'De memoria', t: '«¿Qué le hice la última vez?»' }, b: { h: 'Con historial', t: 'Todo a mano, en segundos' }, note: 'Atendé como si lo conocieras de siempre.' },
      { type: 'poster', lines: ['HISTORIAL', 'QUE', '<span class="teal">SIRVE.</span>'] },
      { type: 'solution', pill: 'Con sistema', chips: ['Qué compró', 'Qué se le hizo', 'Garantías'], statement: 'Ofrecé <span class="teal">lo que necesita</span>.' },
      { type: 'poster', lines: ['MANTENIMIENTO.', 'GARANTÍAS.', '<span class="teal">RECOMENDAR.</span>'] },
      { type: 'poster', lines: ['CLIENTES', '<span class="teal">QUE VUELVEN.</span>'], cta: 'Escribinos y lo dejamos registrado' }
    ],
    caption: 'Cuando un cliente vuelve, ¿sabés qué compró o qué se le hizo la última vez? Con el historial por cliente tenés todo a mano en segundos y podés ofrecer mantenimiento, garantías y recomendaciones justas. Atender como si lo conocieras de siempre hace que vuelva más seguido. Escribinos y lo dejamos registrado.',
    hashtags: ['#clientes', '#fidelizacion', '#pymes', '#comercios', '#gestion']
  },
  {
    id: 31, theme: 'light', tag: 'PRESUPUESTOS',
    title: 'Cotizá rápido, cerrá más',
    slides: [
      { type: 'poster', lines: ['COTIZÁ', 'RÁPIDO.', '<span class="mag">CERRÁ</span>', '<span class="mag">MÁS.</span>'], sub: 'Quien responde primero, vende.', cta: 'Deslizá', sticker: 'PRESUPUESTO' },
      { type: 'poster', lines: ['«TE', 'PASO EL', 'PRECIO', '<span class="mag">MAÑANA».</span>'] },
      { type: 'versus', a: { h: 'A mano', t: 'Calculadora, papel, dudas' }, b: { h: 'En el sistema', t: 'Precios y costos ya cargados' }, note: 'Menos errores, respuesta al instante.' },
      { type: 'flow', steps: [
        { t: 'Elegís los ítems', small: 'Con sus precios' },
        { t: 'Se arma solo', small: 'Sin recalcular' },
        { t: 'Lo enviás', small: 'Prolijo, en PDF' }
      ] },
      { type: 'poster', lines: ['RESPONDÉ', '<span class="teal">PRIMERO.</span>'] },
      { type: 'poster', lines: ['MÁS', 'PRESUPUESTOS.', '<span class="teal">MENOS TIEMPO.</span>'], cta: 'Escribinos y armamos tus presupuestos' }
    ],
    caption: '«Te paso el precio mañana» es una venta que se enfría. Con precios y costos ya cargados, armás el presupuesto eligiendo los ítems, sin recalcular a mano, y lo enviás prolijo en PDF. Quien responde primero, muchas veces vende. Menos errores, menos tiempo y más presupuestos cerrados. Escribinos y armamos tus presupuestos.',
    hashtags: ['#presupuestos', '#ventas', '#pymes', '#servicios', '#gestion']
  }
];
