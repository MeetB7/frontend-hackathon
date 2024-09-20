// components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header className= "fixed w-full bg-[#1E1E1E] p-4 flex justify-between items-center z-50">
      <div className="flex items-center">
        <img src="/image.png" alt="TSEC Logo" className="h-12" />
      </div>
      <nav className="space-x-8 text-white">
        <a href="#" className="hover:text-gray-400">About us</a>
        <a href="#" className="hover:text-gray-400">Events</a>
        <a href="#" className="hover:text-gray-400">Cafeteria</a>
        <a href="#" className="hover:text-gray-400">Announcements</a>
      </nav>
    </header>
  );
};

export default Header;
