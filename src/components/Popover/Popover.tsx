import { ComponentPropsWithoutRef, useState } from "react";
import cn from "clsx";
import { PopoverContext } from "./PopoverProvider";
import PopoverButton from "./PopoverButton";
import PopoverList from "./PopoverList";
import PopoverListItem from "./PopoverListItem";

import "./Popover.css";

interface IProps extends ComponentPropsWithoutRef<"div"> {}

const PopoverComponent = ({ className, children, ...rest }: IProps) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <PopoverContext.Provider value={{ open, onOpen, onClose }}>
      <div {...rest} className={cn("container", className)}>
        {children}
      </div>
    </PopoverContext.Provider>
  );
};

const Popover = Object.assign(PopoverComponent, {
  Button: PopoverButton,
  List: PopoverList,
  ListItem: PopoverListItem,
});

export default Popover;
