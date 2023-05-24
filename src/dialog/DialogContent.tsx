import "./DialogContent.css";

import { useContext } from "react";
import { DialogContext } from "./Dialog";
import DialogClose from "./DialogClose";

export type DialogContentProps = {
  children: React.ReactNode;
  className?: string;
};

const DialogContent = ({ children, ...props }: DialogContentProps) => {
  const { ref } = useContext(DialogContext);

  return (
    <dialog ref={ref} className="dialog" {...props}>
      {children}
      <DialogClose>Close</DialogClose>
    </dialog>
  );
};

DialogContent.displayName = "DialogContent";

export default DialogContent;
