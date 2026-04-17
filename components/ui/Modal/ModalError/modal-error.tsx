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
        <Dialog.Content className={styles.content} aria-describedby="modal-error-desc">
          <div className={styles.iconWrapper}>
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4m0 4h.01" />
            </svg>
          </div>
          <Dialog.Title className={styles.title}>{title}</Dialog.Title>
          <Dialog.Description id="modal-error-desc" className={styles.description}>
            {description}
          </Dialog.Description>
          <Button
            label="Cerrar"
            variant="secondary"
            onClick={onClose}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
