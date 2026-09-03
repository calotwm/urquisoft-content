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
- CTA final: "Escribinos por privado" (sin flecha). CTA de portada: "Deslizá para ver la realidad →".
- Slide de cierre: logo + eslogan con highlight en teal + CTA.

## Estructura

```
Urquisoft-Carrusel/
├── build.js          # Generador: define CSS y contenido de los 6 slides
├── src/              # HTML generados (1 por slide)
├── img/              # PNG finales 1080×1350 listos para subir
└── assets/           # Logo (aakdsada-crop.png, recortado al contenido real)
```

## Cómo regenerar

```bash
node build.js
```

Los HTML se regeneran en `src/`. Para renderizar a PNG con Chrome headless:

```powershell
& "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --virtual-time-budget=8000 --window-size=1080,1350 --screenshot="img\slide-XX.png" "file:///C:/ruta/a/src/slide-XX.html"
```

## Pendiente

- `urquisoft.com` en el sub del slide de cierre es placeholder: reemplazar por el handle/URL real.