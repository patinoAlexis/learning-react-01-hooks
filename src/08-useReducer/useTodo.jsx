import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "./todoReducer.js";

const initTodoList = () => {
  return JSON.parse(localStorage.getItem("todosList") || "[]");
};

export const useTodo = () => {
  const [todoList, dispatchTodoList] = useReducer(
    todoReducer,
    [], // JSON.parse(localStorage.getItem("todosList") || "[]")
    initTodoList,
  );
  const [pendingToDo, setPendingToDo] = useState(0);
  useEffect(() => {
    localStorage.setItem("todosList", JSON.stringify(todoList || []));
    setPendingToDo(todoList.filter((el) => !el.done).length);
  }, [todoList]);

  const deleteFromList = (item) => {
    dispatchTodoList({
      type: "delete-todo",
      payload: item.id,
    });
  };
  const handleAddItem = (item) => {
    dispatchTodoList({
      type: "add-todo",
      payload: item,
    });
  };
  const handleToggleItem = (id) => {
    dispatchTodoList({
      payload: id,
      type: "finish-todo",
    });
  };

  return {
    todoList,
    handleAddItem,
    handleToggleItem,
    deleteFromList,
    pendingToDo,
  };
};
