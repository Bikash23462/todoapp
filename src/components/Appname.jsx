import styles from "./Appname.module.css";

function Appname() {
  return (
    <h1
      style={{ display: "grid", placeItems: "center" }}
      className={styles.todoheading}
    >
      TODO APP
    </h1>
  );
}

export default Appname;
