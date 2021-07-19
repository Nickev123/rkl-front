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
        <h2 className="font-serif mb-3 text-3xl">The Game</h2>
        <div className="w-20 h-0.5 bg-yellowColor mb-8 self-center"></div>
        <h4 className="font-serif text-grayColor2 text-xl">
          Game is a 3v3 kong rumble. The mechanics allow for cleverly combining
          your cards together for best chance of winning the game.
          <br />
          <br />
          RKL team will be organising seasonal play offs where the teams will
          participate to win prizes. The game will be designed in such a way
          that even the kongs with lower stats have a chance at winning.
          <br />
          <br />
          Levelling mechanics are present. Winning streaks influence the game.
        </h4>
      </div>

      {/* Game Images */}
      <div className="flex text-center justify-center xl:justify-between flex-wrap mb-12">
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
      </div>

      {/* Large Game Image */}
      <Image
        className="mx-auto"
        src="/assets/game/monkey2.png"
        alt="Game Image"
        width="1088"
        height="590"
        data-aos="fade"
      />
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
