import { Check, ChevronUp } from "@shared/icons";
import "@styles/components/dropdown/DropDowm.scss";
import clsx from "clsx";
export const DropDown = () => {
  return (
    <div className="dropdown-container">
      <div className="dropdown-input">
        <div className="dropdown-select-box">
          <p>Science</p>
          <span className="chevron-icon">
            <ChevronUp width={18} height={18} />
          </span>
        </div>
      </div>
      <div className="dropdown-box-container">
        <div className="dropdown-items-container">
          {[
            "Art 😁",
            "Education 🚀",
            "Sport ⚽",
            "Games 🎮",
            "Health 🏥",
            "Art 🎭",
            "Art 😁",
            "Education 🚀",
            "Sport ⚽",
            "Games 🎮",
            "Health 🏥",
            "Art 🎭",
          ].map((item, index) => (
            <ul
              key={index}
              className={clsx("dropdown-item ", index == 2 && "selected")}
            >
              {item}
              <li className="check-icon">
                <Check width={18} height={18} />
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
