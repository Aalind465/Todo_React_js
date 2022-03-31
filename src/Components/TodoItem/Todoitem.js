import {useState} from 'react'
import "./TodoItem.css"
import TodoDate from "../TodoDate/TodoDate"
import Card from "../UI/Card/Card"
function TodoItem(props){
    const[usertitle,setTitle]= useState(props.title)
    const[textChange,setTextChange]= useState(false)
    //const [newPriority,setPriority] = useState(props.priority)

    let title = props.title
    const todoDate = props.date
    const priority = props.priority

    const buttonClickHandler=()=>{
        setTitle('this is new data for the text')
        setTextChange(true)
        //setPriority("High")
        //title = "this is new updated title"
    }
    
    
return (
    <Card className="todo-item">
        <TodoDate userDate={todoDate}/>
    
    <div className="todo-descrpition">
        <h2 
            className={`${textChange == true ? "color2": "color1"}`}>
            {usertitle}</h2>
        <div className = "todo-priority">{priority}</div>
        
    </div>
    </Card>
   

)
}

export default TodoItem
