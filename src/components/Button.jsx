import React from 'react';

function Button({ label, handleOnClick }) {
  return (
    <button
      onClick={handleOnClick}
      className="px-4 py-2 min-w-fit whitespace-nowrap rounded-lg bg-amber-500 text-matt text-lg  font-semibold cursor-pointer hover:bg-primary-400 transition duration-300"
    >
      {label}
    </button>
  );
}

export default Button;
