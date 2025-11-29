import React from 'react';

function Badges({ Icon, label, count }) {
  return (
    <span className="flex justify-start items-center gap-x-2 bg-transparent backdrop-blur-[2px] px-3 py-1.5 border border-white/25 rounded-lg">
      <div className="bg-accent-50/20 p-1.5 rounded-full">
        <Icon className="text-accent-50 text-sm" />
      </div>
      <div className="flex flex-col gap-0.5">
        <div className="font-medium text-white text-[10px] text-center pe-1">{count}+</div>
        <div className="font-light text-white/80 text-[8px] whitespace-nowrap text-center">
          {label}
        </div>
      </div>
    </span>
  );
}

export default Badges;
