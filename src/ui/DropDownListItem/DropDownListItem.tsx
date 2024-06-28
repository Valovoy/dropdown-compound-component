import { ComponentPropsWithoutRef } from "react";
import cn from "clsx";
import { useDropDownContext } from "../../context/DropDownProvider";

import styles from "./DropDownListItem.module.scss"

interface IProps extends ComponentPropsWithoutRef<"button"> {}

const DropDownListItem = ({ onClick, className, children }: IProps) => {
  const props = useDropDownContext();

  return (
    <button
      onClick={(e) => {
        onClick?.(e);
        props.onClose();
      }}
      className={cn(styles.btn, className)}
    >
      {children}
    </button>
  );
};

export default DropDownListItem;
