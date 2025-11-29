import { useEffect, useState } from 'react';
import MenuItem from '@cards/MenuItem';
import { FaChevronLeft } from 'react-icons/fa6';

const navigations = [
  {
    label: 'Buy a Property',
    children: ['Apartment', 'Villa', 'Office', 'Commercial'],
  },
  {
    label: 'Rent a Property',
    children: ['Apartment', 'Villa', 'Office', 'Commercial'],
  },
  {
    label: 'Manage my Property',
    children: ['For Sale', 'For Rent'],
  },
  {
    label: 'Experiences',
    children: ['1 hour quadr', 'Touristic', 'Personal Driver', 'Loisir'],
  },
];

function MenuNavigations() {
  const [activeFilter, setActiveFilter] = useState(null);

  const handleItemClick = (value) => {
    setActiveFilter(value);
  };

  const activeNav = navigations.find((obj) => obj.label === activeFilter);

  return (
    <div className="relative w-full py-2 grow overflow-y-auto overflow-x-hidden">
      <nav
        className={`w-full  flex flex-col gap-y-1 absolute top-0 transition duration-500 ${
          activeFilter ? '-translate-x-full' : 'translate-x-0'
        } overflow-y-auto`}
      >
        {navigations.map((link) => {
          return (
            <MenuItem
              handleItemClick={() => handleItemClick(link.label)}
              key={link.label}
              label={link.label}
            />
          );
        })}
      </nav>
      <div
        className={`w-full flex flex-col gap-y-1 absolute top-0  transition duration-500 ${
          activeFilter ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {activeFilter && (
          <span
            onClick={() => {
              setActiveFilter(null);
            }}
            className="text-white flex items-center justify-start gap-1 cursor-pointer"
          >
            <FaChevronLeft className="text-sm" />
            <span className="font-light ">Back</span>
          </span>
        )}
        {activeFilter &&
          activeNav &&
          activeNav.children.map((child) => <MenuItem key={child} label={child} />)}
      </div>
    </div>
  );
}

export default MenuNavigations;
