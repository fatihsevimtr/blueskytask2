import React, { createContext, useState,useEffect } from "react";
import { v1 as uuid } from "uuid";

export const TasksContext = createContext();

const TasksContextProvider = (props) => {
  const initData = JSON.parse(localStorage.getItem("taskItems")) || [];
  // const initContent = [
  //   {
  //     id: 1,
  //     taskBody: "Create a student managment system for Green Light Academy",
  //     taskOwner: "Fatih",
  //     isTaskCompleted: false,
  //   },
  //   {
  //     id: 2,
  //     taskBody: "Create a users system for Western Australia University",
  //     taskOwner: "Jhon",
  //     isTaskCompleted: false,
  //   },
  //   {
  //     id: 3,
  //     taskBody: "Update DB for BIOCom",
  //     taskOwner: "Kely",
  //     isTaskCompleted: true,
  //   },
  // ];

  const [editItem, setEditItem] = useState(null);
  // const [taskItems, setTaskItems] = useState(initContent);
  const [taskItems, setTaskItems] = useState(initData);
  const [showPanel, setShowPanel] = useState(false);

  const Provider = TasksContext.Provider;

  useEffect(()=>{
    localStorage.setItem('taskItems',JSON.stringify(taskItems))
  },[taskItems]);
  const addTask = (taskBody, taskOwner, isTaskCompleted) => {
    setTaskItems([
      ...taskItems,
      {
        id: uuid(),
        taskBody: taskBody,
        taskOwner: taskOwner,
        isTaskCompleted: isTaskCompleted,
      },
    ]);
  };

  const removeTask = (id) => {
    setTaskItems(taskItems.filter((taskItem) => taskItem.id !== id));
  };
  const clearTable = () => {
    setTaskItems([]);
   
  };

  const findItem = (id) => {
    const item = taskItems.find((taskItem) => taskItem.id === id);
    
    setEditItem(item);
    setShowPanel(!showPanel)
  };

  const editTask = (id, taskBody, taskOwner, isTaskCompleted) => {
    const newTask = taskItems.map((taskItem) =>
      taskItem.id === id
        ? { id, taskBody, taskOwner, isTaskCompleted }
        : taskItem
    );

    setTaskItems(newTask);
    setEditItem(null)
  };

  return (
    <Provider
      value={{
        taskItems,
        addTask,
        removeTask,
        clearTable,
        findItem,
        editTask,
        editItem,
        showPanel
      }}
    >
      {props.children}
    </Provider>
  );
};

export default TasksContextProvider;
