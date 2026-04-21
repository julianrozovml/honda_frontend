"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Button from "@/components/ui/Buttons/Button/button";
import type { ModalProps } from "../modal.types";
import styles from "./ModalError.module.scss";

export function ModalError({ open, onClose, title, description }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content
          className={styles.content}
          aria-describedby="modal-error-desc"
        >
          <div className={styles.header}>
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M21 7C28.7324 7 35 13.2681 35 21C35 28.7324 28.7324 35 21 35C13.2681 35 7 28.7324 7 21C7 13.2681 13.2681 7 21 7ZM21 8.75C14.2454 8.75 8.75 14.2454 8.75 21L8.75391 21.3154C8.92182 27.9257 14.3509 33.2773 21 33.2773C27.6491 33.2773 33.0782 27.9256 33.2461 21.3154L33.25 21C33.25 14.3509 27.9248 8.92181 21.3154 8.75391L21 8.75ZM27.4697 13.4697C27.7626 13.1768 28.2374 13.1768 28.5303 13.4697C28.8231 13.7626 28.8231 14.2374 28.5303 14.5303L22.0605 21L28.5303 27.4697C28.8231 27.7626 28.8231 28.2374 28.5303 28.5303C28.2374 28.8231 27.7626 28.8231 27.4697 28.5303L21 22.0605L14.5303 28.5303C14.2374 28.8231 13.7626 28.8231 13.4697 28.5303C13.1768 28.2374 13.1768 27.7626 13.4697 27.4697L19.9395 21L13.4697 14.5303C13.1768 14.2374 13.1768 13.7626 13.4697 13.4697C13.7626 13.1768 14.2374 13.1768 14.5303 13.4697L21 19.9395L27.4697 13.4697Z"
                fill="#484846"
              />
            </svg>
            <Dialog.Title className={styles.title}>{title}</Dialog.Title>
          </div>
          <Dialog.Description
            id="modal-error-desc"
            className={styles.description}
          >
            {description}
          </Dialog.Description>
          <Button label="Cerrar" variant="primary" onClick={onClose} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
