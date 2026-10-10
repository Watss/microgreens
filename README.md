# Landing de microgreens

Experiencia editorial hecha con Astro y TypeScript. El primer recorrido combina únicamente los dos videos disponibles: cultivo y cosecha. El motor `scroll-world` controla el fotograma visible con la posición del scroll en escritorio; como los clips no comparten un fotograma de unión, la transición entre ellos es una disolvencia corta e intencional. No se simula una toma continua.

El motor adaptado vive en `src/lib/scrub-engine.js`; el código se basa en [oso95/scroll-world](https://github.com/oso95/scroll-world) y conserva su licencia MIT en `src/lib/scroll-world.LICENSE`.

## Ejecutar

```sh
npm install
npm run dev
```

Validar tipos y componentes:

```sh
npm run check
npm run build
npm run preview
```

El sitio se compila como páginas estáticas en `dist/`.

## Escenas

La configuración está en `src/config/scenes.ts`. Una escena se incluye solo cuando `enabled` es `true` y su poster existe. El video se carga cuando el usuario se acerca a esa escena; si el archivo de video no responde, permanece el poster. Para sumar selección o empaque:

1. Copia el video a `public/videos/` y el poster a `public/images/`.
2. Completa sus datos en `src/config/scenes.ts` y activa `enabled`.
3. El motor la agrega en el orden del arreglo; no hace falta editar la lógica.

En teléfonos el recorrido conserva fotogramas reales y textos, sin descargar los videos horizontales. `prefers-reduced-motion` también deja los posters y evita cargar clips.

## Datos comerciales y publicación

Edita `src/config/site.ts` antes de publicar. La marca del sitio es Vireya Microgreens:

- Define `site.url` con el dominio real para habilitar canonical y las URLs absolutas de Open Graph.
- Completa `store.whatsappNumber` en formato internacional solo con dígitos, o `store.email`.
- Si no hay canal configurado, el formulario solo prepara y copia un mensaje local. No transmite ni guarda datos.
- Actualiza las páginas de privacidad y condiciones con las políticas comerciales reales antes de activar pedidos, pagos o analítica.

El texto nutricional es general y no atribuye cantidades ni efectos médicos al producto. El sitio no presenta disponibilidad, precios, despacho, certificaciones ni testimonios hasta que esos datos se configuren.
