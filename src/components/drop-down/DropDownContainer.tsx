import React, { FC } from "react";

interface IDropDownContainerProps {
  children: React.ReactNode;
}

export const DropDownContainer: FC<IDropDownContainerProps> = ({
  children,
}) => {
  return <div className="dropdown-container">{children}</div>;
};
