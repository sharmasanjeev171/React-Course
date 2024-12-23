import { useState, useReducer } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/todoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

import "./App.css";

const todoItemsReducer = (currToDoItems, action) => {
  let newToDoItems = currToDoItems;
  if (action.type === "NEW_ITEM") {
    newToDoItems = [
      ...currToDoItems,
      {
        name: action.payload.name,
        dueDate: action.payload.dueDate,
      },
    ];
    return newToDoItems;
  } else if (action.type === "DELETE_ITEM") {
    newToDoItems = currToDoItems.filter(
      (item) => item.name !== action.payload.name
    );
    return newToDoItems;
  }
  return newToDoItems;
};

function App() {
  // const [todoItems, setToDoItems] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  const addNewItem = (event, name, dueDate) => {
    const itemName = name.current.value;
    const itemDueDate = dueDate.current.value;
    event.preventDefault();
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        name: itemName,
        dueDate: itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
    name.current.value = "";
    dueDate.current.value = "";
  };
  const deleteItem = (itemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        name: itemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center>
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMessage />
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
