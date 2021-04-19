import React, { useState,useContext } from "react";
import { TaskCreation } from "./TaskCreation";
import { TasksContext } from "../context/TasksContext";

const ShowEditPanel = () => {
  const [isAdding, setIsAdding] = useState(false);

  const [addButtonText, setAddButtonText] = useState("Add Item");

  const {showPanel} = useContext(TasksContext)

  const clickHandle = () => {
    setIsAdding(!isAdding);
    if (!isAdding) {
      setAddButtonText("Cancel");
    } else {
      setAddButtonText("Add Item");
    }
  };
  return (
    <div>
      <button onClick={clickHandle} className="btn add-task-btn">
        {addButtonText}
      </button>
      <br />
      <hr />
      <br />
      {isAdding ? <TaskCreation /> :(showPanel && <TaskCreation />)}
    </div>
  );
};

export default ShowEditPanel;
