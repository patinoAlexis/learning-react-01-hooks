import PropTypes from "prop-types";

export const TodoAppItem = ({ item, deleteFunc, onToggleItem }) => {
  return (
    <li className="list-group-item tw-justify-between tw-flex tw-items-center tw-w-full">
      <span
        className={`tw-self-center ${item.done && "tw-line-through"}`}
        onClick={() => onToggleItem(item.id)}
      >
        {item.description}
      </span>
      <button className="btn btn-danger" onClick={() => deleteFunc(item)}>
        Borrar
      </button>
    </li>
  );
};

TodoAppItem.propTypes = {
  item: PropTypes.object.isRequired,
  deleteFunc: PropTypes.func.isRequired,
};
