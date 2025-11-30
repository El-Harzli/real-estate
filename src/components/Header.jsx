import { useEffect, useState } from 'react';
import logo_cropped from '@assets/logo_nt.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import MainMenu from '@widget/MainMenu';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const handleActiveChange = () => {
    setMenuActive((prev) => !prev);
  };

  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // hide on scroll down, show on scroll up
      if (current > lastScroll && current > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScroll(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  // TODO Add features :
  // When user is scrolling up, the header hides, when scrolling down, the header slides from top to it's position
  // Currently I have 4 Navlinks, when they will appear, I want the first to start animation from left to right
  // The next one should be slightly delayed
  return (
    <>
      <header className={`flex items-center justify-between fixed z-10 top-0 left-0 right-0 mt-4 mx-3 px-7 py-3 bg-black/30 backdrop-blur-md border border-white/15 rounded-full transition-transform ${hidden ? '-translate-y-[150%]' : 'translate-y-0'}`}>
        <div className="flex flex-nowrap justify-start items-center gap-x-2.5">
          <img className="w-auto h-10" src={logo_cropped} alt="" />
          <span className="font-medium text-white text-lg tracking-widest">B.S.I</span>
        </div>
        <div className="">
          <RxHamburgerMenu
            onClick={handleActiveChange}
            className="font-bold text-white text-3xl cursor-pointer"
          />
        </div>
      </header>

      <MainMenu menuActive={menuActive} handleActiveChange={handleActiveChange} />
    </>
  );
}

export default Header;
