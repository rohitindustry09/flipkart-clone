import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; 
export default function TodoList(){
    let [todos, setTodos]=useState([{task:"sample-task",id:uuidv4()}]);
    let [newtodo,setnewtodo]=useState("")

    let addNewTask=()=>{
        setTodos((prevTodo)=>{
           return [...todos,{task:newtodo,id:uuidv4()}]
        });
        setnewtodo([""])
    }


    let updateTodo=(event)=>{
        setnewtodo(event.target.value);  
    }


    let deleteTodo=(id)=>{
     setTodos(todos.filter((todo)=>todo.id!=id));
    }

    return(
        <div>
            <input
             type="text"
             placeholder="Add a Task"
             value={newtodo} 
             onChange={updateTodo}
             className="form-control"
             />
            <br /><br />
            <Button
            variant="contained" color="success"
            onClick={addNewTask}>
                   Add Task</Button>
            <br /><br /><br /><br />

            <hr />
            
            <h2>TodoList</h2>
            <ul>
                {
                    todos.map((todo)=>(
                     <li key={todo.id}>
                      
                     <span> {todo.task}</span>  
                     <button style={{marginLeft:"1.5rem"}} onClick={()=>deleteTodo(todo.id)}>Delete</button> 
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}