import React from "react";
import Image from "next/image";

// Team Component
// ------------------------------------------------------------------------------------------------------- //
const Team = () => (
  <div id="team" className="flex flex-col items-center px-5p text-white mb-8">
    <div className="w-10/12 flex flex-col flex-wrap">
      {/* Team Content */}
      <div
        className="mt-4 mb-16 mr-8 flex flex-col justify-between text-center xl:text-left"
        data-aos="fade"
      >
        <h2 className="font-serif mb-3 text-3xl text-yellowColor">The Team</h2>
        <div className="w-20 h-0.5 bg-yellowColor mb-8 self-center xl:self-start"></div>
        <h4 className="font-sans text-white text-xl">
          Meet the team bringing you the rumble
        </h4>
      </div>

      {/* Team Images */}
      <div className="flex text-center justify-center xl:justify-between flex-wrap">
        <div
          className="mx-8 mb-8"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-anchor-placement="center-bottom"
        >
          <Image
            className="mx-auto"
            src="/assets/team/direkkt.PNG"
            alt="Team Image"
            width="164"
            height="164"
          />
          <div className="font-serif text-xl mt-6 text-yellowColor2">
            direkkt
          </div>
          <span className="text-white font-semibold text-sm w-64 mx-auto">
            Visionary
          </span>
          <div className="w-52">
            <span className="text-grayColor3 font-semibold text-xs">
              Marketing Director at The Sandbox with 10+ year experience working
              in the gaming industry (Activision Blizzard, Wargaming)
            </span>
          </div>

          <div className="flex mt-6 justify-center">
            {/* <a className="mr-px" href="#">
              <Image
                src="/assets/team/discord.png"
                alt="Discord"
                width="48"
                height="48"
              />
            </a> */}
            <a href="https://twitter.com/direkkt">
              <Image
                src="/assets/team/twitter.png"
                alt="Twitter"
                width="24"
                height="24"
              />
            </a>
          </div>
        </div>

        <div
          className="mx-8 mb-8"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-anchor-placement="center-bottom"
        >
          <Image
            className="mx-auto"
            src="/assets/team/sickpencil.PNG"
            alt="Team Image"
            width="164"
            height="164"
          />
          <div className="font-serif text-xl mt-6 text-yellowColor2">
            Sickpencil
          </div>
          <span className="text-white font-semibold text-sm w-64 mx-auto">
            Artist
          </span>
          <div className="w-52">
            <span className="text-grayColor3 font-semibold text-xs">
              Digital artist and creative mastermind known for his unique style
              and several popular derivatives across the NFT space
            </span>
          </div>

          <div className="flex mt-6 justify-center">
            {/* <a className="mr-px" href="#">
              <Image
                src="/assets/team/discord.png"
                alt="Discord"
                width="48"
                height="48"
              />
            </a> */}
            <a href="https://twitter.com/sickpencil">
              <Image
                src="/assets/team/twitter.png"
                alt="Twitter"
                width="24"
                height="24"
              />
            </a>
          </div>
        </div>

        <div
          className="mx-8 mb-8"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-anchor-placement="center-bottom"
        >
          <Image
            className="mx-auto"
            src="/assets/team/naz.PNG"
            alt="Team Image"
            width="164"
            height="164"
          />
          <div className="font-serif text-xl mt-6 text-yellowColor2">Naz</div>
          <span className="text-white font-semibold text-sm w-64 mx-auto">
            Tech
          </span>
          <div className="w-52">
            <span className="text-grayColor3 font-semibold text-xs">
              reNFT tech co-founder, first peer-to-peer ERC-721 and ERC-1155
              lending / renting protocol
            </span>
          </div>

          <div className="flex mt-6 justify-center">
            {/* <a className="mr-px" href="#">
              <Image
                src="/assets/team/discord.png"
                alt="Discord"
                width="48"
                height="48"
              />
            </a> */}
            <a href="https://twitter.com/AlgorithmicBot">
              <Image
                src="/assets/team/twitter.png"
                alt="Twitter"
                width="24"
                height="24"
              />
            </a>
          </div>
        </div>

        <div
          className="mx-8 mb-8"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-anchor-placement="center-bottom"
        >
          <Image
            className="mx-auto"
            src="/assets/team/nick.PNG"
            alt="Team Image"
            width="164"
            height="164"
          />
          <div className="font-serif text-xl mt-6 text-yellowColor2">
            Nickev
          </div>
          <span className="text-white font-semibold text-sm w-64 mx-auto">
            Marketing
          </span>
          <div className="w-52">
            <span className="text-grayColor3 font-semibold text-xs">
              Marketing all-rounder and co-founder at reNFT as well as Marketing
              at The Sandbox
            </span>
          </div>

          <div className="flex mt-6 justify-center">
            {/* <a className="mr-px" href="#">
              <Image
                src="/assets/team/discord.png"
                alt="Discord"
                width="48"
                height="48"
              />
            </a> */}
            <a href="https://twitter.com/nickev123">
              <Image
                src="/assets/team/twitter.png"
                alt="Twitter"
                width="24"
                height="24"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Mint Button */}
      {/* <div
        className="mt-8 text-center"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-anchor-placement="center-bottom"
      >
        <a href="#">
          <button className="yellow-button">MINT</button>
        </a>
      </div> */}
    </div>

    {/* White Seperator */}
    <div
      className="w-10/12 h-0.5 bg-offwhite mt-12 mb-4 hidden 0xl:block"
      data-aos="fade"
    ></div>
  </div>
);
// ------------------------------------------------------------------------------------------------------- //

Team.displayName = "Team";
export default Team;
