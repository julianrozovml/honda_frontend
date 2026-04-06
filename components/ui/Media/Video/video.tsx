"use client";

import { useState, useRef, useEffect } from "react";
import type { VideoProps } from "./video.types";
import styles from "./Video.module.scss";

// ── URL builders ──────────────────────────────────────────────────────────────

const PROVIDERS = {
  // controls=0 + enablejsapi=1 habilita postMessage sin mostrar controles nativos
  youtube: (id: string, controls: boolean) =>
    controls
      ? `https://www.youtube.com/embed/${id}`
      : `https://www.youtube.com/embed/${id}?controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`,
  // api=1 habilita postMessage para controlar play/pause sin mostrar UI nativa
  vimeo: (id: string, controls: boolean) =>
    controls
      ? `https://player.vimeo.com/video/${id}`
      : `https://player.vimeo.com/video/${id}?controls=0&api=1`,
};

// ── Play/Pause icon ───────────────────────────────────────────────────────────

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function VideoGeneral({
  id,
  provider,
  title = "Video",
  controls = true,
  aspectRatio = "16/9",
  className,
}: VideoProps) {
  const src = PROVIDERS[provider](id, controls);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [playing, setPlaying] = useState(false);

  const showCustomControls = !controls && provider === "vimeo";

  // Sync play state via postMessage for both providers
  useEffect(() => {
    if (!showCustomControls) return;

    function handleMessage(e: MessageEvent) {
      // ── Vimeo events ──────────────────────────────────────────────────────
      if (typeof e.data === "string") {
        try {
          const data = JSON.parse(e.data);

          // When ready, subscribe to play/pause/finish events
          if (data.event === "ready") {
            ["play", "pause", "finish"].forEach((event) => {
              iframeRef.current?.contentWindow?.postMessage(
                JSON.stringify({ method: "addEventListener", value: event }),
                "https://player.vimeo.com"
              );
            });
          }

          if (data.event === "play")   setPlaying(true);
          if (data.event === "pause")  setPlaying(false);
          if (data.event === "finish") setPlaying(false);
        } catch {
          // ignore non-JSON strings
        }
      }

      // ── YouTube events ────────────────────────────────────────────────────
      // playerState: 1 = playing, 2 = paused, 0 = ended
      if (typeof e.data === "object" && e.data?.event === "infoDelivery") {
        const state = e.data?.info?.playerState;
        if (state === 1) setPlaying(true);
        if (state === 2 || state === 0) setPlaying(false);
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [showCustomControls]);

  function togglePlay() {
    const iframe = iframeRef.current;
    if (!iframe?.contentWindow) return;

    if (provider === "vimeo") {
      const method = playing ? "pause" : "play";
      iframe.contentWindow.postMessage(
        JSON.stringify({ method }),
        "https://player.vimeo.com"
      );
    }

    if (provider === "youtube") {
      const func = playing ? "pauseVideo" : "playVideo";
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: "command", func, args: "" }),
        "https://www.youtube.com"
      );
    }
  }

  const ratioClass: Record<string, string> = {
    "16/9": styles.ratio16x9,
    "4/3":  styles.ratio4x3,
    "1/1":  styles.ratio1x1,
  };

  return (
    <div
      className={[styles.wrapper, ratioClass[aspectRatio], className]
        .filter(Boolean)
        .join(" ")}
    >
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        className={styles.iframe}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      {showCustomControls && <div className={styles.overlay} />}

      {showCustomControls && (
        <div className={styles.customControls}>
          <button
            type="button"
            className={styles.playBtn}
            onClick={togglePlay}
            aria-label={playing ? "Pausar video" : "Reproducir video"}
          >
            {playing ? <PauseIcon /> : <PlayIcon />}
          </button>
        </div>
      )}
    </div>
  );
}
