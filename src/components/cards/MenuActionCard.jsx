import React from 'react';

function MenuCard({ Icon, label, handleOnClick }) {
  return (
    <div onClick={handleOnClick} className="w-full flex flex-col items-center justify-center text-white bg-neutral-400/5 px-2 py-2 rounded-xs gap-2 hover:text-white/60 duration-300 cursor-pointer ">
      <span>{<Icon className=" md:text-lg mt-1" />}</span>
      <span className='text-sm font-medium'>{label}</span>
    </div>
  );
}

export default MenuCard;
