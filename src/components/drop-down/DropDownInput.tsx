import { FC, useState } from "react";

interface IDropDownInput {
  onSubmitValue: (string: string) => void;
}
export const DropDownInput: FC<IDropDownInput> = ({ onSubmitValue }) => {
  const [value, setValue] = useState("");
  const handleChangeValue = (value: string) => {
    setValue(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmitValue(value);
      setValue("");
    }
  };
  return (
    <input
      className="dropdown-input"
      placeholder="insert item ..."
      value={value}
      onChange={(e) => handleChangeValue(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};
