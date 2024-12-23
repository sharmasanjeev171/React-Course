import { useContext, useRef } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const name = useRef("");
  const dueDate = useRef(new Date().toLocaleDateString());
  const { addNewItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <form
        className="row row1"
        onSubmit={(event) => addNewItem(event, name, dueDate)}
      >
        <div className="col-sm-4">
          <input type="text" placeholder="Enter TODO Here" ref={name}></input>
        </div>
        <div className="col-sm-4">
          <input type="date" ref={dueDate} />
        </div>
        <div className="col-sm-2" style={{ flex: "0 0" }}>
          <button className="btn btn-success button1">
            <IoMdAddCircleOutline height={40} width={40} />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
