import { forwardRef, useContext } from "react";
import { DialogContext } from "./Dialog";

export type DialogTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

const DialogTrigger = forwardRef<HTMLButtonElement, DialogTriggerProps>(
  ({ children, ...props }, ref) => {
    const { handleOpen } = useContext(DialogContext);

    return (
      <button ref={ref} type="button" onClick={() => handleOpen()} {...props}>
        {children}
      </button>
    );
  }
);

DialogTrigger.displayName = "DialogTrigger";

export default DialogTrigger;
