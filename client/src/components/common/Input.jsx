const Input = ({ type, name, id, ...rest }) => {
  return <input type={type} name={name} id={id} {...rest} />;
};

export default Input;
