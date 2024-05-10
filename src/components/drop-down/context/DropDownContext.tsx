import React from "react";

export interface DropDownContextProps {
  selected?: string;
  setSelectedItem: (selected: string) => void;
  dropDownStatus: boolean;
  toggleDropDown: (status: boolean) => void;
}

const DropDownContext = React.createContext<DropDownContextProps>(
  {} as DropDownContextProps
);

export default DropDownContext;
