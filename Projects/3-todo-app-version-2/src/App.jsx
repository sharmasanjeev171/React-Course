import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/todoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

import "./App.css";

function App() {
  return (
    <TodoItemsContextProvider>
      <center>
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMessage />
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
