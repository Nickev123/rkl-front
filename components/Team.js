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
        <h2 className="font-serif mb-3 text-3xl">The Team</h2>
        <div className="w-20 h-0.5 bg-yellowColor mb-8 self-center xl:self-start"></div>
        <h4 className="font-sans text-grayColor2 text-xl">
          Meet the team bringing you the rumble.
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
          <div className="font-serif text-xl mt-6 mb-4 text-yellowColor2">
            direkkt
          </div>
          <span className="text-grayColor3 font-semibold text-sm w-64 mx-auto">
            Visionary
          </span>

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
                width="48"
                height="48"
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
          <div className="font-serif text-xl mt-6 mb-4 text-yellowColor2">
            Sickpencil
          </div>
          <span className="text-grayColor3 font-semibold text-sm w-64 mx-auto">
            Artist
          </span>

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
                width="48"
                height="48"
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
          <div className="font-serif text-xl mt-6 mb-4 text-yellowColor2">
            Naz
          </div>
          <span className="text-grayColor3 font-semibold text-sm w-64 mx-auto">
            Tech
          </span>

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
                width="48"
                height="48"
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
          <div className="font-serif text-xl mt-6 mb-4 text-yellowColor2">
            Nickev
          </div>
          <span className="text-grayColor3 font-semibold text-sm w-64 mx-auto">
            Marketing
          </span>

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
                width="48"
                height="48"
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
