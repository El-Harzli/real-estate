import React from 'react';
import hero_img from '@assets/hero_img.png';

import Badges from '@cards/Badges';

import { FiHome } from 'react-icons/fi';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { TfiMedallAlt } from 'react-icons/tfi';
import { useEffect } from 'react';
import Button from '@components/shared/Button';

function Hero() {
  const handleScroll = () => {};
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-[650px] lg:h-full">
      <div className="top-0 left-0 absolute bg-black/50 w-full h-full"></div>
      <img className="z-10 w-full h-full object-bottom object-cover" src={hero_img} alt="" />
      <div className="right-0 bottom-[40%] left-0 absolute flex flex-col items-center bg-transparent translate-y-[50%]">
        <p className="bg-primary/20 backdrop-blur-[2px] mb-1 px-3 py-1 border border-neutral-400/30 rounded-full text-gold-400 text-xs">
          Premium real estate in tangier
        </p>
        <h1 className="max-w-fit font-cartage font-medium text-[28px] text-white text-center leading-tight">
          Find a Place you <br /> Will Call Home
        </h1>
        <p className="my-4 w-fit text-white text-center whitespace-nowrap">
          Luxury real estate and curated <br />
          rentals in the heart of Tangier.
        </p>
        {/* <button className="bg-gold-500 hover:bg-gold-400 px-5 py-2 border border-gold rounded-2xl font-semibold text-primary text-lg transition-all duration-300 cursor-pointer">
          Browse Properties
        </button> */}
        <Button label="Browse Properties" />
        <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-3 mt-14">
          <Badges Icon={FiHome} label="Properties" count={200} />
          <Badges Icon={HiOutlineEmojiHappy} label="Happy Client" count={500} />
          <Badges Icon={TfiMedallAlt} label="Years Experience" count={10} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
