import {FaTimes} from "react-icons/fa"
import { useDispatch } from "react-redux";
import {toggleReminder, deleteItem} from "../actions/items"

const Task = ({task}) => {
    const dispatch = useDispatch();
    return (
        <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={()=>dispatch(toggleReminder(task.id))}>
            <h3>{task.title} <FaTimes style={{color:"red", cursor: "pointer", fontSize: "25px"}} onClick={()=>dispatch(deleteItem(task.id))}/></h3>
            <p>{task.content}</p>
        </div>
    )
}

export default Task