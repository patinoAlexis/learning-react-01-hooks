import { TodoAppList } from "./TodoAppList.jsx";
import { TodoAppFormAdd } from "./TodoAppFormAdd.jsx";
import { useTodo } from "./useTodo.jsx";

export const TodoApp = () => {
  const { todoList, handleAddItem, handleToggleItem, deleteFromList } =
    useTodo();

  return (
    <>
      <h1 className="tw-text-3xl">
        TodoApp ({10}), <small>pendientes: {2}</small>
      </h1>
      <div className="row">
        <div className="col-6 tw-m-2">
          <TodoAppList
            list={todoList}
            deleteFunc={deleteFromList}
            onToggleItem={handleToggleItem}
          ></TodoAppList>
        </div>
        <div className="col-5">
          <TodoAppFormAdd addItem={handleAddItem}></TodoAppFormAdd>
        </div>
      </div>
    </>
  );
};
