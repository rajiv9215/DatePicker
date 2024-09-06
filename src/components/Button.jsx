import React from "react";

function Button({ value, setSelectedOption }) {
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <button
      onClick={() => handleOptionChange(value)}
      className="px-4 py-2 rounded-3xl mx-6 focus:bg-zinc-500"
    >
      {value}
    </button>
  );
}

export default Button;
