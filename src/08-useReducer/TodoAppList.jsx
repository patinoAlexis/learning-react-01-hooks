import { TodoAppItem } from "./TodoAppItem.jsx";
import PropTypes from "prop-types";

export const TodoAppList = ({ list, deleteFunc, onToggleItem }) => {
  return (
    <ul className="list-group">
      {list.map((item) => (
        <TodoAppItem
          key={item.id}
          item={item}
          deleteFunc={deleteFunc}
          onToggleItem={onToggleItem}
        ></TodoAppItem>
      ))}
    </ul>
  );
};

TodoAppList.propTypes = {
  list: PropTypes.array.isRequired,
  deleteFunc: PropTypes.func.isRequired,
  onToggleItem: PropTypes.func.isRequired,
};
