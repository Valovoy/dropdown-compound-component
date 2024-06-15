import { ComponentPropsWithoutRef } from "react";
import cn from "clsx";
import { usePopoverContext } from "./PopoverProvider";

interface IProps extends ComponentPropsWithoutRef<"button"> {}

const PopoverListItem = ({ onClick, className, children }: IProps) => {
  const props = usePopoverContext();

  return (
    <button
      onClick={(e) => {
        onClick?.(e);
        props.onClose();
      }}
      className={cn("", className)}
    >
      {children}
    </button>
  );
};

export default PopoverListItem;
