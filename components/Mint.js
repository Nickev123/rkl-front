import React from "react";
import Image from "next/image";

// Mint Component
// ------------------------------------------------------------------------------------------------------- //
const Mint = () => (
  <div
    id="mint"
    className="flex flex-col items-center justify-center px-5p text-white"
  >
    {/* <div className=" block 0xl:hidden text-center">
        <a href="#">
          <button className="yellow-button">&nbsp;JOIN DISCORD&nbsp;</button>
        </a>
      </div> */}

    <a
      href="https://discord.gg/PVeQeRdXYT"
      target="_blank"
      rel="noreferrer noopener"
    >
      <button className="h-14 mb-12 text-2xl hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-white-400 rounded shadow">
        Join DISCORD
      </button>
    </a>

    <div className="w-10/12 h-0.5 bg-offwhite bg-yellow-400  hidden 0xl:block"></div>

    <div className="w-12/12 md:w-10/12 flex justify-center 0xl:justify-between flex-wrap">
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="font-sans mb-3 text-3xl yl-400 mt-8">
            Let&#39;s get ready to rumble
          </h2>
          <div className="w-20 h-0.5 bg-yellow-400"></div>
          <h4 className="font-serif text-justify text-white text-sm md:text-2xl mt-8 mb-8">
            Rumble Kong League is a competitive 3 vs 3 basketball experience,
            combining play-to-earn functionality with NFT Collection mechanics,
            enabling users to compete in engaging ways through NFTs. Launching
            with a set of unique 10.000 ERC-721 tokens, called Kongs, consisting
            of programmed attributes from over 100 hand-drawn traits, carefully
            assembled and curated. On top of being carefully generated from the
            quality artwork traits, each Kong comes with a randomly generated
            set of attributes that can influence their performance in the game.
            <br />
            <br />
            Combining a strong vision, high-quality art, cutting-edge backend
            technology, as well as a public and experienced team, it is our
            vision to give new use-cases to NFTs and disrupt the current
            landscape.
            <br />
            <br />
            Kongs will be minted revealed, with a provenance that is computed
            and presented here on the website, without compromising the
            rarities. Meaning no metadata leak is possible. This ensures a fair
            random generation of the Kongs. Permanence of the art is guaranteed,
            in addition to having your art live on IPFS, we have taken an extra
            measure to have it on Arweave, as well. Minting randomness is
            guaranteed via in-contract mechanisms. It is not possible to game
            our game.
          </h4>
        </div>
        {/* <a className=" hidden 0xl:block" href="#">
          <button className="yellow-button">MINT</button>
        </a> */}
      </div>
    </div>

    <div className="w-10/12 h-0.5 bg-offwhite bg-yellow-400 hidden 0xl:block mb-8"></div>

    <div
      className="w-12/12 md:w-10/12 flex flex-row justify-center content-center 0xl:justify-between flex-wrap"
      data-aos="fade-left"
      data-aos-delay="200"
      // data-aos-anchor-placement="center-bottom"
    >
      <Image src="/assets/team/naz.PNG" width={500} height={500} alt="kong" />
      <Image
        src="/assets/team/sickpencil.PNG"
        width={500}
        height={500}
        alt="kong"
      />

      <div className="flex flex-col justify-between w-auto">
        <div>
          <h2 className="font-sans mb-3 text-3xl yl-400 mt-8">
            Quality is dope
          </h2>
          <div className="w-20 h-0.5 bg-yellow-400 "></div>
          <h4 className="font-serif text-justify text-white text-sm md:text-2xl mt-8 mb-8">
            Each Kong is assembled from a set of 100+ carefully hand-drawn
            traits by known NFT artist sickpencil, who has made a name for
            himself through his unique art style and various high-quality
            derivatives. Rumble Kongs are giving him the opportunity to express
            his creativity to the fullest, by combining everyday basketball
            traits with unique out-of-this-world designs. No two Kongs look
            alike, with the visual being live on IPFS, as well as Arweave,
            ensuring permanence of the art.
          </h4>
        </div>
      </div>
    </div>

    {/* White Seperator */}
    <div
      className="w-10/12 h-0.5 bg-offwhite hidden 0xl:block mb-8"
      data-aos="fade"
    ></div>
  </div>
);
// ------------------------------------------------------------------------------------------------------- //

Mint.displayName = "Mint";
export default Mint;
