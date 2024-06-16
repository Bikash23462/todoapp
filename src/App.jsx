import AddTodo from "./components/AddTodo";
import Appname from "./components/Appname";
//import Todoitem1 from "./components/Todoitem1";
//import Todoitem2 from "./components/Todoitem2";
import "./App.css";
//import Todoitem from "./components/Todoitem";
import Todoitems from "./components/Todoitems";
import { useReducer, useState } from "react";
import Welcomemesaage from "./components/Welcomemessage";
import { todoitemscontext } from "./store/todo-itemstore";

const todoitemreducer=(currtodoitem,action)=>{
  if(action.type==='NEW_ITEM'){
      const newtodoitems=[
        ...currtodoitem,{name: action.payload.itemname, duedate: itemdate}
      ]
  }
  else if(action.type==='DELETE_ITEM'){

  }
  return [];
}

function App() {
  //const [todoitems, settodoitems] = useState([]);
  const [todoitems,dispatchtodoitems]=useReducer(todoitemreducer,[]);

  const addnewitem = (itemname, itemdate) => {
    //console.log(`new item added ${itemname},${itemdate}`);
    const newitemaction={
      type:"NEW_ITEM",
      payload:{
        itemname,
        itemdate
      }

    };

    dispatchtodoitems(newitemaction);

   /* settodoitems((currvalue) => [
      ...currvalue,
      { name: itemname, duedate: itemdate },
    ]);*/
  };

  const deleteitem = (todoitemname) => {
    const newtodoitems = todoitems.filter((item) => item.name != todoitemname);
    settodoitems(newtodoitems);
    //console.log(`item deleted:${todoitemname}`);
  };

  const defaulttodoitems = [{ name: "buy ghee", duedate: "today" }];

  return (
    <todoitemscontext.Provider
      value={{
        todoitems: todoitems,
        addnewitem,
        deleteitem,
      }}
    >
      <div className="todo-container">
        <Appname></Appname>
        <AddTodo></AddTodo>
        <Welcomemesaage></Welcomemesaage>
        <Todoitems></Todoitems>
      </div>
    </todoitemscontext.Provider>
  );
}

export default App;
