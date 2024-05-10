import clsx from "clsx";
import { FC, useContext } from "react";
import DropDownContext from "./context/DropDownContext";

interface IDropDownListContainer {
  children: React.ReactNode;
}
export const DropDownListContainer: FC<IDropDownListContainer> = ({
  children,
}) => {
  const { dropDownStatus: dropDownToggleStatus } = useContext(DropDownContext);
  return (
    <div
      className={clsx(
        "dropdown-list-container",
        dropDownToggleStatus ? "active" : ""
      )}
    >
      <ul className="dropdown-items-container">{children}</ul>
    </div>
  );
};
