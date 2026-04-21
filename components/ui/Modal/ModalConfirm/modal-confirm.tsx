"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Button from "@/components/ui/Buttons/Button/button";
import type { ModalProps } from "../modal.types";
import styles from "./ModalConfirm.module.scss";

export function ModalConfirm({
  open,
  onClose,
  title,
  description,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content
          className={styles.content}
          aria-describedby="modal-confirm-desc"
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
                d="M21 7C13.2681 7 7 13.2681 7 21C7 28.7324 13.2681 35 21 35C28.7324 35 35 28.7324 35 21C35 13.2681 28.7324 7 21 7ZM21 33.2776C14.2454 33.2776 8.75 27.7546 8.75 20.9999C8.75 14.2454 14.2454 8.74995 21 8.74995C27.7546 8.74995 33.25 14.2454 33.25 20.9999C33.25 27.7545 27.7546 33.2776 21 33.2776ZM26.5873 15.8773L18.3732 24.143L14.6742 20.4439C14.3325 20.1023 13.7786 20.1023 13.4365 20.4439C13.0948 20.7856 13.0948 21.3395 13.4365 21.6812L17.7673 26.0124C18.109 26.3537 18.6628 26.3537 19.005 26.0124C19.0443 25.9731 19.0781 25.9302 19.1087 25.8856L27.8254 17.115C28.1667 16.7733 28.1667 16.2194 27.8254 15.8773C27.4833 15.5356 26.9294 15.5356 26.5873 15.8773Z"
                fill="#484846"
              />
            </svg>
            <Dialog.Title className={styles.title}>{title}</Dialog.Title>
          </div>
          <Dialog.Description
            id="modal-confirm-desc"
            className={styles.description}
          >
            {description}
          </Dialog.Description>
          <Button label="Aceptar" variant="primary" onClick={onClose} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
