const Button = (props) => {
  const { onClick, children } = props;
  const handleClick = () => onClick();

  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
