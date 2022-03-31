import TodoItem from "../TodoItem/Todoitem"
import "./Todos.css"
import Card from "../UI/Card/Card"
const Todos = (props)=>{
    const ALL_TODOS = props.todo
    return(
        <Card className="todos"> 
            {ALL_TODOS.map((todo)=>(
                <div key={todo.id}>
                <TodoItem 
                title={todo.title} 
        priority={todo.priority} 
        date = {todo.date}
        key={todo.id}
        />
</div>
            ))}
    
            {/* <TodoItem title={INITIAL_TODO[0].title} 
        priority={INITIAL_TODO[0].priority} 
        date = {INITIAL_TODO[0].date}/>

        <TodoItem title={INITIAL_TODO[1].title} 
        priority={INITIAL_TODO[1].priority} 
        date = {INITIAL_TODO[1].date}/>

        <TodoItem title={INITIAL_TODO[2].title} 
        priority={INITIAL_TODO[2].priority} 
        date = {INITIAL_TODO[2].date}/> */}

        </Card>
    )
}

export default Todos