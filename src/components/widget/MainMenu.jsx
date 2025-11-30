import React, { useEffect, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import logo_cropped from '@assets/logo_nt.png';

import MenuActions from '@layout/MenuActions';
import MenuNavigations from '@layout/MenuNavigations';

function MainMenu({ menuActive, handleActiveChange }) {
  const menuHeaderRef = useRef();
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (menuHeaderRef.current) {
      setHeaderHeight(menuHeaderRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuActive ? 'hidden' : 'visible';
  }, [menuActive]);

  return (
    // TODO change the fixed -top position and make it dynamic using ref
    // TODO DONE
    <div
      className={`w-full h-dvh fixed  ${
        menuActive ? 'top-0' : '-top-[100dvh] '
      } transition-all duration-500 ease-out left-0 z-20 bg-primary flex flex-col`}
    >
      <div ref={menuHeaderRef} className="p-6 flex justify-between items-center w-full">
        <img className="w-auto h-10" src={logo_cropped} alt="" />
        <IoClose onClick={handleActiveChange} className="text-white text-3xl cursor-pointer" />
      </div>
      <MenuActions headerHeight={headerHeight} />
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

      <div className="w-full px-6 py-3 ">
        {/* <button className="bg-accent-300 w-full py-4 uppercase rounded-md font-bold text-white text-lg cursor-pointer">
          Get in Touch
        </button> */}
        <button className="bg-[#6A2c2E] text-[#F0E5D8] w-full py-4 uppercase rounded-md font-bold  text-lg cursor-pointer">
          Get in Touch
        </button>
      </div>
    </div>
  );
}

export default MainMenu;
