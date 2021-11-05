import { useState } from "react"
import Header from "./components/Header"
import Task from "./components/Task"
import AddTask from "./components/AddTask"
import { useDispatch, useSelector, useStore} from "react-redux"

function App() {
const items = useSelector(state=>state.items);
const [displayForm, setForm] = useState(false);

const toggleForm = () =>{
  setForm(!displayForm);
}


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
