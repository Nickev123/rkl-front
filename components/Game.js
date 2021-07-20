import React from "react";
import Image from "next/image";

// Game Component
// ------------------------------------------------------------------------------------------------------- //
const Game = () => (
  <div
    id="game"
    className="flex flex-col items-center justify-center px-5p text-white "
  >
    <div className="w-12/12 md:w-10/12 flex flex-col justify-center flex-wrap">
      {/* Game Content */}
      <div className=" flex flex-col justify-between" data-aos="fade">
        <h2 className="font-sans mb-3  text-3xl yl-400">The Game</h2>
        <div className="w-20 h-0.5 bg-yellow-400 "></div>
        <h4 className="font-serif text-justify text-white text-sm md:text-2xl mt-8 mb-8">
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
    </div>

    <div
      className="w-10/12 h-0.5 bg-offwhite hidden 0xl:block mb-8"
      data-aos="fade"
    ></div>
  </div>
);
// ------------------------------------------------------------------------------------------------------- //

Game.displayName = "Game";
export default Game;
