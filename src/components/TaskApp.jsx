import React from "react";
import AddTask from "./AddTask/AddTask";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
  
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <h1>Todo List</h1>
    <TaskHeader/>
<AddTask/>
<Tasks/>
      
    </div>
  );
};

export default TaskApp;
