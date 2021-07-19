import React from "react";

// Roadmap Component
// ------------------------------------------------------------------------------------------------------- //
const Roadmap = () => (
  <div
    id="roadmap"
    className="flex flex-col items-center px-0 xl:px-5p text-white mb-16 xl:mb-36"
  >
    <div className="w-10/12 flex flex-col justify-center items-center flex-wrap">
      {/* Roadmap Content */}
      <div
        className="mt-4 mb-0 xl:mb-20 mr-8 flex flex-col justify-between text-center"
        data-aos="fade"
      >
        <h2 className="font-sans mb-2 text-3xl">Roadmap</h2>
        <div className="w-20 h-0.5 bg-yellowColor mb-8 self-center"></div>
      </div>

      {/* Roadmap Desktop */}
      <div
        className="flex-col hidden xl:flex"
        style={{
          width: 850,
          height: 1200,
          backgroundImage: `url('/assets/roadmap/arrow.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto auto",
          backgroundPosition: "center",
        }}
      >
        <div
          className="ml-auto mt-4"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="h-10 w-64 bg-white border border-grayColor4 text-black font-sans text-xl flex justify-center items-center">
            July 2022
          </div>
          <div className="w-96 bg-white border border-grayColor4 text-black font-sans text-xl flex mt-2 pl-5 pt-4 pb-16">
            Launch of initial NFT collection
          </div>
        </div>

        <div
          className="mt-2"
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="w-max">
            <div className="h-10 w-64 bg-white border border-grayColor4 text-black font-sans text-xl flex justify-center items-center ml-auto">
              July 2022
            </div>
            <div className="w-96 bg-white border border-grayColor4 text-black font-sans text-xl flex mt-2 pl-5 pt-4 pb-16">
              Launch of initial NFT collection
            </div>
          </div>
        </div>

        <div
          className="ml-auto mt-2"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="h-10 w-64 bg-white border border-grayColor4 text-black font-sans text-xl flex justify-center items-center">
            July 2022
          </div>
          <div className="w-96 bg-white border border-grayColor4 text-black font-sans text-xl flex mt-2 pl-5 pt-4 pb-16">
            Launch of initial NFT collection
          </div>
        </div>

        <div
          className="mt-2"
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="w-max">
            <div className="h-10 w-64 bg-white border border-grayColor4 text-black font-sans text-xl flex justify-center items-center ml-auto">
              July 2022
            </div>
            <div className="w-96 bg-white border border-grayColor4 text-black font-sans text-xl flex mt-2 pl-5 pt-4 pb-16">
              Launch of initial NFT collection
            </div>
          </div>
        </div>

        <div
          className="ml-auto mt-2"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="h-10 w-64 bg-white border border-grayColor4 text-black font-sans text-xl flex justify-center items-center">
            July 2022
          </div>
          <div className="w-96 bg-white border border-grayColor4 text-black font-sans text-xl flex mt-2 pl-5 pt-4 pb-16">
            Launch of initial NFT collection
          </div>
        </div>

        <div>
          <div
            className="w-max mt-2"
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
          >
            <div className="h-10 w-64 bg-white border border-grayColor4 text-black font-sans text-xl flex justify-center items-center ml-auto">
              July 2022
            </div>
            <div className="w-96 bg-white border border-grayColor4 text-black font-sans text-xl flex mt-2 pl-5 pt-4 pb-16">
              Launch of initial NFT collection
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap Mobile */}
      <div
        className="flex-col flex xl:hidden text-sm"
        style={{
          width: 350,
          height: 900,
          backgroundImage: `url('/assets/roadmap/arrow-mobile.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto auto",
          backgroundPosition: "center",
        }}
      >
        <div
          className="ml-auto mr-6 mt-12"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="h-6 w-36 bg-white border border-grayColor4 text-black font-sans flex justify-center items-center">
            July 2022
          </div>
          <div className="w-56 bg-white border border-grayColor4 text-black font-sans flex mt-1 pl-2 pt-2 pb-8">
            Launch of initial NFT collection
          </div>
        </div>

        <div
          className="mt-8 ml-6"
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="w-max">
            <div className="h-6 w-36 bg-white border border-grayColor4 text-black font-sans flex justify-center items-center ml-auto">
              July 2022
            </div>
            <div className="w-56 bg-white border border-grayColor4 text-black font-sans flex mt-1 pl-2 pt-2 pb-8">
              Launch of initial NFT collection
            </div>
          </div>
        </div>

        <div
          className="ml-auto mt-16 mr-6"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="h-6 w-36 bg-white border border-grayColor4 text-black font-sans flex justify-center items-center">
            July 2022
          </div>
          <div className="w-56 bg-white border border-grayColor4 text-black font-sans flex mt-1 pl-2 pt-2 pb-8">
            Launch of initial NFT collection
          </div>
        </div>

        <div
          className="mt-11 ml-6"
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="w-max">
            <div className="h-6 w-36 bg-white border border-grayColor4 text-black font-sans flex justify-center items-center ml-auto">
              July 2022
            </div>
            <div className="w-56 bg-white border border-grayColor4 text-black font-sans flex mt-1 pl-2 pt-2 pb-8">
              Launch of initial NFT collection
            </div>
          </div>
        </div>

        <div
          className="ml-auto mt-8 mr-4"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="h-6 w-36 bg-white border border-grayColor4 text-black font-sans flex justify-center items-center">
            July 2022
          </div>
          <div className="w-56 bg-white border border-grayColor4 text-black font-sans flex mt-1 pl-2 pt-2 pb-8">
            Launch of initial NFT collection
          </div>
        </div>

        <div
          className="mt-8 ml-5"
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="w-max">
            <div className="h-6 w-36 bg-white border border-grayColor4 text-black font-sans flex justify-center items-center ml-auto">
              July 2022
            </div>
            <div className="w-56 bg-white border border-grayColor4 text-black font-sans flex mt-1 pl-2 pt-2 pb-8">
              Launch of initial NFT collection
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
// ------------------------------------------------------------------------------------------------------- //

Roadmap.displayName = "Roadmap";
export default Roadmap;
