import React from 'react';

const propertyTypes = [
  { label: 'All Property types', value: 'all' },
  { label: 'Appartment', value: 'appartment' },
  { label: 'Villa', value: 'villa' },
  { label: 'Bureau', value: 'bureau' },
  { label: 'Commercial', value: 'commercial' },
];

function SecondSection() {
  return (
    <div className="flex flex-col items-center w-fit">
      <header className="flex items-center">
        <div className="bg-gold-500 text-black">Buy</div>
        <div className="bg-gold-500 text-black">Rent</div>
      </header>
      <div className="bg-neutral-300/20 backdrop-blur-lg px-4 py-2 rounded-lg">
        <select
          className="bg-neutral-300/20 backdrop-blur-md px-4 py-1 border border-neutral-200/20 rounded-md text-white"
          name=""
          id=""
        >
          {propertyTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SecondSection;
