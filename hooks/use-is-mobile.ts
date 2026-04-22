"use client";

import { useSyncExternalStore } from "react";

const BREAKPOINT = 1024;

function subscribe(cb: () => void) {
  const mq = window.matchMedia(`(max-width: ${BREAKPOINT - 1}px)`);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getSnapshot() {
  return window.matchMedia(`(max-width: ${BREAKPOINT - 1}px)`).matches;
}

function getServerSnapshot() {
  return false;
}

export function useIsMobile() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
