import React from "react";

const Input = (props) => {
  const { type, touched, errorMessage, placeholder, ...inputProps } = props;
  return (
    <div className="w-full">
      <label className="relative block cursor-text w-full">
        <input
          type={type}
          className={`w-full h-14 border outline-none px-4 peer rounded-lg 
          ${type !== "datetime-local" && "pt-2"}
          ${touched && errorMessage ? "border-danger" : "border-primary"}
          `}
          required
          {...inputProps}
        />
        {type === "datetime-local" ? (
          ""
        ) : (
          <span
            className={`absolute flex items-center h-full top-0 left-0 px-4 text-sm peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs transition-all  
            ${touched && errorMessage ? "!h-7 !text-xs" : ""}
          `}
          >
            {placeholder}
          </span>
        )}
      </label>
      {touched && <span className="text-danger text-sm">{errorMessage}</span>}
    </div>
  );
};

export default Input;
