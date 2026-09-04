# Urquisoft — Kit de contenido para Instagram

Plantilla base de carruseles de Instagram con la estética oficial de Urquisoft.
Cualquier post nuevo debe seguir esta línea visual.

## Estética (design tokens)

| Token | Valor |
|---|---|
| Formato | 1080×1350 px (4:5) |
| Tipografía | Inter (titulares 800, CTA 700, cuerpo 600) |
| Fondo | `#22181C` con degradado `#1E1318 → #2A1C22 → #33202A` |
| Magenta | `#CC007E` (acento principal, glows, tachados, CTA, pips) |
| Teal | `#4CC2A3` (acento positivo: "Realidad", highlights) |
| Blanco | `#FFFFFF` + variantes translúcidas (85 / 72 / 50 / 28 %) |
| Luces | Glows radiales magenta en esquinas + hairline magenta en borde superior + inset glow |
| Superficies | Efecto liquid glass: borde blanco 16 %, gradiente translúcido, inset highlight |
| Granulado | Muy sutil (opacidad ~0.2, blend overlay) |

## Convenciones de contenido

- Voseo rioplatense con tilde correcta (quedás, estás, deslizá, escribinos).
- Comillas españolas « ».
- Estructura del carrusel: portada → mitos (frase tachada en magenta + realidad en teal) → cierre con CTA.
- Post 4 (comercios de mostrador): problema en magenta (✕), solución en teal (✓), screenshot en marco liquid glass magenta.
- CTA final: "Escribinos por privado" (sin flecha). CTA de portada: "Deslizá para ver la realidad →".
- Slide de cierre: logo + eslogan con highlight en teal + CTA.

## Estructura

```
Urquisoft-Carrusel/
├── brand.js          # Motor compartido: CSS del kit (temas dark/light) + generador de slides
├── build.js          # Post 3 — "El mito de esto lo manejo con Excel"
├── build-post4.js    # Post 4 — "Kiosco, carnicería, despensa: el mismo problema, la misma solución"
├── build-all.js      # Genera los 20 posts del plan v5 desde posts.js (DSL de slides)
├── posts.js          # Datos del plan mensual v5: 20 posts, captions y hashtags
├── posts/post-XX/    # Posts del plan (src/ HTML, img/ PNG, caption.txt)
├── src/ + img/       # Post 3
├── post4/            # Post 4
└── assets/           # Logo + capturas reales (aakdsada-crop.png, bibliotheca.png)
```

## Cómo regenerar

```bash
node build.js        # post 3 → src/ + img/
node build-post4.js  # post 4 → post4/src/ + post4/img/
node build-all.js    # plan v5 → posts/post-XX/src/ + caption.txt (luego renderizar con Chrome)
```

## Índice del plan v5 (20 posts)

| Post | Título | Tipo | Tema |
|---|---|---|---|
| 01 | Tu comercio puede vender online sin dejar el mostrador | Proyecto nuevo | dark |
| 02 | Kiosco, carnicería, despensa: el mismo problema, la misma solución | Solución | dark |
| 03 | Estos son los rubros que ya dejaron el Excel | Caso real | dark |
| 04 | Lo que NO hacemos: venderte tecnología por venderla | Marca | dark |
| 05 | ¿Cuántas horas por semana perdés anotando a mano? | Interacción | **light** |
| 06 | Cobrá con QR y dejá de perseguir la plata | Proyecto nuevo | **light** |
| 07 | ¿Sabías que tu sistema puede cobrar por vos? | Feature | dark |
| 08 | Una librería con inventario, POS y factura PDF: sin Excel | Caso real | dark |
| 09 | Del cuaderno a la pantalla en 4 pasos | Proceso | dark |
| 10 | POV: el dueño cerrando la caja un viernes | Humor | **light** |
| 11 | 4 señales de que tu negocio necesita un sistema | Checklist | dark |
| 12 | Talleres y técnicos: adiós a los papelitos de presupuesto | Solución por rubro | dark |
| 13 | Un estudio contable cargaba extractos a mano | Caso estrella | dark |
| 14 | Precios claros, sin letra chica | Precios | dark |
| 15 | Tu WhatsApp puede vender mientras dormís | Proyecto nuevo | dark |
| 16 | La libreta de deudores: el agujero negro de tu negocio | El problema | dark |
| 17 | Peluquerías y barberías: turnos que se avisan solos | Feature por rubro | **light** |
| 18 | Del pedido al reparto, sin papel: huevos a domicilio | Caso real | dark |
| 19 | Vos sos el dueño de tus datos | Valores | dark |
| 20 | ¿Qué es lo que más te cuesta de tu negocio? | Encuesta | **light** |

Reglas aplicadas: sin AFIP, voseo con tilde, « », CTA único "Escribinos y...", 5 hashtags sin #urquisoft, emojis a agregar al publicar.

Los HTML se regeneran en `src/`. Para renderizar a PNG con Chrome headless:

```powershell
& "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --virtual-time-budget=8000 --window-size=1080,1350 --screenshot="img\slide-XX.png" "file:///C:/ruta/a/src/slide-XX.html"
```

## Pendiente

- POST 13 (estudio contable): **en pausa** hasta pedir permiso al cliente para publicar (se puede decir "un estudio contable" sin nombrarlo).
- `urquisoft.com` en los subs es placeholder: reemplazar por el handle/URL real.