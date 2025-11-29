import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import logo_cropped from '@assets/logo_nt.png';

import MenuActions from '@layout/MenuActions';
import MenuNavigations from '@layout/MenuNavigations';

function MainMenu({ menuActive, handleActiveChange }) {
  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [menuActive]);

  return (
    <div
      className={`w-full h-dvh absolute  ${
        menuActive ? 'top-0' : '-top-[650px] -translate-y-[50%]'
      } transition-all duration-500 ease-out left-0 z-20 bg-primary flex flex-col`}
    >
      <div className="px-6 pt-6 flex justify-between items-center w-full">
        <img className="w-auto h-10" src={logo_cropped} alt="" />
        <IoClose onClick={handleActiveChange} className="text-white text-3xl cursor-pointer" />
      </div>
      <MenuActions />
      <div className="flex-1 overflow-y-auto">
        <MenuNavigations />

        {/* // TODO This was the old navigations with big font size */}
        {/* <nav className="flex flex-col gap-y-2 mt-[20%] font-semibold text-white text-5xl">
              {navlinks.map((link) => {
                return (
                  <Link key={link} className="uppercase">
                    {link}
                  </Link>
                );
              })}
            </nav> */}
      </div>
      <div className="w-full px-6 py-2 ">
        <button className="bg-accent-300 w-full py-4 uppercase rounded-lg font-bold text-white text-lg cursor-pointer">
          Get in Touch
        </button>
      </div>
    </div>
  );
}

export default MainMenu;
