import React from "react";
import Image from "next/image";

// Game Component
// ------------------------------------------------------------------------------------------------------- //
const Game = () => (
  <div
    id="game"
    className="flex flex-col items-center justify-center px-5p text-white mb-8"
  >
    <div className="w-10/12 flex flex-col justify-center flex-wrap">
      {/* Game Content */}
      <div
        className="mt-8 mb-8 0xl:mb-36 mr-8 flex flex-col justify-between text-center"
        data-aos="fade"
      >
        <h2 className="font-sans mb-3 text-3xl text-yellowColor">The Game</h2>
        <div className="w-20 h-0.5 bg-yellowColor mb-8 self-center"></div>
        <h4 className="font-serif text-white text-xl">
          The core gameplay of the Rumble Kong League will evolve around
          exciting 3 versus 3 basketball matches, combining proven gameplay and
          play-to-earn mechanics. Compete with and against other real users and
          their NFTs in various leagues and compete for a range of rewards and
          become the best of your class. In order to participate in Leagues,
          users will need to be member of Clubs, a seperate layer of the
          ecosystem, giving users the chance to be the coach of their own team
          and find the best possible team to win the cup.
          <br />
          <br />
          The initial drop of 10.000 Kongs will help funding of the project,
          planned to be released later in 2021 globally.
          <br />
          <br />
          The Kongs will always be at the heart of the Rumble Kong League,
          however in the future it is our vision to open the league up to other
          NFT Collections, giving NFT interoperability a new meaning and
          offering new ways to use NFTs to anyone. We are already in discussion
          with multiple known NFT Collections, some of which will be announced
          in the coming weeks.
        </h4>
      </div>

      {/* Game Images */}
      {/* <div className="flex text-center justify-center xl:justify-between flex-wrap mb-12">
        <div
          className="mr-4 mb-4"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-anchor-placement="center-bottom"
        >
          <Image
            className="mx-auto"
            src="/assets/game/monkey1.png"
            alt="Game Image"
            width="256"
            height="175"
          />
          <div className="font-semibold my-2">PLAY</div>
          <p className="text-grayColor2 w-64 mx-auto">This is a text</p>
        </div>

        <div
          className="mr-4 mb-4"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-anchor-placement="center-bottom"
        >
          <Image
            className="mx-auto"
            src="/assets/game/monkey1.png"
            alt="Game Image"
            width="256"
            height="175"
          />
          <div className="font-semibold my-2">EARN</div>
          <p className="text-grayColor2 w-64 mx-auto">This is a text</p>
        </div>

        <div
          className="mr-4 mb-4"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-anchor-placement="center-bottom"
        >
          <Image
            className="mx-auto"
            src="/assets/game/monkey1.png"
            alt="Game Image"
            width="256"
            height="175"
          />
          <div className="font-semibold my-2">MANAGE</div>
          <p className="text-grayColor2 w-64 mx-auto">This is a text</p>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-anchor-placement="center-bottom"
        >
          <Image
            className="mx-auto"
            src="/assets/game/monkey1.png"
            alt="Game Image"
            width="256"
            height="175"
          />
          <div className="font-semibold my-2">DOMINATE</div>
          <p className="text-grayColor2 w-64 mx-auto">This is a text</p>
        </div>
      </div> */}

      {/* Large Game Image */}
      {/* <Image
        className="mx-auto"
        src="/assets/game/monkey2.png"
        alt="Game Image"
        width="1088"
        height="590"
        data-aos="fade"
      /> */}
    </div>

    {/* White Seperator */}
    <div
      className="w-10/12 h-0.5 bg-offwhite mt-12 mb-4 hidden 0xl:block"
      data-aos="fade"
    ></div>
  </div>
);
// ------------------------------------------------------------------------------------------------------- //

Game.displayName = "Game";
export default Game;
