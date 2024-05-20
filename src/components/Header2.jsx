import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

const Header2 = ({ bgColor, useGradient }) => {
  return (
    <nav className={`navbar p-4 border-b-2 border-[#A84D31] ${useGradient ? 'bg-gradient-to-r from-[#542219] to-[#0B2529]' : bgColor}`}>
      <Link href="/" legacyBehavior>
        <a className="navbar-brand text-white text-xl font-bold cursor-pointer">Levy</a>
      </Link>
      <div className="navbar-links flex space-x-4">
        <ScrollLink to="home" smooth={true} duration={500} className="special-hover cursor-pointer uppercase">Home</ScrollLink>
        <ScrollLink to="what-i-do" smooth={true} duration={500} className="special-hover cursor-pointer uppercase">Lo Que Hago</ScrollLink>
        <ScrollLink to="youtube" smooth={true} duration={500} className="special-hover cursor-pointer uppercase">YouTube</ScrollLink>
        <ScrollLink to="portfolio" smooth={true} duration={500} className="special-hover cursor-pointer uppercase">Portafolio</ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500} className="special-hover cursor-pointer uppercase bg-[#489193] text-white rounded-lg shadow-lg p-2 hover:bg-gradient-to-r from-[#FF0000] via-[#ECECEC] to-[#FF0000]">Agenda Una Llamada</ScrollLink>
      </div>
    </nav>
  );
};

export default Header2;
