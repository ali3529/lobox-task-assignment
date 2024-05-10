
import { DropDownContext } from "@shared/context";
import clsx from "clsx";
import { FC, useContext } from "react";

interface IDropDownListContainer {
  children: React.ReactNode;
}
export const DropDownListContainer: FC<IDropDownListContainer> = ({
  children,
}) => {
  const { dropDownStatus } = useContext(DropDownContext);

  return (
    <div
      className={clsx(
        "dropdown-list-container",
        dropDownStatus ? "active" : ""
      )}
    >
      <ul className="dropdown-items-container">{children}</ul>
    </div>
  );
};
