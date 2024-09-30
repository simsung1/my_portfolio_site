import React from 'react';
import spaceHalo from "../assets/spaceHalo.jpeg";
import { ChevronDownIcon } from '@heroicons/react/16/solid';

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-black bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${spaceHalo})` }}>
      <div className="text-center text-white p-6">
        <h1 className="text-5xl font-medium mb-4 font-fredoka">Hello, I'm Sung</h1>
        <p className="text-md mb-6">Student Web Developer and Mobile Applications Enthusiast</p>
      </div>
      <a href='#about'><ChevronDownIcon className='size-10 text-gray-400 hover:text-white'/></a>
    </section>
  );
}

export default Hero;
