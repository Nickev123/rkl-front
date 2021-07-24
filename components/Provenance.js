import React from "react";

const provenance = [
  {
    old_ix: "42",
    new_ix: "21",
    sha256: "7843ce6951b1b0a8b9442a434192e4f5cce7d05c1c71d35f2c298fdb687f584f",
    ipfs: "QmVQCYYuURJF4reoFe42HzByNzii7ZKyTNNVG3doch627U",
    arweave: "hKMMPNh_emBf8v_at1tFzNYACisyMQNcKzeeE1QE9p8",
  },
];

export const short = (s) => `${s.substr(0, 7)}...${s.substr(s.length - 3, 3)}`;

const Provenance = () => (
  <div
    id="provenance"
    className="flex flex-col items-center justify-center px-5p text-white mb-16"
  >
    <div className="flex flex-col justify-between text-center" data-aos="fade">
      <h2 className="font-sans mb-2  text-3xl yl-400 mb-3">Provenance</h2>
      <div className="w-20 h-0.5 bg-yellow-400  self-center mb-8"></div>
    </div>

    <div className="flex flex-col text-left font-serif mb-8">
      <p>
        <span className="font-sans">
          <b>OLD IX</b>
        </span>{" "}
        - original index of the generated Rumble Kong
      </p>
      <p>
        <span className="font-sans">
          <b>NEW IX</b>
        </span>{" "}
        - after the sell out or after a day (whichever is the soonest), a random
        starting index is generated. <b>NEW IX = (OLD IX mod STARTING IX)</b>
      </p>
      <p>
        <span className="font-sans">
          <b>SHA256</b>
        </span>{" "}
        - image sha256 hash
      </p>
      <p>
        <span className="font-sans">
          <b>IPFS</b>
        </span>{" "}
        - image IPFS CID (content ID)
      </p>
      <p>
        <span className="font-sans">
          <b>ARWEAVE</b>
        </span>{" "}
        - arweave data transaction ID
      </p>
    </div>

    <div className="w-12/12 md:w-10/12 flex flex-col justify-center flex-wrap">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div
              className="shadow overflow-hidden border-b border-white-200 sm:rounded-lg"
              style={{ maxHeight: "566px", overflowY: "scroll" }}
            >
              <table className="min-w-full divide-y divide-white-200">
                <thead className="bg-yellow-400">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                    >
                      old ix
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                    >
                      new ix
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                    >
                      sha256
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                    >
                      ipfs
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider relative"
                    >
                      arweave
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-black divide-y divide-white">
                  {provenance.map((p) => (
                    <tr key={p.new_ix}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        {p.old_ix}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        {p.new_ix}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        {short(p.sha256)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        {short(p.ipfs)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        {short(p.arweave)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <div
      className="w-10/12 h-0.5 bg-offwhite   hidden 0xl:block"
      data-aos="fade"
    ></div> */}
  </div>
);
// ------------------------------------------------------------------------------------------------------- //

Provenance.displayName = "Provenance";
export default Provenance;
