import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./todoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <div id="abc" className={styles.itemcontainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
