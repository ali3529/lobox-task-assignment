import { DropDown, DropDownItem } from "@components";
import { DROP_DOWN_FAKE_DATA } from "@constants/fakeData";
import "@styles/components/App.scss";
const App = () => {
  const handleSelectedItem = (item: string) => {
    console.log("selected value...", item);
  };
  return (
    <div className="app">
      <DropDown
        deafultValue={DROP_DOWN_FAKE_DATA[2]}
        onChange={handleSelectedItem}
      >
        {DROP_DOWN_FAKE_DATA.map((item, index) => (
          <DropDownItem key={index} value={item}>
            {item}
          </DropDownItem>
        ))}
      </DropDown>
    </div>
  );
};

export default App;
