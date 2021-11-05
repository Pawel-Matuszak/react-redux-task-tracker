import {useState} from "react"
import { useDispatch } from "react-redux"
import {addItem} from "../actions/items"

const AddTask = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [reminder, setReminder] = useState(false)
    const dispatch = useDispatch()

    const onSubmit = (e) =>{
        e.preventDefault()
        if (!title) return;
        if (!content) return;

        dispatch(addItem(title, content, reminder));
        
        setTitle("");
        setContent("");
        setReminder(false);
    }

    return (
        <form onSubmit={onSubmit} className="addTaskForm">
            <div className="form-control">
                <label>Title</label>
                <input type="text" placeholder="Create title" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Content</label>
                <input type="text" placeholder="Type some text here" value={content} onChange={(e)=>setContent(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
            </div>
            <button type="submit">Add task</button>
        </form>
    )
}

export default AddTask
