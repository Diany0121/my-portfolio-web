"use client"
import  Link  from "next/link";
import { MotionTransition } from "./transition-component";
import { socialNetworks } from "@/data";

import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Maneja el evento de scroll
    const handleScroll = () => {
      if (window.scrollY > 50) { // Ajusta este valor según tus necesidades
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Añade el listener de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpia el listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-10 px-20"
    >
      <header
      className={`w-full transition-all duration-300 h-14 flex items-center ${
        isScrolled ? 'fixed top-0 left-0 bg-white z-50 md:relative' : 'relative'
      }`}
    >
      <div className="container justify-center md:justify-end max-w-6xl mx-auto md:flex">
        <div className="flex items-center justify-center gap-7 text-gray-600">
          {socialNetworks.map(({ logo, src, id }) => (
            <Link
              key={id}
              href={src}
              target="_blank"
              className="transition-all duration-300 hover:text-secondary"
            >
              {logo}
            </Link>
          ))}
        </div>
      </div>
    </header>

    </MotionTransition>
  );
};

export default Header;
