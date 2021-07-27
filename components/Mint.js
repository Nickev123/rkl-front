import React, { useState, useCallback } from "react";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";

// Mint Component
// ------------------------------------------------------------------------------------------------------- //
const Mint = () => {
  const [val, setVal] = useState("0");

  const handleChangeVal = (e) => {
    const num = e.target.value;
    let intNum = 0;
    try {
      intNum = parseInt(num);
      if (intNum > 20) {
        intNum = 20;
      } else if (intNum < 1) {
        intNum = 1;
      }
    } catch (e) {
      true;
    }
    setVal(intNum);
  };

  return (
    <div
      id="mint"
      className="flex flex-col items-center justify-center px-5p text-white"
    >
      <a
        href="https://discord.gg/PVeQeRdXYT"
        target="_blank"
        rel="noreferrer noopener"
      >
        <button className="h-14 mb-12 text-2xl hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-white-400 rounded shadow">
          Join DISCORD
        </button>
      </a>

      <h2 className="font-sans mb-3 text-3xl yl-400 mt-8">Mint Launchpad</h2>
      <div className="w-20 h-0.5 bg-yellow-400"></div>

      <div className="md:w-10/12 w-12/12 mt-8 mb-8">
        <p className="text-sm mb-2">Minting progress</p>
        <div className="px-10">
          <ProgressBar completed={0} bgColor="#fabe24" />
        </div>

        <div
          style={{ minWidth: "300px" }}
          className="md:px-12 md:py-12 md:w-4/12 px-4 py-4 mx-auto w-12/12 mt-8 mb-4 border border-white-400 rounded shadow flex flex-col justify-center content-center"
        >
          <div className="flex flex-col mx-auto">
            <label htmlFor="qty"># of Kongs to mint</label>
            <p className="text-sm mb-2">20 max</p>
            <input
              style={{ width: "100px" }}
              className="px-2 max-w-xs mb-2 text-black text-center mx-auto"
              type="number"
              min="1"
              max="20"
              id="qty"
              name="qty"
              placeholder="#"
              value={val}
              onChange={handleChangeVal}
              onFocus={handleChangeVal}
            />
            <p>total mint cost: ETH</p>
            <button className="mt-4 max-w-xs text-lg text-white-800 font-semibold border border-white-400 rounded shadow">
              MINT
            </button>
          </div>
        </div>
      </div>

      <div className="w-10/12 h-0.5 bg-offwhite bg-yellow-400  hidden 0xl:block"></div>
      <div className="w-12/12 md:w-10/12 flex justify-center 0xl:justify-between flex-wrap">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="font-sans mb-3 text-3xl yl-400 mt-8">
              Get Ready To Rumble
            </h2>
            <div className="w-20 h-0.5 bg-yellow-400"></div>

            <h4 className="font-serif text-justify text-white text-sm md:text-2xl mt-8 mb-8">
              Rumble Kong League is a competitive 3 vs 3 basketball experience,
              combining play-to-earn functionality with NFT Collection
              mechanics, enabling users to compete in engaging ways through
              NFTs. Launching with a set of unique 10.000 ERC-721 tokens, called
              Kongs. Alongside a truly unique look, each Kong comes with a
              randomly generated set of attributes that can influence their
              performance in a match, providing additional depth and strategic
              elements.
              <div className="text-center mt-8 mb-8">
                <Image
                  src="/assets/mint/girl-ape.jpeg"
                  width={500}
                  height={500}
                  alt="game-card"
                />
              </div>
              Combining our strong vision, high-quality art, cutting-edge
              backend solutions, as well as a public and experienced team, it is
              our goal to give new use-cases to NFTs and disrupt the current
              landscape.
              <br />
              <br />
              Kongs will be released with a provenance that is computed and
              presented here on the website, without compromising the rarities,
              meaning no metadata leak is possible. This ensures a fair random
              generation of the Kongs. Permanence of the art is guaranteed, in
              addition to having your art live on IPFS, we have taken an extra
              measure to have it on Arweave, as well. Minting randomness is
              guaranteed via in-contract mechanisms.
            </h4>
          </div>
          {/* <a className=" hidden 0xl:block" href="#">
          <button className="yellow-button">MINT</button>
        </a> */}
        </div>
      </div>
      <div className="w-10/12 h-0.5 bg-offwhite bg-yellow-400 hidden 0xl:block mb-8"></div>
      <div
        className="w-12/12 md:w-10/12"
        data-aos="fade-left"
        data-aos-delay="200"
        // data-aos-anchor-placement="center-bottom"
      >
        <div className="w-12/12 md:w-6/12" style={{ display: "inline-block" }}>
          <div>
            <h2 className="font-sans mb-3 text-3xl yl-400 mt-8">
              Commitment to Quality
            </h2>
            <div className="w-20 h-0.5 bg-yellow-400 "></div>
            <h4 className="font-serif text-justify text-white text-sm md:text-2xl mt-8 mb-8">
              Each Kong is assembled from a set of 100+ carefully hand-drawn
              traits, split into various categories. Out of over 45million
              possible combinations, 10.000 will be assembled through a
              programmatic approach, giving each Kong a distinct look. Our art
              is inspired by other monkey-based collections (You know who we are
              talking about), but it is our aim to give it our own twist through
              unique designs.
              <br />
              <br />
              Each of the traits has been hand-drawn by digital artist
              sickpencil, known for his unique art style and various
              high-quality NFT derivatives and standalone NFT pieces. Rumble
              Kongs are giving him the opportunity to express his creativity to
              the fullest, by combining everyday basketball traits with unique
              out-of-this-world designs. No two Kongs look alike, with the
              visual being live on IPFS, as well as Arweave, ensuring permanence
              of the art. In addition to that, owners will receive a complete
              commercial licence to any owned Kong.
            </h4>
          </div>
        </div>
        <div
          style={{ float: "right", textAlign: "right" }}
          className="w-12/12 md:w-5/12"
        >
          <Image
            src="/assets/quality/quality.png"
            width={500}
            height={500}
            alt="kong"
          />
        </div>
      </div>
      {/* White Seperator */}
      <div
        className="w-10/12 h-0.5 bg-offwhite hidden 0xl:block mb-8 mt-8"
        data-aos="fade"
      ></div>
    </div>
  );
};
// ------------------------------------------------------------------------------------------------------- //

Mint.displayName = "Mint";
export default Mint;
