import { DropDownContext } from "@shared/context";
import { ChevronUpIcon } from "@shared/icons";
import clsx from "clsx";
import { useContext } from "react";


export const DropDownButton = () => {
  const { selected, toggleDropDown, dropDownStatus } =
    useContext(DropDownContext);
  return (
    <div
      onClick={() => toggleDropDown(!dropDownStatus)}
      className="dropdown-button"
    >
      <p>{selected ? selected : "Choose ..."}</p>
      <span className={clsx("chevron", dropDownStatus ? "open" : "")}>
        <ChevronUpIcon width={18} height={18} />
      </span>
    </div>
  );
};
