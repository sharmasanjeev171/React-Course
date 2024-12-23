function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "13 / 08/ 2024";
  return (
    <div className="container">
      <div className="row row1">
        <div className="col-sm-4">{todoName}</div>
        <div className="col-sm-4">{todoDate}</div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-danger button1">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
