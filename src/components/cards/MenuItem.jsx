import React from 'react';
import { FaChevronRight } from 'react-icons/fa6';

function MenuItem({ handleItemClick, label }) {
  return (
    <li
      onClick={() => handleItemClick(label)}
      className="w-full flex items-center justify-between bg-neutral-400/8 px-6 py-3 cursor-pointer group"
    >
      <span className="text-white  group-hover:text-white/60 duration-300  cursor-pointer uppercase font-medium">
        {label}
      </span>
      <span className="text-white">
        <FaChevronRight />
      </span>
    </li>
  );
}

export default MenuItem;
