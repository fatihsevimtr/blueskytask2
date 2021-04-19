import React,{useContext,useState} from "react";
import {TasksContext} from "../context/TasksContext"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

export const Item = ({ taskItem }) => {
  const {removeTask, findItem} = useContext(TasksContext)


  return (
    <React.Fragment>
      <tr align="center">
        <td align="justify">{taskItem.taskBody}</td>
        <td>{taskItem.taskOwner}</td>
        <td>{taskItem.isTaskCompleted ? "Done":"Pending"} </td>
        <td>
          <button onClick={()=>removeTask(taskItem.id)} className="btn-delete task-btn">
     
            <DeleteForeverIcon/>
          </button>

          <button onClick={()=>findItem(taskItem.id)} className="btn-edit task-btn">
             
           
            <EditIcon/>
            
          </button>
        </td>
      </tr>
    
    </React.Fragment>
  );
};
