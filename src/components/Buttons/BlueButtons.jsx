import React from "react";

const BlueButtons = ({ buttonText, className, btnStyle }) => {
  return (
    <button
      className={`bg-custom-blue text-white px-4 py-2 rounded focus:outline-none ${className}`}
    >
      {buttonText}
    </button>
  );
};

export default BlueButtons;
