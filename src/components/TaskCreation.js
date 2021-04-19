import React, { useContext, useState, useEffect } from "react";
import { TasksContext } from "../context/TasksContext";
import Checkbox from '@material-ui/core/Checkbox';

export const TaskCreation = () => {
  const { addTask, clearTable, editItem, editTask } = useContext(TasksContext);

  const [taskBody, setTaskBody] = useState("");
  const [taskOwner, setTaskOwner] = useState("");
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  const changeHandleTaskBody = (event) => {
    setTaskBody(event.target.value);
  };
  const changeHandleUser = (event) => {
    setTaskOwner(event.target.value);
  };
  const submitHandle = (event) => {
    event.preventDefault();
    if (editItem === null) {
      addTask(taskBody, taskOwner, isTaskCompleted);
      setTaskBody("");
      setTaskOwner("");
    } else {
      editTask(editItem.id, taskBody, taskOwner, isTaskCompleted);
    }
  };
  const checkedHandle = (event) => {
    setIsTaskCompleted(event.target.value && !isTaskCompleted);
  };

  useEffect(() => {
    if (editItem !== null) {
      setTaskBody(editItem.taskBody);
      setTaskOwner(editItem.taskOwner);
      setIsTaskCompleted(editItem.isTaskCompleted);
   
    } else {
      setTaskBody("");
      setTaskOwner("");
      setIsTaskCompleted(false);
    }
  }, [editItem]);

  return (
    <form onSubmit={submitHandle} className="form">
      <div>
        <input
          onChange={changeHandleTaskBody}
          value={taskBody}
          type="text"
          className="task-input"
          placeholder="Add task..."
          required
        />
        <input
          onChange={changeHandleUser}
          value={taskOwner}
          type="text"
          className="task-input"
          placeholder="Add user..."
          required
        />

      <Checkbox
        defaultChecked
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
        onChange={checkedHandle}
          type="checkbox"
          value={isTaskCompleted}
      />
        {/* <input
          onChange={checkedHandle}
          type="checkbox"
          value={isTaskCompleted}
        /> */}
        <label>Completion</label>
      </div>
      <div>
        <button type="submit" className="btn add-task-btn">
        {editItem?'Update':'Save'}
        
        </button>
        <button onClick={clearTable} className="btn add-task-btn">
          Clear 
        </button>
    
      </div>
    </form>
  );
};
