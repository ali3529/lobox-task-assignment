# Lobox Task Assignment
React + TypeScript + Vite +Scss



## DropDown

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
  <DropDown
        // You Can Set Defult Value
        // deafultValue={DROP_DOWN_FAKE_DATA?.slice(2, 3)}
        onChange={handleSelectedItem}
      >
        <DropDownInput onSubmitValue={handleInputValue} />
        {dropDawnItem.map((item, index) => (
          <DropDownItem key={index} value={item}> {item} </DropDownItem>
        ))}
      </DropDown>
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
