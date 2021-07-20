import React from "react";

const Provenance = () => (
  <div
    id="provenance"
    className="flex flex-col items-center justify-center px-5p text-white "
  >
    <div className="w-12/12 md:w-10/12 flex flex-col justify-center flex-wrap">
      <div className=" flex flex-col justify-between" data-aos="fade">
        <h2 className="font-sans mb-3  text-3xl yl-400">Provenance</h2>
        <div className="w-20 h-0.5 bg-yellow-400 "></div>
      </div>
    </div>

    <div
      className="w-10/12 h-0.5 bg-offwhite   hidden 0xl:block"
      data-aos="fade"
    ></div>
  </div>
);
// ------------------------------------------------------------------------------------------------------- //

Provenance.displayName = "Provenance";
export default Provenance;
