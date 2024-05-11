import { DropDownContext } from "@shared/context";
import { CheckIcon } from "@shared/icons";
import clsx from "clsx";
import React, { FC, useContext } from "react";

interface IDropDownItem {
  value: string;
  children?: React.ReactNode;
}

export const DropDownItem: FC<IDropDownItem> = ({ value, children }) => {
  const { selected, setSelectedItem } = useContext(DropDownContext);

  const handleSelectedItem = (item: string) => {
    let newItems: string[];
    if (selected.includes(item)) {
      newItems = selected.filter((existingItem) => existingItem !== item);
    } else {
      newItems = [...selected, item];
    }
    setSelectedItem(newItems);
  };
  const isItemSelected = () => selected?.includes(value);

  return (
    <li
      onClick={() => handleSelectedItem(value)}
      className={clsx("dropdown-item", isItemSelected() && "selected")}
    >
      {children}
      <span className="chevron-icon-container">
        {isItemSelected() ? <CheckIcon width={18} height={18} /> : <></>}
      </span>
    </li>
  );
};
