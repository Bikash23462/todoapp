import { useContext } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { todoitemscontext } from "../store/todo-itemstore";

function Todoitem({ todoname, tododate }) {
  const { deleteitem } = useContext(todoitemscontext);

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => deleteitem(todoname)}
          >
            <MdOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
