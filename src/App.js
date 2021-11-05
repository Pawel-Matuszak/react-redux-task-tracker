import { useState } from "react"
import Header from "./components/Header"
import Task from "./components/Task"
import AddTask from "./components/AddTask"
import { useDispatch, useSelector, useStore} from "react-redux"

function App() {
//   const [tasks, setTasks] = useState([
//     {
//         id: 1,
//         title: "Title 1",
//         content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         reminder: false,
//     },
//     {
//         id: 2,
//         title: "Title 2",
//         content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         reminder: false,
//     },
//     {
//         id: 3,
//         title: "Title 3",
//         content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         reminder: true,
//     }
// ])
const items = useSelector(state=>state.items);
const [displayForm, setForm] = useState(false);

const toggleForm = () =>{
  setForm(!displayForm);
}
// const addTask = (task) => {
//   const id = Math.floor(Math.random() * 1000) + 1
//   const newTask = {id, ...task}
//   setTasks([...tasks, newTask]);
// }

// const deleteTask = (id) =>{
//   setTasks(tasks.filter(task=>task.id!==id))
// }

// const toggleReminder = (id) => {
//   setTasks(tasks.map(task=>
//     task.id===id ? {...task, reminder: !task.reminder} : task
//   ))
// }



return (
    <div className="App">
    <Header title="Task tracker" toggleForm={toggleForm} formState={displayForm}/>
    {displayForm ? <AddTask/> : ""}
      
    {items.length>0 ?
      <div className="taskDiv">
        {items.map((item) => (
            <Task task={item}/>
        ))}
      </div>
    : <p style={{textAlign:"center", fontSize: "1.5rem"}}>No Tasks</p>}
    </div>
);
}

export default App;