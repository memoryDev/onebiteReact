const Button = ({ text, color, children }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
