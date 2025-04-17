import { useForm } from "../hooks/useForm.jsx";
import PropTypes from "prop-types";

export const TodoAppFormAdd = ({ addItem }) => {
  const { onInputChange, task, onReset } = useForm({
    task: "",
  });

  const onCreateNew = (event) => {
    event.preventDefault();
    addItem({ id: new Date().getTime() + 200, description: task, done: false });
    onReset();
  };
  return (
    <>
      <h4>Add</h4>
      <form onSubmit={onCreateNew}>
        <input
          type="text"
          className="form-control"
          placeholder="Tarea por hacer"
          name="task"
          onChange={onInputChange}
          value={task}
        />
        <button className="btn btn-primary tw-mt-4" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};

TodoAppFormAdd.propTypes = {
  addItem: PropTypes.func.isRequired,
};
