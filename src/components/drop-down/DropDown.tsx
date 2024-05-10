import "@styles/components/dropdown/DropDowm.scss";

import { FC, useContext, useEffect, useRef, useState } from "react";
import { DropDownContainer } from "./DropDownContainer";
import { DropDownButton } from "./DropDownButton";
import { DropDownListContainer } from "./DropDownListContainer";
import { DropDownContext } from "@shared/context";

interface IDropDown {
  children: React.ReactNode;
  deafultValue?: string[];
  onChange: (items: string[]) => void;
}
export const DropDown: FC<IDropDown> = ({
  children,
  onChange,
  deafultValue = [],
}) => {
  const [selectedItem, setSelectedItem] = useState<string[]>(deafultValue);
  const [dropDownStatus, toggleDropDown] = useState<boolean>(false);

  useEffect(() => {
    onChange(selectedItem);
  }, [selectedItem]);

  return (
    <DropDownContext.Provider
      value={{
        selected: selectedItem,
        setSelectedItem: setSelectedItem,
        toggleDropDown: toggleDropDown,
        dropDownStatus: dropDownStatus,
      }}
    >
      <DropDownContainer>
        <DropDownButton />

        <DropDownListContainer>{children}</DropDownListContainer>
      </DropDownContainer>
    </DropDownContext.Provider>
  );
};
