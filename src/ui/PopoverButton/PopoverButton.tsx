import { ComponentPropsWithoutRef } from "react";
import cn from "clsx";
import { usePopoverContext } from "../../context/PopoverProvider";

interface IProps extends ComponentPropsWithoutRef<"button"> {}

const PopoverButton = ({ children, className, onClick, ...rest }: IProps) => {
  const props = usePopoverContext();

  return (
    <button
      {...rest}
      className={cn("", className)}
      onClick={(e) => {
        onClick?.(e);
        props.onOpen();
      }}
    >
      {children}
    </button>
  );
};

export default PopoverButton;
