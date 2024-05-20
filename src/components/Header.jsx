import React from 'react';
import Link from 'next/link';

const Header = ({ bgColor }) => {
  return (
    <nav className={`navbar p-4 border-b-2 border-[#A84D31] ${bgColor}`}>
      <Link href="/" legacyBehavior>
        <a className="navbar-brand text-white text-xl font-bold">Levy</a>
      </Link>
      <div className="navbar-links flex flex-wrap space-x-2 md:space-x-4">
        <Link href="/about" legacyBehavior>
          <a className="orange-btn-hover cursor-pointer uppercase text-xs md:text-sm lg:text-base">Sobre Mí</a>
        </Link>
        <Link href="/business-inquiry" legacyBehavior>
          <a className="special-hover cursor-pointer uppercase bg-[#A84D31] text-white rounded-lg shadow-lg p-2 text-xs md:text-sm lg:text-base hover:bg-[#489193]">Lo Quiero en Mi Negocio</a>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
