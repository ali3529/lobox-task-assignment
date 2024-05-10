import { DropDown, DropDownInput, DropDownItem } from "@components";
import { DROP_DOWN_FAKE_DATA } from "@constants/fakeData";
import "@styles/components/App.scss";
import { useState } from "react";
const App = () => {
  const [dropDawnItem, setDropDawnItem] = useState(DROP_DOWN_FAKE_DATA);
  const handleSelectedItem = (item: string[]) => {
    console.log("selected value...", item);
  };

  const handleInputValue = (value: string) => {
    setDropDawnItem((prev) => [value, ...prev]);
  };
  return (
    <div className="app">
      <DropDown
        // You Can Set Defult Value
        // deafultValue={DROP_DOWN_FAKE_DATA?.slice(2, 3)}
        onChange={handleSelectedItem}
      >
        <DropDownInput onSubmitValue={handleInputValue} />
        {dropDawnItem.map((item, index) => (
          <DropDownItem key={index} value={item}>
            {item}
          </DropDownItem>
        ))}
      </DropDown>
    </div>
  );
};

export default App;
