import "./TodoForm.css"
import { useState } from "react"
const TodoForm = (props) =>{
    // Title 
    const [title,setTitle] = useState('')
    const [todoDate,setTodoDate] = useState('')
    const [priority,setPriority] = useState("Medium")

    // const [userInput,setInput] = useState({
    //     title: '',
    //     todoDate: '',
    //     priority:''
    // })

    const titleChangeHandller = (event)=>{
        // setInput((prevState)=>{
        //     return {...prevState, title: event.target.value}
        // })
        // setInput({
        //     ...userInput,
        //     title: event.target.value
        // })
        setTitle(event.target.value)
        //console.log(event.target.value)
    }
    const dateChangeHandler = (event)=>{
        // setInput({
        //     ...userInput,
        //     todoDate: event.target.value
        // })
       setTodoDate(event.target.value)
        //console.log(event.target.value)
    }
    const priorityChangeHandler = (event)=>{
        // setInput({
        //     ...userInput,
        //     priority: event.target.value
        // })
        setPriority(event.target.value)
        //console.log(event.target.value)
    }
    const submitHandler = (event)=>{
        event.preventDefault()
        const userData = {
            title: title,
            date: new Date(todoDate),
            priority:priority
        }
        console.log("Title",title,"Date:",todoDate,"Priority:",priority)
        props.onSaveClick(userData)
        setTitle("")
        setTodoDate("")
        setPriority("")
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="todo-controls">
                <div className="todo-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" placeholder="Title" onChange = {titleChangeHandller} value={title}></input>

                </div>
                <div className="todo-control">
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date" onChange={dateChangeHandler} value={todoDate}></input>

                </div>
                <div className="todo-control">
                    <label htmlFor="priority">Priority</label>
                    
                    <select onChange={priorityChangeHandler}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                        value={priority}
                    </select>
                </div>

            </div>
            <div className="todo-actions">
                <button type="submit" className="btn"> Add Todo</button>
            </div>
        </form>
    )
}
export default TodoForm