// posts-backlog.js — carruseles del research Perplexity (backlog de ideas). Uso: node build-all.js ./posts-backlog
// Ids 21+ para no pisar el plan v5. Reglas: voseo con tilde, « », sin AFIP, CTA "Escribinos y...".
// Formatos nuevos (ver v2css.js): poster (frase gigante), versus (A vs B), bignum (número gigante).
module.exports = [
  {
    id: 21, theme: 'dark', tag: 'RENTABILIDAD',
    title: 'Vendés mucho. ¿Ganás poco?',
    slides: [
      { type: 'poster', lines: ['VENDÉS', 'MUCHO.', '¿GANÁS', '<span class="mag">POCO</span>?'], sub: 'Ojo con el margen.', cta: 'Deslizá', sticker: 'MARGEN' },
      { type: 'versus', a: { h: '100 u.', t: 'Margen 5%' }, b: { h: '30 u.', t: 'Margen 40%' }, note: '¿Cuál te conviene?' },
      { type: 'poster', lines: ['MIRÁS LO', 'QUE <span class="mag">VENDÉS</span>.', 'NO LO QUE', '<span class="teal">QUEDA</span>.'] },
      { type: 'solution', pill: 'Con sistema', chips: ['Costo y precio', 'Margen solo', 'Ranking'], statement: 'Sabé qué <span class="teal">te deja plata</span>.' },
      { type: 'poster', lines: ['PROMOCIONÁ', 'LO QUE', '<span class="teal">MÁS DEJA</span>.'] },
      { type: 'poster', lines: ['NO ADIVINES.', '<span class="teal">MEDÍ.</span>'], cta: 'Escribinos y lo vemos' }
    ],
    caption: 'Vender 100 unidades con 5% de margen no es lo mismo que vender 30 con 40%. Muchos negocios saben cuánto venden, pero no cuánto les queda por producto. Con costo y precio cargados, el sistema calcula el margen solo y te muestra qué productos te dejan más plata y cuáles solo mueven caja. Así decidís qué promocionar y qué revisar. ¿Sabés cuál es tu producto más rentable? Escribinos y lo vemos con tu negocio.',
    hashtags: ['#rentabilidad', '#stock', '#pymes', '#comercios', '#gestion']
  },
  {
    id: 22, theme: 'light', tag: 'CAJA',
    title: '¿Ganaste o solo vendiste?',
    slides: [
      { type: 'poster', lines: ['¿GANASTE', 'O SOLO', '<span class="mag">VENDISTE</span>?'], sub: 'No es lo mismo.', cta: 'Deslizá', sticker: 'CAJA' },
      { type: 'versus', a: { h: 'Vender', t: 'La plata que entra' }, b: { h: 'Ganar', t: 'La plata que te queda' }, note: 'Miralas por separado.' },
      { type: 'bignum', num: '4', label: 'números que tenés que ver hoy', small: 'Vendido · cobrado · lo que quedó · diferencias' },
      { type: 'poster', lines: ['EFECTIVO.', 'TARJETAS.', '<span class="teal">BILLETERAS.</span>'], sub: 'Cada medio de pago, por separado.' },
      { type: 'poster', lines: ['SIN', 'PAPELITOS.', '<span class="mag">SIN SUMAR</span>', '<span class="mag">A MANO.</span>'] },
      { type: 'poster', lines: ['TU CAJA,', '<span class="teal">EN ORDEN.</span>'], cta: 'Escribinos y te mostramos el cierre' }
    ],
    caption: '¿Ganaste o solo vendiste? Muchos negocios saben cuánto vendieron, pero no cuánto les quedó después de costos, gastos y diferencias de caja. Un cierre diario simple te muestra cuánto vendiste, cuánto cobraste, cuánto te quedó y dónde hubo diferencias, separado por medio de pago: efectivo, tarjetas y billeteras. Y el reporte llega al dueño todos los días. Escribinos y te mostramos cómo sería tu cierre.',
    hashtags: ['#cajadiaria', '#cierredecaja', '#pymes', '#comercios', '#gestion']
  },
  {
    id: 23, theme: 'magenta', tag: 'COBRANZAS',
    title: '¿Quién te debe? ¿Hace cuánto?',
    slides: [
      { type: 'poster', lines: ['¿QUIÉN', 'TE DEBE?', '¿HACE', 'CUÁNTO?'], sub: 'La libreta mental no cobra.', cta: 'Deslizá', sticker: 'DEUDAS' },
      { type: 'poster', lines: ['«LA SEMANA', 'QUE PASO».', 'PASÓ UN MES.'] },
      { type: 'bignum', num: '$500K', label: 'en ventas ≠ $500K en caja', small: 'Si no controlás la deuda, financiás clientes.' },
      { type: 'flow', steps: [
        { t: 'Vendés a cuenta', small: 'Queda registrado' },
        { t: 'El sistema cuenta los días', small: 'Deuda y antigüedad' },
        { t: 'Recordatorio por WhatsApp', small: 'Solo, sin perseguir' }
      ] },
      { type: 'poster', lines: ['COBRÁ', 'SIN', 'PERSEGUIR.'] },
      { type: 'poster', lines: ['QUE TE PAGUEN', '<span class="teal">A TIEMPO.</span>'], cta: 'Escribinos y armamos tus cobranzas' }
    ],
    caption: '¿Sabés exactamente quién te debe y hace cuánto? Muchos negocios tienen una libreta mental o una planilla desactualizada. Una cuenta corriente ordenada te muestra la deuda por cliente, su antigüedad y el historial de pagos, y manda recordatorios automáticos por WhatsApp. Porque $500.000 en ventas no es lo mismo que $500.000 en caja: si no controlás la antigüedad de la deuda, podés estar financiando clientes sin darte cuenta. Escribinos y armamos tus cobranzas.',
    hashtags: ['#cobranzas', '#cuentacorriente', '#pymes', '#comercios', '#gestion']
  },
  {
    id: 24, theme: 'dark', tag: 'WHATSAPP',
    title: 'Copiar y pegar pedidos: se terminó',
    slides: [
      { type: 'poster', lines: ['COPIAR.', 'PEGAR.', '<span class="mag">REPETIR.</span>'], sub: 'Tus pedidos de WhatsApp, a mano.', cta: 'Deslizá', sticker: 'PEDIDOS' },
      { type: 'versus', a: { h: 'A mano', t: 'Copiar, Excel, stock, avisar' }, b: { h: 'Solo', t: 'El pedido entra al sistema' }, note: 'Menos errores, más tiempo.' },
      { type: 'flow', steps: [
        { t: 'El cliente pide', small: 'Por WhatsApp' },
        { t: 'Entra al sistema', small: 'Sin copiar nada' },
        { t: 'Descuenta stock', small: 'Y muestra el estado' }
      ] },
      { type: 'poster', lines: ['RECIBIDO.', 'ARMANDO.', 'LISTO.', '<span class="teal">ENVIADO.</span>'], sub: 'Estados que avisan solos.' },
      { type: 'poster', lines: ['«¿CÓMO', 'VIENE MI', 'PEDIDO?»', '<span class="teal">YA NO.</span>'] },
      { type: 'poster', lines: ['MÁS PEDIDOS.', '<span class="teal">MISMO EQUIPO.</span>'], cta: 'Escribinos y automatizamos tus pedidos' }
    ],
    caption: '¿Cuántos pedidos tomás por WhatsApp al día? Copiar mensajes, pasarlos a Excel, actualizar el stock, avisar el estado: cada pedido manual es tiempo y riesgo de error. Con pedidos integrados, el cliente envía su pedido, entra al sistema, descuenta stock y los estados (recibido, en preparación, listo, enviado) avisan solos. Menos consultas, más pedidos atendidos con el mismo equipo. Escribinos y automatizamos tus pedidos.',
    hashtags: ['#whatsappbusiness', '#pedidos', '#pymes', '#comercios', '#automatizacion']
  },
  {
    id: 25, theme: 'light', tag: 'SIN EL DUEÑO',
    title: 'Si no estás, ¿funciona?',
    slides: [
      { type: 'poster', lines: ['SI VOS', 'NO ESTÁS,', '¿ANDA', '<span class="mag">TODO</span>?'], sub: 'Todo depende de vos = no crece.', cta: 'Deslizá', sticker: 'PANEL' },
      { type: 'poster', lines: ['«SI NO', 'ESTOY YO,', '<span class="mag">NO HAY</span>', '<span class="mag">NÚMEROS»</span>'] },
      { type: 'versus', a: { h: 'En tu cabeza', t: 'Precios, clientes, excepciones' }, b: { h: 'En el sistema', t: 'Roles, permisos, historial' }, note: 'Que lo sepa el negocio.' },
      { type: 'bignum', num: '1', label: 'panel. todo el negocio.', small: 'Ventas · caja · stock · alertas' },
      { type: 'poster', lines: ['MIRALO', 'DESDE EL', '<span class="teal">CELULAR.</span>'] },
      { type: 'poster', lines: ['DELEGÁ', '<span class="teal">CON DATOS.</span>'], cta: 'Escribinos y armamos tu panel' }
    ],
    caption: 'Si vos no estás, ¿tu negocio puede funcionar igual? Si solo vos conocés precios, proveedores, clientes y excepciones, tu negocio no puede crecer. Con usuarios, permisos y un panel simple de ventas, caja y stock desde el celular, tu equipo trabaja con reglas claras y vos delegás con información. Escribinos y armamos tu panel.',
    hashtags: ['#emprendedores', '#delegar', '#pymes', '#gestion', '#negocios']
  }
];
