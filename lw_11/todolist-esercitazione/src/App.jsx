import { useState } from 'react'
import './App.css'
import ItemList from './components/ItemList/ItemList';
import NewItem from './components/NewItem/NewItem';
import NewTask from './components/NewTask/NewTask';
import TaskList from './components/TaskList/TaskList';

function App() {

  const [tasks, setTasks] = useState([])
  const [items, setItems] = useState([])

  return (
    <div>

      <h1>To-Do List</h1>

      <div className="todolist">
        <h3>Daily Tasks</h3>
        <NewTask addTasks={setTasks} tasks={tasks} text="Add Task" />
        <TaskList addTasks={setTasks} tasks={tasks} />
      </div>

      <div className="groceries">
        <h3>Shopping List</h3>
        <NewItem addItems={setItems} items={items} text="Add Item" />
        <ItemList addItems={setItems} items={items} />
      </div>
    </div>
  );
}

export default App
