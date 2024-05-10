import { useOnClickOutside } from "@hooks";
import { DropDownContext } from "@shared/context";
import React, { FC, useContext, useRef } from "react";

interface IDropDownContainerProps {
  children: React.ReactNode;
}

export const DropDownContainer: FC<IDropDownContainerProps> = ({
  children,
}) => {
  const { toggleDropDown } = useContext(DropDownContext);
  const dropDownParentRef = useRef<HTMLDivElement>(null);
  const handeStatuss = () => {
    toggleDropDown(false);
  };
  useOnClickOutside(dropDownParentRef, handeStatuss);
  return (
    <div ref={dropDownParentRef} className="dropdown-container">
      {children}
    </div>
  );
};
