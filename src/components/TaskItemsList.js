import React, { useContext, useState, useMemo } from "react";
import { TasksContext } from "../context/TasksContext";
import { Item } from "./Item";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

export const TaskItemsList = () => {
  const { taskItems } = useContext(TasksContext);
  const [search, setSearch] = useState([]);
  const [isTaskCompleted, setIsTaskCompleted] = useState("Pending");

  const listedItems = useMemo(() => {
    if (!search) return taskItems;

    return taskItems.filter((taskItem) => {
      return (
        JSON.stringify(taskItem.taskBody)
          .toLocaleLowerCase()
          .includes(search.toString().toLowerCase()) ||
        JSON.stringify(taskItem.taskOwner)
          .toLocaleLowerCase()
          .includes(search.toString().toLowerCase()) ||
        taskItem.isTaskCompleted === search
      );
    });
  }, [search, taskItems]);

  const checkBoxHandle = (e) => {
    setSearch(e.target.checked);
    if (search) {
      setIsTaskCompleted("Done");
    } else {
      setIsTaskCompleted("Pending");
    }
  };
  return (
    <React.Fragment>
      <div align="center">
        <TextField
          placeholder="Search by user..."
          onChange={(e) => setSearch(e.target.value)}
          id="outlined-basic"
          label="Search User "
          variant="outlined"
        />
        {/* <input
          className="task-input"
          type="text"
          placeholder="Search by user..."
          onChange={(e) => setSearch(e.target.value)}
        /> */}
        <TextField
          placeholder="Search an item..."
          onChange={(e) => setSearch(e.target.value)}
          id="outlined-basic"
          label="Search Task"
          variant="outlined"
        />
        {/* <input
          type="text"
          className="task-input"
          placeholder="Search an item..."
          onChange={(e) => setSearch(e.target.value)}
        /> */}
        <Checkbox
          onChange={checkBoxHandle}
          defaultChecked
          indeterminate
          inputProps={{ "aria-label": "indeterminate checkbox" }}
        />
        {/* <input type="checkbox" onChange={checkBoxHandle} />  */}
        Filter Completed Tasks
      </div>
      <br />
      <hr />
      <br />

      {taskItems.length ? (
        listedItems.length ? (
          <table>
            <tbody>
              <tr>
                <td className="table-head">Task</td>
                <td className="table-head">User</td>
                <td className="table-head">Completed</td>
              </tr>
              {listedItems.map((taskItem) => {
                return <Item taskItem={taskItem} key={taskItem.id} />;
              })}
            </tbody>
          </table>
        ) : (
          <table>
            <tbody>
              <tr>
                <td className="table-head">Task</td>
                <td className="table-head">User</td>
                <td className="table-head">Completed</td>
              </tr>
              {taskItems.map((taskItem) => {
                return <Item taskItem={taskItem} key={taskItem.id} />;
              })}
            </tbody>
          </table>
        )
      ) : (
        <div className="no-tasks">No any records</div>
      )}
    </React.Fragment>
  );
};
