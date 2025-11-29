import React, { useEffect, useRef, useState } from 'react';
import { FiHome } from 'react-icons/fi';
import { LuContact } from 'react-icons/lu';
import { GrLanguage } from 'react-icons/gr';
import MenuActionCard from '@cards/MenuActionCard';
import { FaChevronLeft } from 'react-icons/fa6';
import { PiCheckBold } from 'react-icons/pi';

const languages = ['Arabic', 'English', 'French'];

function MenuActions() {
  const languageParentContainerRef = useRef();
  const [ParentContainerHeight, setParentContainerHeight] = useState(0);

  const [languageModelActive, setLanguageModelActive] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('English');

  useEffect(() => {
    if (languageParentContainerRef.current) {
      setParentContainerHeight(languageParentContainerRef.current.offsetHeight);
    }
    return () => {};
  }, []);

  const handleLanguageModal = () => {
    setLanguageModelActive((prev) => !prev);
  };

  const handleActiveLanguage = (value) => {
    setActiveLanguage(value);
  };

  return (
    <div
      ref={languageParentContainerRef}
      className="relative mt-3 px-6 py-3  w-full flex items-center justify-stretch flex-nowrap gap-1"
    >
      <MenuActionCard Icon={FiHome} label="Home" />
      <MenuActionCard Icon={LuContact} label="Contact Us" />
      <MenuActionCard Icon={GrLanguage} label="Language" handleOnClick={handleLanguageModal} />

      <div
        className={`bg-black p-6 w-full absolute right-0 transition duration-500 ease-in-out ${
          languageModelActive ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          top: ParentContainerHeight,
          height: `calc(100vh - ${ParentContainerHeight}px)`,
        }}
      >
        <span
          onClick={() => {
            setLanguageModelActive(false);
          }}
          className="text-white flex items-center justify-start gap-1 cursor-pointer"
        >
          <FaChevronLeft className="text-sm" />
          <span className="font-light ">Back</span>
        </span>
        <div className="w-full flex flex-col gap-y-1 mt-3">
          {languages.map((language) => {
            return (
              <div
                onClick={() => handleActiveLanguage(language)}
                className="w-full flex items-center justify-between bg-neutral-400/5 px-6 py-3 cursor-pointer group"
                key={language}
              >
                <span
                  className={`text-lg ${
                    activeLanguage === language
                      ? 'text-white'
                      : 'text-white/60 group-hover:text-white'
                  }`}
                >
                  {language}
                </span>
                {activeLanguage === language ? <PiCheckBold className="text-white" /> : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MenuActions;
