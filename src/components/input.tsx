import React from "react";


interface inputTypes{
    title: string
    value: string
    onChange: (value: string) => void;
}


const Input = ({title, value, onChange}: inputTypes) => {
  return (
    <>
      <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            {title}
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </>
  );
};

export default Input;
