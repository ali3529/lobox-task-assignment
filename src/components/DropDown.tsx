import "@styles/components/dropdown/DropDowm.scss";
export const DropDown = () => {
  return (
    <div className="dropdown-container">
      <div className="dropdown-input">
        <div className="dropdown-select-box gradient-shadow">Science</div>
      </div>
      <div className="dropdown-box-container">
        <div className="dropdown-items-container">
          {["Art", "Education", "Sport", "Games", "Health","Art", "Education", "Sport", "Games", "Health",].map((item) => (
            <div className="dropdown-item">{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
