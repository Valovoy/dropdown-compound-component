import { ComponentPropsWithoutRef } from "react";
import cn from "clsx";

import styles from "./DropDownListItem.module.scss"

interface IProps extends ComponentPropsWithoutRef<"button"> {}

const DropDownListItem = ({ onClick, className, children }: IProps) => {
  return (
    <button
      onClick={(e) => {
        onClick?.(e);
      }}
      className={cn(styles.btn, className)}
    >
      {children}
    </button>
  );
};

export default DropDownListItem;
