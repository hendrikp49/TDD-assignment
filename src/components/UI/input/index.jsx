const Input = (props) => {
  const { type } = props;
  return <>{type === "textarea" ? <textarea {...props} /> : <input></input>}</>;
};

export default Input;
