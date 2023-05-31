import PropTypes from "prop-types";

function Button({
  children,
  primary,
  seconndary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  return <button>{children}</button>;
}

export default Button;
