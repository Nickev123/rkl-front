import React from "react";
import Image from "next/image";

// Footer Component
// ------------------------------------------------------------------------------------------------------- //
const Footer = () => (
  <footer
    className="bg-white bg-grayColor text-white w-full px-2p py-2p"
    data-aos="fade"
  >
    <div className="flex flex-col lg:flex-row justify-evenly items-center w-full flex-wrap">
      {/* RKL Logo */}
      {/* <Image
        src="/assets/header/logo.jpg"
        alt="RKL Logo"
        width="137"
        height="137"
      /> */}

      {/* Navigation */}
      <nav className="flex flex-col lg:flex-row text-sm md:text-base justify-evenly items-center w-3/5 max-w-3/5 font-sans font-semibold flex-wrap">
        {/* <a
          className="px-2 xl:px-3 pt-1 my-4 lg:my-0 inline-flex items-end hover:underline"
          href="#about"
        >
          ABOUT
        </a> */}
        {/* <a
          className="px-2 xl:px-3 pt-1 my-4 lg:my-0 inline-flex items-end hover:underline"
          href="#mint"
        >
          MINT
        </a>
        <a
          className="px-2 xl:px-3 pt-1 my-4 lg:my-0 inline-flex items-end hover:underline"
          href="#game"
        >
          GAME
        </a>
        <a
          className="px-2 xl:px-3 pt-1 my-4 lg:my-0 inline-flex items-end hover:underline"
          href="#team"
        >
          TEAM
        </a>
        <a
          className="px-2 xl:px-3 pt-1  mb-12 lg:my-0 inline-flex items-end hover:underline"
          href="#roadmap"
        >
          ROADMAP
        </a> */}
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
    </div>

    <div className=" pb-8 text-center lg:ml-36 lg:text-left font-sans text-grayColor3">
      Ⓒ 2021, RUMBLE KONG LEAGUE, ALL RIGHTS RESERVED
    </div>
  </footer>
);
// ------------------------------------------------------------------------------------------------------- //

Footer.displayName = "Footer";
export default Footer;
