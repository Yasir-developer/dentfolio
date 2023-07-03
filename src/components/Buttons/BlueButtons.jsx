import React from "react";

const BlueButtons = ({
  buttonText,
  className,
  btnStyle,
  onClick,
  type,
  onSubmit,
}) => {
  return (
    <button
      className={`bg-custom-blue text-white px-4 py-2 rounded focus:outline-none ${className}`}
      onClick={onClick}
      type={type}
      onSubmit={onSubmit}
    >
      {buttonText}
    </button>
  );
};

export default BlueButtons;
