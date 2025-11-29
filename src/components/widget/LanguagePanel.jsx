import React, { useState } from 'react';

import { FaChevronLeft } from 'react-icons/fa6';
import { PiCheckBold } from 'react-icons/pi';

const languages = ['Arabic', 'English', 'French'];

function LanguagePanel({ languageModelActive, setLanguageModelActive, headerHeight }) {
  const [activeLanguage, setActiveLanguage] = useState('English');

  const handleActiveLanguage = (value) => {
    setActiveLanguage(value);
  };
  return (
    <div
      className={`bg-black p-6 w-full absolute right-0 transition duration-500 ease-in-out ${
        languageModelActive ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{
        top: 0,
        height: `calc(100dvh - ${headerHeight}px)`,
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
  );
}

export default LanguagePanel;
