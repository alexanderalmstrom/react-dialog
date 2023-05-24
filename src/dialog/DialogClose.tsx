import { forwardRef, useContext } from "react";
import { DialogContext } from "./Dialog";

export type DialogCloseProps = {
  children: React.ReactNode;
  className?: string;
};

const DialogClose = forwardRef<HTMLButtonElement, DialogCloseProps>(
  ({ children, ...props }, ref) => {
    const { handleClose } = useContext(DialogContext);

    return (
      <button ref={ref} type="button" onClick={() => handleClose()} {...props}>
        {children}
      </button>
    );
  }
);

DialogClose.displayName = "DialogClose";

export default DialogClose;
