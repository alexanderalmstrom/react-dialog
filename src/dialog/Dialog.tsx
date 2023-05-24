import { useCallback, useEffect, useRef } from "react";
import { type RefObject, createContext } from "react";

export type DialogContextProps = {
  ref: RefObject<HTMLDialogElement> | null;
  handleOpen: () => void;
  handleClose: () => void;
};

export const DialogContext = createContext<DialogContextProps>({
  ref: null,
  handleOpen: () => undefined,
  handleClose: () => undefined,
});

export const Dialog = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  const handleAnimationEnd = () => {
    const dialog = ref.current;

    if (!(dialog instanceof HTMLDialogElement)) {
      return;
    }

    dialog.removeAttribute("closing");
    dialog.close();
  };

  const handleOpen = useCallback(() => {
    const dialog = ref.current;

    if (!(dialog instanceof HTMLDialogElement)) {
      return;
    }

    dialog.showModal();
  }, []);

  const handleClose = useCallback(() => {
    const dialog = ref.current;

    if (!(dialog instanceof HTMLDialogElement)) {
      return;
    }

    dialog.setAttribute("closing", "");
    dialog.addEventListener("animationend", handleAnimationEnd, {
      once: true,
    });
  }, []);

  const handleCloseWithEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
      }
    },
    [handleClose]
  );

  const handleBackdropClick = useCallback(
    (event: MouseEvent) => {
      const dialog = ref.current;

      if (!(dialog instanceof HTMLDialogElement)) {
        return;
      }

      const dialogDimensions = dialog.getBoundingClientRect();

      if (!(dialogDimensions instanceof DOMRect)) {
        return;
      }

      if (
        event.clientX < dialogDimensions.left ||
        event.clientX > dialogDimensions.right ||
        event.clientY < dialogDimensions.top ||
        event.clientY > dialogDimensions.bottom
      ) {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    const dialog = ref.current;

    if (!(dialog instanceof HTMLDialogElement)) {
      return;
    }

    dialog.addEventListener("keydown", handleCloseWithEscapeKey);
    dialog.addEventListener("click", handleBackdropClick);

    return () => {
      dialog.removeEventListener("keydown", handleCloseWithEscapeKey);
      dialog.removeEventListener("click", handleBackdropClick);
    };
  }, [handleBackdropClick, handleCloseWithEscapeKey]);

  return (
    <DialogContext.Provider value={{ ref, handleOpen, handleClose }}>
      {children}
    </DialogContext.Provider>
  );
};
