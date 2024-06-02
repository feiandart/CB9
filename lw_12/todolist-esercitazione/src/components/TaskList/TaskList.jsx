import Task from "../Task/Task"
import './TaskList.css'

const TaskList = ({ tasks = [], addTasks = () => {}}) => {
    
    const handleCancelation = (id) => {
        addTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <ul className="tasklist">
            {tasks.map((task, index) => (
                <Task key={index} text={task.text} handleClick={() => handleCancelation(task.id)} />
            ))}
        </ul>
    )
}

export default TaskList