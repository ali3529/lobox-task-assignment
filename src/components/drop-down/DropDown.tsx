import "@styles/components/dropdown/DropDowm.scss";

import { FC, useContext, useEffect, useState } from "react";
import { DropDownContainer } from "./DropDownContainer";
import { DropDownButton } from "./DropDownButton";
import { DropDownListContainer } from "./DropDownListContainer";
import DropDownContext from "./context/DropDownContext";
interface IDropDown {
  children: React.ReactNode;
  deafultValue?: string;
  onChange: (item: string) => void;
}
export const DropDown: FC<IDropDown> = ({
  children,
  onChange,
  deafultValue,
}) => {
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [dropDownStatus, toggleDropDown] = useState<boolean>(false);

  useEffect(() => {
    onChange(selectedItem);
  }, [selectedItem]);

  return (
    <DropDownContext.Provider
      value={{
        selected: selectedItem ? selectedItem : deafultValue,
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
