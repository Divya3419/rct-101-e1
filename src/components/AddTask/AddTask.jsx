import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
const[task,setTask]=useState("")
const [todo,setTodo]=useState([])
  return (
    <div className={styles.todoForm}>

      <input data-cy="add-task-input" type="text" placeholder="Add Task..." onChange={(e)=>{setTask(e.target.value)}} value={task}/>

      <button data-cy="add-task-button" onClick={()=>{setTodo([...todo,{id:Date.now(),value:task}])
         setTask("")                 
    } }>+</button>

      {todo.map((ele)=>{
        return(
          <div key={ele.id}>{ele.value}</div>
        )
      })}
    </div>
  );
};

export default AddTask;
