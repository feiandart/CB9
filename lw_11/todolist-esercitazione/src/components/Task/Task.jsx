import './Task.css'
import { useState } from 'react';

const Task = ({ text, handleClick}) => {

    const [isActive, setIsActive] = useState(false);

    const changeStatus = () => {
        setIsActive(!isActive);
    }

    const handleClassSwitch = () => {
      setIsActive(false);
      handleClick();
    };

  
    return (
      <li className={!isActive ? "task" : "focus"}>
        <div>

          
          <span onClick={changeStatus} className="task-button__done"></span>
          <span  onClick={handleClassSwitch} className="task-button__delete"></span>

          <span>{text}</span>

        </div>
      </li>
    );
}

export default Task