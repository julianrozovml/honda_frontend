# Video

Componente cliente para incrustar videos de **YouTube** y **Vimeo** mediante `<iframe>`. Soporta controles nativos del reproductor o un botón de play/pause personalizado cuando los controles están desactivados.

---

## Archivos

```
Video/
├── video.tsx               → lógica y markup del componente
├── Video.module.scss       → estilos con CSS Modules
├── video.types.ts          → tipos e interfaces
└── README.md
```

---

## Props

| Prop          | Tipo                          | Default   | Requerido | Descripción                                              |
|---------------|-------------------------------|-----------|-----------|----------------------------------------------------------|
| `id`          | `string`                      | —         | Sí        | ID del video en YouTube o Vimeo                          |
| `provider`    | `"youtube" \| "vimeo"`        | —         | Sí        | Plataforma del video                                     |
| `title`       | `string`                      | `"Video"` | No        | Texto accesible del `<iframe>` (requerido por a11y)      |
| `controls`    | `boolean`                     | `true`    | No        | Muestra u oculta los controles nativos del reproductor   |
| `aspectRatio` | `"16/9" \| "4/3" \| "1/1"`   | `"16/9"`  | No        | Relación de aspecto del contenedor                       |
| `className`   | `string`                      | —         | No        | Clase adicional para el wrapper externo                  |

---

## Uso básico

```tsx
import Video from "@/components/ui/Media/Video/video";

// YouTube con controles nativos
<Video provider="youtube" id="dQw4w9WgXcQ" title="Mi video de YouTube" />

// Vimeo sin controles nativos (botón custom de play/pause)
<Video provider="vimeo" id="76979871" title="Mi video de Vimeo" controls={false} />

// Con relación de aspecto 4:3
<Video provider="youtube" id="dQw4w9WgXcQ" aspectRatio="4/3" />
```

---

## Cómo funciona

### 1. Construcción de la URL (`PROVIDERS`)

El objeto `PROVIDERS` contiene una función por cada proveedor que construye la URL del `<iframe>` con los parámetros correctos según el valor de `controls`:

**YouTube con `controls=false`:**
```
https://www.youtube.com/embed/{id}?controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1
```
- `controls=0` — oculta la barra de controles
- `modestbranding=1` — reduce el logo de YouTube
- `rel=0` — no muestra videos relacionados al terminar
- `disablekb=1` — desactiva atajos de teclado nativos

**Vimeo con `controls=false`:**
```
https://player.vimeo.com/video/{id}?controls=0&api=1
```
- `controls=0` — oculta la UI nativa de Vimeo
- `api=1` — habilita la API de postMessage para control externo

---

### 2. Relación de aspecto

El contenedor usa la técnica del **padding-top trick** para mantener proporciones responsivas sin conocer el tamaño real del video:

```scss
.ratio16x9::before { padding-top: 56.25%; }  // 9/16 = 0.5625
.ratio4x3::before  { padding-top: 75%;     }  // 3/4  = 0.75
.ratio1x1::before  { padding-top: 100%;    }  // 1/1  = 1.0
```

El `<iframe>` se posiciona en `absolute` con `inset: 0` para ocupar todo el espacio del contenedor relativo.

---

### 3. Control de reproducción vía `postMessage`

Cuando `controls={false}`, el componente se comunica con el `<iframe>` mediante la API `window.postMessage`, ya que el iframe es un documento de origen cruzado y no se puede acceder a su DOM directamente.

#### Vimeo

Al recibir el evento `ready` desde el iframe, el componente se suscribe a los eventos `play`, `pause` y `finish`:

```js
iframeRef.current.contentWindow.postMessage(
  JSON.stringify({ method: "addEventListener", value: "play" }),
  "https://player.vimeo.com"
);
```

Para controlar la reproducción se envían comandos `play` o `pause`:

```js
iframeRef.current.contentWindow.postMessage(
  JSON.stringify({ method: "play" }),
  "https://player.vimeo.com"
);
```

#### YouTube

YouTube utiliza la YouTube IFrame Player API. Los estados del reproductor llegan como `infoDelivery` con el campo `playerState`:

| `playerState` | Significado |
|---------------|-------------|
| `1`           | Reproduciendo |
| `2`           | Pausado |
| `0`           | Finalizado |

Los comandos se envían así:

```js
iframeRef.current.contentWindow.postMessage(
  JSON.stringify({ event: "command", func: "playVideo", args: "" }),
  "https://www.youtube.com"
);
```

---

### 4. Overlay transparente

Cuando `controls={false}`, se renderiza un `<div className={styles.overlay}` con `z-index: 1` sobre el iframe. Esto bloquea los clics nativos del reproductor (YouTube renderiza su UI aunque `controls=0`) y permite que el botón personalizado tenga control exclusivo de la interacción.

---

### 5. Botón de play/pause personalizado (`showCustomControls`)

El botón custom solo se muestra cuando se cumplen ambas condiciones:

```ts
const showCustomControls = !controls && provider === "vimeo";
```

> **Nota:** YouTube no expone una API de postMessage completa sin cargar la IFrame Player API de JS. El botón custom está implementado solo para Vimeo. Con `controls={false}` en YouTube el video se reproduce sin UI, pero no tiene botón personalizado.

El botón alterna entre `<PlayIcon>` y `<PauseIcon>` según el estado `playing` y envía el comando correspondiente al iframe.

---

## Comportamiento por proveedor y configuración

| Proveedor | `controls` | Controles visibles | Botón custom | postMessage |
|-----------|------------|--------------------|--------------|-------------|
| YouTube   | `true`     | Nativos de YouTube | No           | No          |
| YouTube   | `false`    | Ninguno            | No           | Sí          |
| Vimeo     | `true`     | Nativos de Vimeo   | No           | No          |
| Vimeo     | `false`    | Ninguno            | Sí           | Sí          |
