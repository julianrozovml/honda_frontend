# Chevron Icons

Conjunto de cuatro iconos de dirección (`Down`, `Up`, `Left`, `Right`) construidos como componentes React independientes. Cada uno renderiza un SVG escalable que hereda el color del contexto donde se use.

---

## Estructura

```
Chevron/
├── ChevronDown/
│   ├── chevron-down.tsx
│   └── chevron-down.types.ts
├── ChevronUp/
│   ├── chevron-up.tsx
│   └── chevron-up.types.ts
├── ChevronLeft/
│   ├── chevron-left.tsx
│   └── chevron-left.types.ts
└── ChevronRight/
    ├── chevron-right.tsx
    └── chevron-right.types.ts
```

---

## Props

Todos los componentes comparten la misma interfaz:

| Prop          | Tipo     | Default | Descripción                          |
|---------------|----------|---------|--------------------------------------|
| `size`        | `number` | `24`    | Ancho y alto del ícono en píxeles    |
| `strokeWidth` | `number` | `1`     | Grosor del trazo del SVG             |
| `className`   | `string` | —       | Clase CSS adicional para estilos externos |

---

## Importación

```tsx
import ChevronDown  from "@/components/ui/Icons/Chevron/ChevronDown/chevron-down";
import ChevronUp    from "@/components/ui/Icons/Chevron/ChevronUp/chevron-up";
import ChevronLeft  from "@/components/ui/Icons/Chevron/ChevronLeft/chevron-left";
import ChevronRight from "@/components/ui/Icons/Chevron/ChevronRight/chevron-right";
```

---

## Uso

### Valores por defecto (24px · strokeWidth 1)

```tsx
<ChevronDown />
<ChevronUp />
<ChevronLeft />
<ChevronRight />
```

### Tamaño personalizado

```tsx
// Slider — íconos grandes con trazo fino
<ChevronLeft  size={34} />
<ChevronRight size={34} />
```

### Trazo más grueso para íconos pequeños

```tsx
// Select — ícono pequeño, trazo visible
<ChevronDown size={16} strokeWidth={2} />
```

### Con clase CSS externa

```tsx
<ChevronDown size={20} className={styles.chevronIcon} />
```

```scss
.chevronIcon {
  transition: transform 0.2s ease;

  &.open {
    transform: rotate(180deg);
  }
}
```

### Condicional — acordeón o dropdown

```tsx
{isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
```

---

## Color

El SVG utiliza `stroke="currentColor"`, por lo que **hereda automáticamente el color del texto del elemento padre**. No se requiere ninguna prop de color.

```tsx
// El chevron toma el color rojo del botón
<button className={styles.btn}>
  Ver más <ChevronDown size={16} />
</button>
```

```scss
.btn {
  color: $color-primary-red;
  // El ChevronDown también se renderiza en rojo
}
```

---

## Cuándo usar cada uno

| Componente     | Casos de uso                                      |
|----------------|---------------------------------------------------|
| `ChevronDown`  | Dropdowns, acordeones, selects, menús colapsados  |
| `ChevronUp`    | Estado expandido de acordeón o dropdown           |
| `ChevronLeft`  | Botón "anterior" en sliders, paginación, back     |
| `ChevronRight` | Ítems de lista navegables, breadcrumbs, siguiente |

---

## Usos actuales en el proyecto

| Archivo                                        | Componente      | `size` | `strokeWidth` |
|------------------------------------------------|-----------------|--------|---------------|
| `ui/Slider/SliderGeneral/slider-general.tsx`   | `ChevronLeft`   | `34`   | `1`           |
| `ui/Slider/SliderGeneral/slider-general.tsx`   | `ChevronRight`  | `34`   | `1`           |
| `ui/Forms/Select/select.tsx`                   | `ChevronDown`   | `16`   | `2`           |
| `layouts/MainMenu/main-menu.tsx`               | `ChevronDown`   | `24`   | `2`           |
| `layouts/MainMenu/main-menu.tsx`               | `ChevronRight`  | `24`   | `2`           |
