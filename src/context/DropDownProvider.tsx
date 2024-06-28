import { createContext, useContext } from "react";

interface DropDownContextProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const DropDownContext = createContext<DropDownContextProps>(null!);

export const useDropDownContext = () => {
  const props = useContext(DropDownContext);

  if (!props) {
    throw new Error("No DropDown context found! ");
  }

  return props;
};
