import { useState } from 'react';
import logo_cropped from '@assets/logo_nt.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import MainMenu from '@widget/MainMenu';

function Header() {
  const [menuActive, setMenuActive] = useState(true);

  const handleActiveChange = () => {
    setMenuActive((prev) => !prev);
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
        <MainMenu menuActive={menuActive} handleActiveChange={handleActiveChange} />
      </header>
    </div>
  );
}

export default Header;
