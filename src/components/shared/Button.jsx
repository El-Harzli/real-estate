import React from 'react';

function Button({ label, custom, handleOnClick }) {
  return (
    <button
      onClick={handleOnClick}
      className={`bg-accent-500 hover:bg-accent-400 font-bold px-7 py-3 rounded-xl text-white cursor-pointer transition duration-300  ${
        custom !== '' ? '' : custom
      }  `}
    >
      {label}
    </button>
  );
}

export default Button;
