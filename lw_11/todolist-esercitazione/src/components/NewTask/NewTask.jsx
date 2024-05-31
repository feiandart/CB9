import { useState } from 'react';
import { nanoid } from 'nanoid';

const NewTask = ({ addTasks = () => { }, tasks = [], text }) => {
    
    const [InputValue, setInputValue] = useState('');


    return (
        <div className="input-box">
            <form type="submit">

                <input
                    placeholder="Insert your task"
                    className="input-box__searchbar"
                    type="text"
                    value={InputValue}
                    onChange={(insert) => {
                        setInputValue(insert.target.value)
                    }}
                />
                
                <button
                    type="submit"
                    className="input-box__button"
                    onClick={(insert) => {
                        insert.preventDefault();
                        addTasks([...tasks, { id: nanoid(), text: InputValue }])
                        setInputValue("");
                    }}
                >
                    {text}
                </button>

            </form>
        </div>
    )
}

export default NewTask