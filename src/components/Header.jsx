import React, { useState } from 'react';
import logo_cropped from '@assets/logo_nt.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router';

const navlinks = ['Buy', 'Rent', 'For Owners', 'About us'];

function Header() {
  const [active, setActive] = useState(false);
  const handleActiveChange = () => {
    setActive((prev) => !prev);
  };
  // TODO Add features :
  // When user is scrolling up, the header hides, when scrolling down, the header slides from top to it's position
  // Currently I have 4 Navlinks, when they will appear, I want the first to start animation from left to right
  // The next one should be slightly delayed
  return (
    <div className="top-0 right-0 left-0 z-10 fixed bg-transparent px-3 pt-4">
      <header className="flex justify-between items-center bg-primary/20 px-10 py-2.5 border border-white/15 rounded-full">
        <div className="flex flex-nowrap justify-start items-center gap-x-2.5">
          <img className="w-auto h-10" src={logo_cropped} alt="" />
          {/* <img className="w-auto h-7" src={logo_text} alt="" /> */}
          <span className="font-medium text-white text-lg tracking-widest">B.S.I</span>
        </div>
        <div className="">
          <RxHamburgerMenu
            onClick={handleActiveChange}
            className="font-bold text-white text-3xl cursor-pointer"
          />
        </div>
        <div
          className={`w-full h-screen absolute  ${
            active ? 'top-0' : '-top-[650px] -translate-y-[50%]'
          } transition-all duration-500 ease-out left-0 z-20 bg-primary overflow-hidden p-6 flex flex-col items-stretch justify-between`}
        >
          <div>
            <div className="flex justify-between items-center w-full">
              <img className="w-auto h-10" src={logo_cropped} alt="" />
              <IoClose
                onClick={handleActiveChange}
                className="text-white text-3xl cursor-pointer"
              />
            </div>
            <nav className="flex flex-col gap-y-2 mt-[20%] font-semibold text-white text-5xl">
              {navlinks.map((link) => {
                return (
                  <Link key={link} className="uppercase">
                    {link}
                  </Link>
                );
              })}
            </nav>
          </div>
          <button className="bg-gold-600 py-4 rounded-lg font-bold text-primary text-lg cursor-pointer">
            BOOK A CALL
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
