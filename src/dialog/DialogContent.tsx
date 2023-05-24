import "./DialogContent.css";

import { useContext } from "react";
import { clsx } from "clsx";
import { DialogContext } from "./Dialog";
import DialogClose from "./DialogClose";

export type DialogContentProps = {
  children: React.ReactNode;
  className?: string;
};

const DialogContent = ({
  children,
  className,
  ...props
}: DialogContentProps) => {
  const { ref } = useContext(DialogContext);

  return (
    <dialog ref={ref} className={clsx("dialog", className)} {...props}>
      {children}
      <DialogClose>Close</DialogClose>
    </dialog>
  );
};

DialogContent.displayName = "DialogContent";

export default DialogContent;
