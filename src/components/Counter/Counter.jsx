import React,{ useState} from "react";
import styles from "./counter.module.css";

const Counter = () => {
  const[count,setCount]=useState(0)
  
const dec=()=>{
  if(count>0){
    setCount(count-1)
  }
}

  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>{setCount(count+1)}}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button"  onClick={dec}>-</button>
    </div>
  );
};

export default Counter;
