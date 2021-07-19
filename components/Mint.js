import React from "react";
import Image from "next/image";

// Mint Component
// ------------------------------------------------------------------------------------------------------- //
const Mint = () => (
  <div
    id="mint"
    className="flex flex-col items-center justify-center px-5p text-white mb-8"
  >
    <div
      className="w-10/12 flex justify-center 0xl:justify-between flex-wrap"
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-anchor-placement="center-bottom"
    >
      <div className="my-8 mr-8 flex flex-col justify-between">
        <div>
          <h2 className="font-serif mb-3 text-3xl">
            Let&#39;s get ready to rumble
          </h2>
          <div className="w-20 h-0.5 bg-yellowColor mb-4"></div>
          <h4 className="font-serif text-grayColor2 text-xl">
            Rumble Kong League is an NFT (ERC-721) 3v3 basketball game. Each
            card represents a unique player. On top of being carefully generated
            from the quality artwork traits, each Kong comes with a randomly
            generated set of attributes that influence their game.
            <br />
            <br />
            We have world-class artist working on the traits. Art generation is
            following latest standards. Namely, all kongs are pre-generated,
            however, the provenance is computed and presented here on the
            website, without compromising the rarities. Meaning no metadata leak
            is possible. This ensures a fair random generation of the kongs.
            Permanence of the art is guaranteed, in addition to having your art
            live on IPFS, we have taken an extra measure to have it on Arweave,
            as well. Minting randomness is guaranteed via in-contract
            mechanisms. It is not possible to game our game.
          </h4>
        </div>
        <a className="mt-8 hidden 0xl:block" href="#">
          <button className="yellow-button">MINT</button>
        </a>
      </div>

      {/* <Image
        src="/assets/mint/monkey1.jpg"
        alt="Mint Image"
        width="511"
        height="487"
      /> */}

      <div className="mt-8 block 0xl:hidden w-full text-center">
        <a href="#">
          <button className="yellow-button">MINT</button>
        </a>
      </div>
    </div>

    {/* White Seperator */}
    <div
      className="w-10/12 h-0.5 bg-offwhite mt-20 mb-4 hidden 0xl:block"
      data-aos="fade"
    ></div>

    <div
      className="w-10/12 flex justify-center 1xl:justify-between flex-wrap mt-20"
      data-aos="fade-left"
      data-aos-delay="200"
      data-aos-anchor-placement="center-bottom"
    >
      <Image
        className="order-last 1xl:order-none"
        src="/assets/mint/2.PNG"
        alt="Mint Image"
        width="480"
        height="458"
      />

      <div className="my-8 flex flex-col justify-between w-auto lg:w-1/2">
        <div className="ml-8">
          <h2 className="font-serif mb-3 text-3xl">Quality is dope</h2>
          <div className="w-20 h-0.5 bg-yellowColor mb-4"></div>
          <h4 className="font-serif text-grayColor2 text-xl">
            Look for yourself. Now imagine that these also bring &quot;Play to
            Earn&quot; mechanic on top of looking like you won&apos;t be ashamed
            to show this to your grandchildren. Now this is a kong that has a
            healthy diet and can take on any foe!
            <br />
            <br />
            These are alpha kongs!
          </h4>
        </div>
      </div>
    </div>

    {/* White Seperator */}
    <div
      className="w-10/12 h-0.5 bg-offwhite mt-12 mb-4 hidden 0xl:block"
      data-aos="fade"
    ></div>
  </div>
);
// ------------------------------------------------------------------------------------------------------- //

Mint.displayName = "Mint";
export default Mint;
