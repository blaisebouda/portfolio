import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  /** Optional ref to focus when modal opens (eg. close button) */
  initialFocusRef?: React.RefObject<HTMLElement>;
  children?: React.ReactNode;
};

/**
 * Accessible modal (dialog) component with focus trapping, Escape to close,
 * body scroll lock and CSS-based fade/scale animation.
 */
export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  initialFocusRef,
  children,
}: ModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  // Save last focused element before open
  useEffect(() => {
    if (isOpen) {
      lastActiveElementRef.current =
        document.activeElement as HTMLElement | null;
    }
  }, [isOpen]);

  // Lock body scroll
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  // Focus management
  useEffect(() => {
    if (!isOpen) return;
    const toFocus = initialFocusRef?.current ?? dialogRef.current ?? undefined;
    if (toFocus) {
      (toFocus as HTMLElement).focus();
    }
  }, [isOpen, initialFocusRef]);

  // Restore focus on close
  useEffect(() => {
    if (!isOpen && lastActiveElementRef.current) {
      try {
        lastActiveElementRef.current.focus();
      } catch {
        document.body.focus();
      }
    }
  }, [isOpen]);

  // Keyboard events: Escape + focus trap
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!isOpen) return;
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
      if (e.key === "Tab") {
        handleTabKey(e);
      }
    }
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [isOpen, onClose]);

  function handleTabKey(e: KeyboardEvent) {
    if (!dialogRef.current) return;
    const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) {
      e.preventDefault();
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  // Close when clicking outside
  function onOverlayClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) onClose();
  }

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="modal-overlay"
      onMouseDown={onOverlayClick}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        aria-describedby={description ? "modal-desc" : undefined}
        tabIndex={-1}
        className="modal-content"
      >
        <div className="modal-body">{children}</div>
      </div>
    </div>,
    document.body
  );
}
