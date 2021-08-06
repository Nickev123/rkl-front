import React from "react";

const Sneakers = () => (
  <div
    id="sneakers"
    className="flex flex-col items-center justify-center px-5p text-white mb-8 mt-8"
  >
    <div className="w-12/12 md:w-10/12 flex flex-col justify-center flex-wrap">
      <div className=" flex flex-col justify-between" data-aos="fade">
        <h2 className="font-sans mb-3  text-3xl yl-400">
          The Sneakers Airdrop
        </h2>
        <div className="w-20 h-0.5 bg-yellow-400" />
      </div>
    </div>
    <div>
      <p className="text-xl mt-8">
        A snapshot of all kong holders who are eligible for the sneaker frop
        will be taken on 06/08/2021 at 4 PM UTC
      </p>
    </div>
    <div>
      <p className="text-2xl mt-4">Available to claim: 0</p>
    </div>
    <div>
      <button className="mt-8 cursor-not-allowed  h-14 text-2xl ml-2 mr-2 hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-white-400 rounded shadow">
        CLAIM
      </button>
    </div>
    <div
      className="w-10/12 h-0.5 bg-offwhite mt-12 mb-4 hidden 0xl:block"
      data-aos="fade"
    ></div>
  </div>
);

Sneakers.displayName = "Sneakers";
export default Sneakers;
