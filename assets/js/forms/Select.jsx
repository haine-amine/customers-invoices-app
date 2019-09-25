import React from "react";

const Select = ({ name, label, error = "", onChange, value, children }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        className={"form-control" + (error && " is-invalid")}
        onChange={onChange}
        value={value}
      >
        {children}
      </select>
      <p className="invalid-feedback">{error}</p>
    </div>
  );
};

export default Select;
