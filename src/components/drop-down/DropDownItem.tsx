import { CheckIcon } from "@shared/icons";
import clsx from "clsx";
import React, { FC, useContext } from "react";
import DropDownContext from "./context/DropDownContext";

interface IDropDownItem {
  value: string;
  children?: React.ReactNode;
}

export const DropDownItem: FC<IDropDownItem> = ({ value, children }) => {
  const { selected, setSelectedItem, toggleDropDown } =
    useContext(DropDownContext);

  const handleSelectedItem = (item: string) => {
    setSelectedItem(item);
    toggleDropDown(false);
  };

  return (
    <li
      onClick={() => handleSelectedItem(value)}
      className={clsx("dropdown-item", selected === value && "selected")}
    >
      {children}
      <span>
        <CheckIcon width={18} height={18} />
      </span>
    </li>
  );
};
