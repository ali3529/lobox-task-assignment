# Lobox Task Assignment
React + TypeScript + Vite + Scss



## DropDown

```js
  <DropDown
        // You Can Set Defult Value
         deafultValue={DROP_DOWN_FAKE_DATA?.slice(2, 3)}

        //get Selected Items
        onChange={handleSelectedItem}
      >
        //Input For Insert New Item
        <DropDownInput onSubmitValue={handleInputValue} />
        {dropDawnItem.map((item, index) => (
          <DropDownItem key={index} value={item}> {item} </DropDownItem>
        ))}
   </DropDown>
```
run project:
```bash
  npm install
  npm run dev
```
