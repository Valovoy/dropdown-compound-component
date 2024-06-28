import { ComponentPropsWithoutRef } from "react";
import cn from "clsx";
import { useDropDownContext } from "../../context/DropDownProvider";
import useOnClickOutside from "../../hooks/useOnClickOutside";

import styles from "./DropDownButton.module.scss"

interface IProps extends ComponentPropsWithoutRef<"button"> {}

const DropDownButton = ({ children, className, onClick, ...rest }: IProps) => {
  const {open, onClose, onOpen} = useDropDownContext();

  const ref = useOnClickOutside(onClose);

  return (
    <button
      {...rest}
      ref={ref}
      className={cn(open && styles.isOpen, className)}
      onClick={(e) => {
        onClick?.(e);
        open ? onClose() : onOpen();
      }}
    >
      {children}
    </button>
  );
};

export default DropDownButton;
