import { useContext, useRef } from "react";
import { IoAdd } from "react-icons/io5";
import { todoitemscontext } from "../store/todo-itemstore";

function AddTodo({ onNewitem }) {
  const { addnewitem } = useContext(todoitemscontext);
  const todonameelement = useRef();
  const duedateelement = useRef();

  const handleaddbutnclick = (event) => {
    event.preventDefault();
    const todoname = todonameelement.current.value;
    const tododate = duedateelement.current.value;
    todonameelement.current.value = "";
    duedateelement.current.value = "";
    addnewitem(todoname, tododate);
  };

  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleaddbutnclick}>
        <div className="col-6">
          <input
            type="text"
            ref={todonameelement}
            placeholder="Enter todo here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={duedateelement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            <IoAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
