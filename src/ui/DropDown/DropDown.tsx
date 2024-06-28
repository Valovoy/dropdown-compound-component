import { ComponentPropsWithoutRef, useState } from "react";
import { DropDownContext } from "../../context/DropDownProvider";
import DropDownButton from "./DropDownButton/DropDownButton";
import DropDownList from "./DropDownList/DropDownList";
import DropDownListItem from "./DropDownListItem/DropDownListItem";

interface IProps extends ComponentPropsWithoutRef<"div"> {}

const DropDownComponent = ({ className, children, ...rest }: IProps) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <DropDownContext.Provider value={{ open, onOpen, onClose }}>
      <div {...rest} style={{position: 'relative'}} className={className}>
        {children}
      </div>
    </DropDownContext.Provider>
  );
};

const DropDown = Object.assign(DropDownComponent, {
  Button: DropDownButton,
  List: DropDownList,
  ListItem: DropDownListItem,
});

export default DropDown;
