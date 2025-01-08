import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`container mx-auto bg-slate-700 text-white shadow-md fixed left-0 right-0 z-10 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? 'top-2' : 'top-10'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <NavLink to="/" className="text-3xl font-bold tracking-wide hover:text-indigo-400 transition">
          ReactWithTanstack
        </NavLink>
        <ul className="flex gap-6 text-lg font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:underline hover:text-indigo-300 underline-offset-4 transition ${
                  isActive ? 'text-indigo-400' : ''
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/fetchold"
              className={({ isActive }) =>
                `hover:underline hover:text-indigo-300 underline-offset-4 transition ${
                  isActive ? 'text-indigo-400' : ''
                }`
              }
            >
              FetchOld
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/fetchtq"
              className={({ isActive }) =>
                `hover:underline hover:text-indigo-300 underline-offset-4 transition ${
                  isActive ? 'text-indigo-400' : ''
                }`
              }
            >
              FetchTq
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/infinite"
              className={({ isActive }) =>
                `hover:underline hover:text-indigo-300 underline-offset-4 transition ${
                  isActive ? 'text-indigo-400' : ''
                }`
              }
            >
              InfiniteScroll
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

