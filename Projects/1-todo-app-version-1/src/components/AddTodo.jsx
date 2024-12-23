function AddTodo() {
  return (
    <div className="container">
      <div className="row row1">
        <div className="col-sm-4">
          <input type="text" placeholder="Enter TODO Here"></input>
        </div>
        <div className="col-sm-4">
          <input type="date" />
        </div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-success button1">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
