export type VideoProvider = "youtube" | "vimeo";

export interface VideoProps {
  /** ID del video en YouTube o Vimeo */
  id: string;
  /** Plataforma del video */
  provider: VideoProvider;
  /** Título accesible del iframe */
  title?: string;
  /**
   * Mostrar controles del reproductor (default: true).
   * YouTube: oculta la barra de controles pero mantiene el play.
   * Vimeo: oculta la UI nativa y muestra un botón custom de play/pause.
   */
  controls?: boolean;
  /** Relación de aspecto del contenedor (default: 16/9) */
  aspectRatio?: "16/9" | "4/3" | "1/1";
  /** Alto fijo en px. Cuando se define, reemplaza el aspect ratio. */
  height?: number;
  className?: string;
}
