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
          className="px-2 xl:px-3 pt-1 inline-flex items-end"
          href="#about"
        >
          ABOUT
        </a> */}
        <a
          className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
          href="#mint"
        >
          MINT
        </a>
        <a
          className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
          href="#game"
        >
          GAME
        </a>
        <a
          className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
          href="#team"
        >
          TEAM
        </a>
        <a
          className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
          href="#roadmap"
        >
          ROADMAP
        </a>
        <a
          className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
          href="#provenance"
        >
          PROVENANCE
        </a>
      </nav>

      {/* Social Links */}
      <div className="flex justify-center">
        <a
          className="mr-4"
          href="https://discord.gg/PVeQeRdXYT"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src="/assets/footer/discord.jpg"
            alt="Discord"
            width="32"
            height="32"
          />
        </a>
        <a
          href="https://twitter.com/RumbleKongs"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src="/assets/footer/twitter.png"
            alt="Twitter"
            width="32"
            height="32"
          />
        </a>
      </div>

      {/* Navigation for Mobile */}
      <div className="md:hidden">
        <Menu right>
          <a
            className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
            href="#about"
          >
            ABOUT
          </a>
          <a
            className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
            href="#mint"
          >
            MINT
          </a>
          <a
            className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
            href="#game"
          >
            GAME
          </a>
          <a
            className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
            href="#team"
          >
            TEAM
          </a>
          <a
            className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
            href="#roadmap"
          >
            ROADMAP
          </a>
          <a
            className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
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
