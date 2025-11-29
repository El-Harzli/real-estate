import React, { useState } from 'react';
import MenuItem from '@cards/MenuItem';


const navlinks = ['Buy a Property', 'Rent a Property', 'Manage my Property', 'Services'];
const propertyTypes = {
  'Buy a Property': ['Appartment', 'Villa', 'Office', 'Commercial'],
  'Rent a Property': ['Appartment', 'Villa', 'Office', 'Commercial'],
  'Manage my Property': ['For Sale', 'For Rent'],
};

function MenuNavigations() {
  const [activeFilter, setActiveFIlter] = useState(null);

  const handleItemClick = (value) => {
    setActiveFIlter(value);
  };
  return (
    <nav className="w-full mt-6 flex flex-col gap-y-1">
      {/* {navlinks.map((link) => {
                return <MenuItem handleItemClick={handleItemClick} key={link} label={link} />;
              })} */}
      {navlinks.map((link) => {
        return <MenuItem handleItemClick={handleItemClick} key={link} label={link} />;
      })}

      {Object.entries(propertyTypes)
        .map((key) => key[0])
        .map((link) => (
          <MenuItem handleItemClick={handleItemClick} key={link} label={link} />
        ))}
    </nav>
  );
}

export default MenuNavigations;
