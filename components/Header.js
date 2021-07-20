import React from "react";
import Image from "next/image";
import { slide as Menu } from "react-burger-menu";

// Header Component
// ------------------------------------------------------------------------------------------------------- //
const Header = () => (
  <>
    {/* Gray Header */}
    {/* <div className="bg-grayColor h-10 w-full" data-aos="fade"></div> */}

    {/* Main Header */}
    <header
      className="bg-grayColor h-24 items-center text-whiteColor inline-flex justify-between md:justify-evenly w-full px-5p"
      data-aos="fade"
    >
      {/* RKL Logo */}
      <Image
        src="/assets/header/logo.png"
        alt="RKL Logo"
        width="96"
        height="96"
      />

      {/* Navigation for Desktop */}
      <nav className="hidden md:inline-flex text-xs sm:text-sm md:text-base justify-evenly w-3/5 max-w-3/5 font-sans font-semibold flex-wrap 2xs:flex-nowrap">
        {/* <a
          className="px-2 xl:px-3 pt-1 inline-flex items-end hover:underline"
          href="#about"
        >
          ABOUT
        </a> */}
        <a
          className="px-2 xl:px-3 pt-1 inline-flex items-end hover:underline"
          href="#mint"
        >
          MINT
        </a>
        <a
          className="px-2 xl:px-3 pt-1 inline-flex items-end hover:underline"
          href="#game"
        >
          GAME
        </a>
        <a
          className="px-2 xl:px-3 pt-1 inline-flex items-end hover:underline"
          href="#team"
        >
          TEAM
        </a>
        <a
          className="px-2 xl:px-3 pt-1 inline-flex items-end hover:underline"
          href="#roadmap"
        >
          ROADMAP
        </a>
      </nav>

      {/* Navigation for Mobile */}
      <div className="md:hidden">
        <Menu right>
          <a
            className="px-2 xl:px-3 pt-1 inline-flex items-end hover:underline"
            href="#about"
          >
            ABOUT
          </a>
          <a
            className="px-2 xl:px-3 pt-1 inline-flex items-end hover:underline"
            href="#mint"
          >
            MINT
          </a>
          <a
            className="px-2 xl:px-3 pt-1 inline-flex items-end hover:underline"
            href="#game"
          >
            GAME
          </a>
          <a
            className="px-2 xl:px-3 pt-1 inline-flex items-end hover:underline"
            href="#team"
          >
            TEAM
          </a>
          <a
            className="px-2 xl:px-3 pt-1 inline-flex items-end hover:underline"
            href="#roadmap"
          >
            ROADMAP
          </a>
          <a
            className="px-2 xl:px-3 pt-1 inline-flex items-end hover:underline"
            href="#provenance"
          >
            PROVENANCE
          </a>
        </Menu>
      </div>
    </header>
  </>
);
// ------------------------------------------------------------------------------------------------------- //

Header.displayName = "Header";
export default Header;
