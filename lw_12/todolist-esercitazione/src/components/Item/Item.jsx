import { useState } from "react";
import './Item.css'

const Item = ({ text, handleClick }) => {
    const [isActive, setIsActive] = useState(false);

    const changeStatus = () => {
      setIsActive(!isActive);
    };

    const handleClassSwitch = () => {
        setIsActive(false);
        handleClick();
    }

    return (
      <li className={!isActive ? "item" : "item-focus"}>
        <div>
          {!isActive && (
            <span onClick={changeStatus} className="item-button__done">
              ✔
            </span>
          )  }

          {isActive && (
            <span onClick={handleClassSwitch} className="item-button__delete">
              ✗
            </span>
          )}

          <span>{text}</span>
        </div>
      </li>
    );
}

export default Item