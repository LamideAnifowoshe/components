import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  const classes = className("px-3 py-1.5 border text-white", {
    "border-blue-500 bg-blue-500": primary,
    "border-gray-900 bg-gray-900": secondary,
    "border-green-500 bg-green-500": success,
    "border-yellow-400 bg-yellow-400": warning,
    "border-red-500 bg-red-500": danger,
  });

  return <button className={classes}>{children}</button>;
}

export default Button;
