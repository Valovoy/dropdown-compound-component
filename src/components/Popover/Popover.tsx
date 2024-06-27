import { ComponentPropsWithoutRef, useState } from "react";
import { PopoverContext } from "../../context/PopoverProvider";
import PopoverButton from "../../ui/PopoverButton/PopoverButton";
import PopoverList from "../../ui/PopoverList/PopoverList";
import PopoverListItem from "../../ui/PopoverListItem/PopoverListItem";

interface IProps extends ComponentPropsWithoutRef<"div"> {}

const PopoverComponent = ({ className, children, ...rest }: IProps) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <PopoverContext.Provider value={{ open, onOpen, onClose }}>
      <div {...rest} style={{position: 'relative'}} className={className}>
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
