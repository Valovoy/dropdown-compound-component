import { ComponentPropsWithoutRef } from "react";
import cn from "clsx";
import { usePopoverContext } from "../../context/PopoverProvider";
import useOnClickOutside from "../../hooks/useOnClickOutside";

import styles from "./PopoverList.module.scss";

interface IProps extends ComponentPropsWithoutRef<"div"> {
  show?: boolean;
}

const PopoverList = ({ children, className, ...rest }: IProps) => {
  const props = usePopoverContext();

  const ref = useOnClickOutside(props.onClose);

  if (!props.open) return null;

  return (
    <div {...rest} ref={ref} className={cn(styles.list, className)}>
      {children}
    </div>
  );
};

export default PopoverList;
