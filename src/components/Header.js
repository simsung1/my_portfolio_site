import React, { useEffect, useState } from 'react';
import logo from "../assets/splat_transparent.png";
import HeaderButton from "./HeaderButton";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`"shadow-lg fixed w-full z-50 transition-colors duration-300 ease-in-out ${
      isScrolled ? 'bg-stone-600 ' : 'bg-transparent'
    }`}>
      <div className="container mx-auto py-2 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-12 object-contain bg-transparent"/>
          <a href='/' className="text-2xl pl-3 text-white font-raleway font-light hover:text-blue-500">Sung Min Sim</a> {/*fix spacing*/}
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><HeaderButton text='About'/></li>
            <li><HeaderButton text='Projects'/></li>
            <li><HeaderButton text='Contact'/></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;