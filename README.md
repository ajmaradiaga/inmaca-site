# INMACA — sitio web

Sitio de una sola página construido con [Eleventy (11ty)](https://www.11ty.dev/), desplegado en GitHub Pages, con formulario de contacto vía Formspree.

## Estructura

```
src/
  _data/site.js        ← TODO el contenido editable (textos, servicios, proyectos)
  _includes/layouts/   ← plantilla HTML base
  index.njk            ← la página (secciones)
  assets/css/style.css ← estilos
  assets/img/          ← imágenes (proyecto-1.jpg, etc.)
.github/workflows/     ← despliegue automático
```

## Editar contenido

Casi todo se edita en **`src/_data/site.js`**: teléfono, correo, textos de la empresa,
lista de servicios, estadísticas y proyectos. No hace falta tocar el HTML.

Las imágenes de proyectos van en `src/assets/img/` con los nombres referenciados
en `site.js` (`proyecto-1.jpg`, `proyecto-2.jpg`, `proyecto-3.jpg`).

## Formulario de contacto

1. Crea una cuenta gratis en https://formspree.io
2. Crea un formulario nuevo apuntado a tu correo.
3. Copia el ID del formulario (ej. `xqakwbrn`) y pégalo en `formspreeId` dentro de `site.js`.

Plan gratuito: 50 envíos/mes. Los mensajes llegan directo a tu correo.

## Desarrollo local

```bash
npm install
npm run dev      # servidor local en http://localhost:8080
npm run build    # genera _site/
```

## Despliegue

Cada `git push` a `main` dispara el workflow que construye el sitio y lo publica.
En GitHub: **Settings → Pages → Source: GitHub Actions** (una sola vez).
