import { ComponentPropsWithoutRef } from "react";
import cn from "clsx";
import { usePopoverContext } from "../../context/PopoverProvider";

import styles from "./PopoverListItem.module.scss"

interface IProps extends ComponentPropsWithoutRef<"button"> {}

const PopoverListItem = ({ onClick, className, children }: IProps) => {
  const props = usePopoverContext();

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

export default PopoverListItem;
