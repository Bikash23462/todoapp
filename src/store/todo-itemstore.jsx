import { createContext } from "react";

export const todoitemscontext = createContext({
  todoitems: [],
  addnewitem: () => {},
  deleteitem: () => {},
});
