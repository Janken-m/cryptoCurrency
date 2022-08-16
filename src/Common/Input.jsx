import React from "react";

function Input({ name, value, label, id, onChange, type, error }) {
  return (
    <div className="mb-2 ms-2">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        className="form-control"
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        type={type}
      />
      {error && <div className="alert alert-danger"> {error} </div>}
    </div>
  );
}

export default Input;
