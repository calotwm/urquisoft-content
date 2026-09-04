// singles.js — 26 posteos de imagen única (no carrusel).
// 20 ideas nuevas + 6 conversiones de carruseles del plan. Temas: dark / light / magenta (#CC007E + letra negra).
module.exports = [
  { id: 1, theme: 'dark', tag: 'REFLEXIÓN · 2026', title: 'El Excel no cierra la caja', slide: { type: 'quote', lines: ['El Excel no cierra la caja.', '<mag>Vos sí.</mag>'] } },
  { id: 2, theme: 'light', tag: 'PREGUNTA · 2026', title: '¿Sabés cuánto vendiste ayer?', slide: { type: 'quote', lines: ['¿Sabés cuánto vendiste ayer?', 'Respondé sin mirar.'] } },
  { id: 3, theme: 'magenta', tag: 'DATOS · 2026', title: 'Un error de tipeo cuesta más', slide: { type: 'quote', lines: ['Un error de tipeo', 'cuesta más que un sistema.'] } },
  { id: 4, theme: 'dark', tag: 'REFLEXIÓN · 2026', title: 'Los papeles no avisan', slide: { type: 'quote', lines: ['Los papeles no avisan.', '<teal>Tu sistema sí.</teal>'] } },
  { id: 5, theme: 'light', tag: 'LISTA · 2026', title: '3 cosas que tu libreta no te dice', slide: { type: 'rows', items: [
    { k: 'n', v: '1', t: 'Lo que te deben', small: 'Ni desde cuándo.' },
    { k: 'n', v: '2', t: 'Lo que falta en stock' },
    { k: 'n', v: '3', t: 'Lo que perdés cada día', small: 'Sin darte cuenta.' }
  ] } },
  { id: 6, theme: 'magenta', tag: 'REFLEXIÓN · 2026', title: 'La caja cierra sola', slide: { type: 'quote', lines: ['La caja cierra sola', 'cuando el sistema', '<teal>trabaja por vos</teal>.'] } },
  { id: 7, theme: 'dark', tag: 'REFLEXIÓN · 2026', title: 'Stock que no ves', slide: { type: 'quote', lines: ['Stock que no ves,', 'plata que no cobrás.'] } },
  { id: 8, theme: 'magenta', tag: 'DATOS · 2026', title: 'Cerrar la caja en 5 minutos', slide: { type: 'metrics', ctx: 'Cerrar la caja con sistema', num: '5', suffix: ' min', cap: '¿Y a vos cuántos te lleva?' } },
  { id: 9, theme: 'light', tag: 'REFLEXIÓN · 2026', title: 'Tu cliente no espera', slide: { type: 'quote', lines: ['Tu cliente no espera.', 'Tu sistema tampoco.'] } },
  { id: 10, theme: 'dark', tag: 'REFLEXIÓN · 2026', title: 'El cuaderno es gratis', slide: { type: 'quote', lines: ['El cuaderno es gratis.', '<mag>Hasta que perdés la primera venta.</mag>'] } },
  { id: 11, theme: 'magenta', tag: 'DEUDORES · 2026', title: 'Deudores, la plata que más trabajo da', slide: { type: 'quote', lines: ['Deudores: la plata que', 'más trabajo te da cobrar.'] } },
  { id: 12, theme: 'light', tag: 'REFLEXIÓN · 2026', title: 'Un sistema no es un gasto', slide: { type: 'quote', lines: ['Un sistema no es un gasto.', 'Es un empleado que', '<teal>nunca se enferma</teal>.'] } },
  { id: 13, theme: 'dark', tag: 'WHATSAPP · 2026', title: 'Mientras dormís, tu WhatsApp vende', slide: { type: 'quote', lines: ['Mientras dormís,', 'tu WhatsApp puede vender.'] } },
  { id: 14, theme: 'magenta', tag: 'PROBLEMAS · 2026', title: 'El ticket, el stock y la caja', slide: { type: 'quote', lines: ['El ticket, el stock y la caja:', 'tres lugares,', '<mag>un solo problema</mag>.'] } },
  { id: 15, theme: 'light', tag: 'VALORES · 2026', title: 'Orden no es lujo', slide: { type: 'quote', lines: ['Orden no es lujo.', 'Es lo que hace crecer.'] } },
  { id: 16, theme: 'dark', tag: 'REFLEXIÓN · 2026', title: 'Tu memoria no escala', slide: { type: 'quote', lines: ['¿Tu negocio depende', 'de tu memoria?', '<mag>Eso no escala.</mag>'] } },
  { id: 17, theme: 'magenta', tag: 'PROCESO · 2026', title: 'La primera reunión no cuesta nada', slide: { type: 'quote', lines: ['La primera reunión no cuesta nada.', 'El desorden cuesta', '<mag>todos los días</mag>.'] } },
  { id: 18, theme: 'light', tag: 'PROCESO · 2026', title: 'Del cuaderno a la pantalla', slide: { type: 'search', query: 'del cuaderno a la pantalla', results: [
    { ic: '1', t: 'Reunión inicial sin cargo' },
    { ic: '2', t: 'Propuesta a tu medida' },
    { ic: '3', t: 'Instalación y capacitación' }
  ] } },
  { id: 19, theme: 'dark', tag: 'VALORES · 2026', title: 'Vos sos el dueño de tus datos', slide: { type: 'quote', lines: ['Vos sos el dueño', 'de tus <teal>datos</teal>.', 'Siempre.'] } },
  { id: 20, theme: 'magenta', tag: 'MARCA · 2026', title: 'Escribinos y empezá', slide: { type: 'close', pill: '¿Listo para ordenar tu negocio?', lines: ['Tu negocio, ordenado.', { grad: 'Tu información, al alcance de la mano.' }], cta: 'Escribinos y empezá hoy', sub: 'urquisoft.com' } },
  // Conversiones de carruseles del plan v5
  { id: 21, theme: 'light', tag: 'PROYECTO NUEVO · 2026', title: 'Vender online sin dejar el mostrador', slide: { type: 'quote', lines: ['Tu comercio puede vender online', 'sin dejar el <mag>mostrador</mag>.'] } },
  { id: 22, theme: 'dark', tag: 'MARCA · 2026', title: 'Lo que NO hacemos', slide: { type: 'quote', lines: ['Lo que <mag>NO</mag> hacemos:', 'venderte tecnología por venderla.'] } },
  { id: 23, theme: 'magenta', tag: 'FEATURE · 2026', title: 'Tu sistema puede cobrar por vos', slide: { type: 'search', query: '¿tu sistema puede cobrar por vos?', results: [
    { ic: '✓', t: 'Deuda por cliente', small: 'Siempre al día' },
    { ic: '✓', t: 'Recordatorio automático', small: 'El sistema avisa' },
    { ic: '✓', t: 'Menos perseguir, más cobrar' }
  ] } },
  { id: 24, theme: 'dark', tag: 'PROCESO · 2026', title: 'Del cuaderno a la pantalla en 4 pasos', slide: { type: 'rows', items: [
    { k: 'n', v: '1', t: 'Reunión inicial sin cargo' },
    { k: 'n', v: '2', t: 'Propuesta a tu medida' },
    { k: 'n', v: '3', t: 'Instalación y capacitación' },
    { k: 'n', v: '4', t: 'Acompañamiento mensual' }
  ] } },
  { id: 25, theme: 'light', tag: 'CHECKLIST · 2026', title: '4 señales de que necesitás un sistema', slide: { type: 'rows', items: [
    { k: 'n', v: '1', t: 'Sabés el stock de memoria' },
    { k: 'n', v: '2', t: 'Las deudas están en la libreta' },
    { k: 'n', v: '3', t: 'Mandás los mismos mensajes' },
    { k: 'n', v: '4', t: 'Los números solo los sabe el dueño' }
  ] } },
  { id: 26, theme: 'magenta', tag: 'ENCUESTA · 2026', title: '¿Qué te cuesta más?', slide: { type: 'options', items: [
    { v: 'A', t: 'El stock: nunca sé cuánto me queda.' },
    { v: 'B', t: 'La cobranza: me deben y no me acuerdo.' },
    { v: 'C', t: 'Los turnos: se me superponen.' },
    { v: 'D', t: 'La facturación: los papeles me comen.' }
  ] } }
];