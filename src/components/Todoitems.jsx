import { useContext } from "react";
import { todoitemscontext } from "../store/todo-itemstore";
import Todoitem from "./Todoitem";
import styles from "./Todoitems.module.css";

const Todoitems = () => {
  const { todoitems } = useContext(todoitemscontext);

  //console.log(todoitemfromcontext);

  return (
    <div className={styles.itemsContainer}>
      {todoitems.map((item) => (
        <Todoitem
          key={item.name}
          todoname={item.name}
          tododate={item.duedate}
        ></Todoitem>
      ))}
    </div>
  );
};

export default Todoitems;
