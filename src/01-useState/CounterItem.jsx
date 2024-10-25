import PropTypes from "prop-types";

export const CounterItem = ({ counter, changeCounter }) => {
  return (
    <span className="tw-flex tw-items-center tw-space-x-3">
      <h2>First counter: {counter}</h2>
      <button className="btn btn-primary" onClick={() => changeCounter(1)}>
        +1
      </button>
    </span>
  );
};

CounterItem.propTypes = {
  counter: PropTypes.number.isRequired,
  changeCounter: PropTypes.func.isRequired,
};
