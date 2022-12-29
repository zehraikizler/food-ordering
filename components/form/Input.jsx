import React from "react";

const Input = () => {
  return (
    <div className="w-full">
      <label className="relative block cursor-text w-full">
        <input
          type="text"
          className="w-full h-14 border border-primary outline-none px-4 pt-2 peer"
          required
        />
        <span className="absolute flex items-center h-full top-0 left-0 px-4 text-sm peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs transition-all">
          Email
        </span>
      </label>
    </div>
  );
};

export default Input;
