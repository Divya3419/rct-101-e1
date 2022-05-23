import React, { useState } from "react";
import Task from "../Task/Task";
import styles from "./addTask.module.css";

const AddTask = () => {
  
const[task,setTask]=useState("")
const [todo,setTodo]=useState([])

const itemDelete = (id)=>{
  let newTodo=todo.filter(ele=> ele.id !=id)
  setTodo(newTodo)
}
  return (
    <div className={styles.todoForm}>

      <input data-cy="add-task-input" type="text" placeholder="Add Task..." onChange={(e)=>{setTask(e.target.value)}} value={task}/>

      <button data-cy="add-task-button" onClick={()=>{setTodo([...todo,{id:Date.now(),text:task,done:true,count:0}])
         setTask("")                 
    } }>+</button>

      {todo.map((ele)=>{
        return(
          <Task key={ele.id} {...ele} itemsDelete={itemDelete} />
          // <div key={ele.id}>{ele.text}</div>
        )
      })}
    </div>
  );
};

export default AddTask;
