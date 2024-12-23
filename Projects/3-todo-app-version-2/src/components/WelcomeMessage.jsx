import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
const WelcomeMessage = () => {
  const todoItemsFromContext = useContext(TodoItemsContext);
  return todoItemsFromContext.todoItems.length === 0 && <p> Enjoy your Day</p>;
};
export default WelcomeMessage;
