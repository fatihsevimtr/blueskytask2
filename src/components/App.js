import "../App.css";
import { TaskItemsList } from "./TaskItemsList";
import TasksContextProvider from "../context/TasksContext";
import Header from "./Header";
import React from "react";
import ShowEditPanel from "./ShowEditPanel";


const App = () => {

  fetch('api/users')
  .then(response => response.json())
  .then(data => console.log(data));

  fetch('api/todos')
  .then(response => response.json())
  .then(data => console.log(data)); 

  return (
    <TasksContextProvider>
      <div className="container">
        <div className="items-body">
          <div className="main">
            <Header />
    
            <br />
            <br />
            <hr /> <hr />
            <br />
            <TaskItemsList />
            <ShowEditPanel />
          </div>
        </div>
      </div>
    </TasksContextProvider>
  );
};

export default App;
