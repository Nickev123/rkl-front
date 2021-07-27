import React from "react";
import { provenance } from "../../components/ipfs_hashes";

export const short = (s) => `${s.substr(0, 7)}...${s.substr(s.length - 3, 3)}`;

const Provenance = () => (
  <div
    id="provenance"
    className="flex flex-col items-center justify-center px-5p text-white mb-16 mt-16"
  >
    <div className="flex flex-col justify-between text-center" data-aos="fade">
      <h2 className="font-sans mb-2  text-3xl yl-400 mb-3">Provenance</h2>
      <div className="w-20 h-0.5 bg-yellow-400  self-center mb-8"></div>
    </div>

    <div className="flex flex-col text-left font-serif mb-8">
      <p>
        <span className="font-sans">
          <b>OG IX</b>
        </span>{" "}
        - original index of the generated Rumble Kong
      </p>
      <p>
        <span className="font-sans">
          <b>IX</b>
        </span>{" "}
        - after the sell out or after a day (whichever is the soonest), a random
        starting index is generated. <b>IX = (OLD IX mod STARTING IX)</b>
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
                      og ix
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                    >
                      ix
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
                    <tr key={p.old_ix}>
                      <td
                        style={{ width: "10px" }}
                        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white"
                      >
                        {p.old_ix}
                      </td>
                      <td
                        style={{ width: "10px" }}
                        className="px-6 py-4 whitespace-nowrap text-sm text-white"
                      >
                        {p.new_ix}
                      </td>
                      <td
                        style={{ width: "100px" }}
                        className="px-6 py-4 whitespace-nowrap text-sm text-white"
                      >
                        {p.sha256}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        {p.ipfs}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        {p.arweave}
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
