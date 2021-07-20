import React from "react";

// About Component
// ------------------------------------------------------------------------------------------------------- //
const About = () => (
  <div id="about" className="flex flex-col items-center px-2p py-2p mt-2 text-white">
    {/* About Content */}
    <div
      className="mt-2 w-full h-30vmax"
      style={{
        backgroundImage: `url('/assets/about/rumble_banner.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
      }}
      data-aos="fade"
    >
      {/* <div className="w-auto lg:w-max flex flex-col justify-center ml-auto px-2 sm:px-20 h-full text-yellowColor"> */}
        {/* <h1
          className="font-sans mb-4 mt-8 2xs:mt-0"
          style={{ fontSize: "calc(8px + 4.2vw)" }}
        >
          RUMBLE KONG LEAGUE
        </h1>
        <h3
          className="font-sans mb-8 sm:mb-12 xl:mb-40 text-right"
          style={{ fontSize: "calc(8px + 1vw)" }}
        >
          The first competitive 3v3 Basketball NFT Collection
        </h3> */}
        {/* <div><a href="#"><button className='yellow-button ml-16'>MINT</button></a></div> */}
      {/* </div> */}
    </div>
  </div>
);
// ------------------------------------------------------------------------------------------------------- //

About.displayName = "About";
export default About;
