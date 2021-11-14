export const Input = (props) => {
  const handleChange = (event) => {
    props.setValue(event.target.value);
  };
  return (
    <div className="form-group m-3">
      <label for="exampleInputEmail1">{props.label}</label>
      <input
        type={props.type}
        value={props.value}
        className="form-control"
        aria-describedby="emailHelp"
        onChange={handleChange}
      />
    </div>
  );
};
