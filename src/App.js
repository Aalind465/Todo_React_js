import logo from './logo.svg';
import Todos from "./Components/Todos/Todos"
import NewTodo from './Components/NewTodo/NewTodo';
import {useState} from 'react'
function App() {
  const INITIAL_TODO = [
    {
      id:"T1",
      title:"this is first title new",
      priority:"High",
      date:new Date(2022,7,15)
    },
    {
      id:"T2",
      title:"this is second title",
      priority:"Low",
      date:new Date(2022,6,14)
    },
    {
      id:"T3",
      title:"this is third title",
      priority:"Medium",
      date: new Date(2022,8,13)
    }

  ]
  const [allTodos,setAllTodos] = useState(INITIAL_TODO)
  const dataSaveHandler=(usertodo)=>{
    console.log(usertodo)
    setAllTodos((prevData)=>{
      return [usertodo, ...prevData]
    })
  }
  return (
    <div>
    <NewTodo onDataReceive = {dataSaveHandler}/>
      <Todos todo = {allTodos}/>
      
      
      
    </div>
  );
}


export default App;






{ /*
-- require
-- import statment - optional
-- function,arrow,class-
    -return
export default
*/}