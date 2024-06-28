import { ComponentPropsWithoutRef } from "react";
import cn from "clsx";
import { useDropDownContext } from "../../context/DropDownProvider";

import styles from "./DropDownList.module.scss";

interface IProps extends ComponentPropsWithoutRef<"div"> {
  show?: boolean;
}

const DropDownList = ({ children, className, ...rest }: IProps) => {
  const props = useDropDownContext();


  if (!props.open) return null;

  return (
    <div {...rest} className={cn(styles.list, className)}>
      {children}
    </div>
  );
};

export default DropDownList;
