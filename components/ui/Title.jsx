import React from "react";

const Title = ({ children, addClass }) => {
  return (
    <div className={`${addClass} font-dancing font-bold text-[40px]`}>
      {children}
    </div>
  );
};

export default Title;
