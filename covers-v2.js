// covers-v2.js — portadas (slide 1) de los posts del plan v5 en formato poster: letras cortas y GRANDES.
// build-all.js reemplaza slides[0] de cada post por esta portada. Máx ~9 caracteres por línea.
const P = (sticker, lines, sub) => ({ type: 'poster', sticker, lines, sub, cta: 'Deslizá' });
module.exports = {
  1:  P('ONLINE',    ['TU TIENDA.', 'TUS <span class="mag">REGLAS</span>.'], 'Vendé online sin comisiones.'),
  2:  P('MOSTRADOR', ['MISMO', 'PROBLEMA.', '<span class="mag">MISMA</span>', '<span class="mag">SOLUCIÓN.</span>']),
  3:  P('RUBROS',    ['ADIÓS,', '<span class="mag">EXCEL</span>.'], 'Estos rubros ya lo dejaron.'),
  4:  P('HONESTIDAD', ['LO QUE', '<span class="mag">NO</span>', 'HACEMOS.']),
  5:  P('PREGUNTA',  ['¿CUÁNTO', 'PERDÉS', '<span class="mag">ANOTANDO</span>?'], 'Horas por semana, a mano.'),
  6:  P('COBROS',    ['COBRÁ', 'CON <span class="mag">QR</span>.', 'SIN', 'PERSEGUIR.']),
  7:  P('COBRANZA',  ['SE COBRA', '<span class="teal">SOLO</span>.'], 'Recordatorios automáticos.'),
  8:  P('CASO REAL', ['LIBROS.', 'CAJA.', '<span class="mag">ORDEN.</span>']),
  9:  P('4 PASOS',   ['DEL', 'CUADERNO', 'A LA', '<span class="teal">PANTALLA.</span>']),
  10: P('POV',       ['VIERNES,', 'LA CAJA', '<span class="mag">NO CIERRA</span>.'], 'Sin drama, prometemos.'),
  11: P('4 SEÑALES', ['¿TE FALTA', '<span class="teal">SISTEMA</span>?'], 'Si te pasan 2 o más, hablemos.'),
  12: P('TALLERES',  ['ADIÓS,', '<span class="mag">PAPELITOS</span>.'], 'Presupuestos y órdenes en orden.'),
  14: P('PRECIOS',   ['SIN', 'LETRA', '<span class="mag">CHICA.</span>']),
  15: P('WHATSAPP',  ['VENDÉ', 'MIENTRAS', '<span class="teal">DORMÍS.</span>']),
  16: P('DEUDORES',  ['AGUJERO', '<span class="mag">NEGRO</span>', 'DE PLATA.'], 'La libreta que no cobra.'),
  17: P('AGENDA',    ['TURNOS', 'QUE SE', '<span class="teal">AVISAN</span>', '<span class="teal">SOLOS.</span>']),
  18: P('CASO REAL', ['PEDIDO.', 'REPARTO.', '<span class="mag">SIN PAPEL.</span>']),
  19: P('REGLA #1',  ['TUS DATOS.', '<span class="teal">TUYOS.</span>'], 'Una regla que no negociamos.'),
  20: P('ENCUESTA',  ['¿QUÉ TE', 'CUESTA', '<span class="mag">MÁS</span>?'], 'Respondé con la letra.')
};
