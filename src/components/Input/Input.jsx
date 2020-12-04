import './Input.css';

function Input({
  name,
  type,
  placeholder,
  value,
  onChange = () => {},
}) {
  return (
    <input
      autoComplete="off"
      required
      type={type || 'text'}
      value={value}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
}

export default Input;
