import React, { useEffect, useRef, useState } from 'react';
import { FiHome } from 'react-icons/fi';
import { LuContact } from 'react-icons/lu';
import { GrLanguage } from 'react-icons/gr';
import MenuActionCard from '@cards/MenuActionCard';

import LanguagePanel from '@widget/LanguagePanel';

function MenuActions({ headerHeight }) {
  const [languageModelActive, setLanguageModelActive] = useState(false);

  const handleLanguageModal = () => {
    setLanguageModelActive((prev) => !prev);
  };

  return (
    <div className="relative px-6 pb-3  w-full flex items-center justify-stretch flex-nowrap gap-1">
      <MenuActionCard Icon={FiHome} label="Home" />
      <MenuActionCard Icon={LuContact} label="Contact Us" />
      <MenuActionCard Icon={GrLanguage} label="Language" handleOnClick={handleLanguageModal} />
      <LanguagePanel
        languageModelActive={languageModelActive}
        setLanguageModelActive={setLanguageModelActive}
        headerHeight={headerHeight}
      />
    </div>
  );
}

export default MenuActions;
