import styles from "./Welcomemesage.module.css";
import { useContext } from "react";
import { todoitemscontext } from "../store/todo-itemstore";

const Welcomemesaage = () => {
  const contextobj = useContext(todoitemscontext);
  const todoitems = contextobj.todoitems;

  return (
    todoitems.length == 0 && <p className={styles.welcome}>Enjoy your day</p>
  );
};

export default Welcomemesaage;
