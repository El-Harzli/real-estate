import React from 'react';

function Badges({ Icon, label, count }) {
  return (
    <span className="flex justify-start items-center gap-x-3 bg-transparent backdrop-blur-[2px] px-3 py-2 border border-white/25 rounded-lg">
      <div className="bg-gold-500/20 p-2 rounded-full">
        <Icon className="text-gold-500 text-sm" />
      </div>
      <div className="flex flex-col gap-0.5">
        <div className="font-medium text-white text-xs">{count}+</div>
        <div className="font-light text-white/80 text-xs whitespace-nowrap">{label}</div>
      </div>
    </span>
  );
}

export default Badges;
