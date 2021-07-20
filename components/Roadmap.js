import React from "react";

// Roadmap Component
// ------------------------------------------------------------------------------------------------------- //
const Roadmap = () => (
  <div id="roadmap">
    <div
      className="mt-4 mb-0 xl:mb-20 mr-8 flex flex-col justify-between text-center"
      data-aos="fade"
    >
      <h2 className="font-sans mb-2 text-3xl text-yellowColor">Roadmap</h2>
      <div className="w-20 h-0.5 bg-yellowColor mb-8 self-center"></div>
    </div>

    <div data-aos="fade-left" data-aos-anchor-placement="center-bottom">
      <div>July 2022</div>
      <div>Launch of initial NFT collection</div>
    </div>

    <div data-aos="fade-right" data-aos-anchor-placement="center-bottom">
      <div>August 2022</div>
      <div>Launch of initial NFT collection</div>
    </div>

    <div data-aos="fade-left" data-aos-anchor-placement="center-bottom">
      <div>September 2022</div>
      <div>Launch of initial NFT collection</div>
    </div>

    <div data-aos="fade-right" data-aos-anchor-placement="center-bottom">
      <div>October 2022</div>
      <div>Launch of initial NFT collection</div>
    </div>
  </div>
);
// ------------------------------------------------------------------------------------------------------- //

Roadmap.displayName = "Roadmap";
export default Roadmap;
