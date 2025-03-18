import PropTypes from "prop-types";
import { memo } from "react";

const ReactComponent = ({ value }) => {
  console.log("Rendering SmallTitle");
  return <small>{value}</small>;
};

ReactComponent.propTypes = {
  value: PropTypes.number.isRequired,
};
export const SmallTitle = memo(ReactComponent);
