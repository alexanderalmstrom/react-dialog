import { forwardRef, useContext } from "react";
import { clsx } from "clsx";
import { DialogContext } from "./Dialog";

export type DialogTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

const DialogTrigger = forwardRef<HTMLButtonElement, DialogTriggerProps>(
  ({ children, className, ...props }, ref) => {
    const { handleOpen } = useContext(DialogContext);

    return (
      <button
        className={clsx("dialog-trigger", className)}
        ref={ref}
        type="button"
        onClick={() => handleOpen()}
        {...props}
      >
        {children}
      </button>
    );
  }
);

DialogTrigger.displayName = "DialogTrigger";

export default DialogTrigger;
