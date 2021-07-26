import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Modal({ open, setOpen }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        open={open}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="text-black text-center inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full sm:p-6">
              <div className="sm:grid sm:grid-cols-3 sm:gap-3 sm:grid-flow-row-dense">
                <button className="h-14 mb-12 text-2xl hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-black rounded shadow">
                  Metamask / Browser
                </button>
                <button className="h-14 mb-12 text-2xl hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-black rounded shadow">
                  Walletconnect
                </button>
                <button className="h-14 mb-12 text-2xl hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-black rounded shadow">
                  Walletlink
                </button>
                <button className="h-14 mb-12 text-2xl hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-black rounded shadow">
                  Ledger
                </button>
                <button className="h-14 mb-12 text-2xl hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-black rounded shadow">
                  Trezor
                </button>
                <button className="h-14 mb-12 text-2xl hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-black rounded shadow">
                  Lattice
                </button>
                <button className="h-14 mb-12 text-2xl hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-black rounded shadow">
                  Frame
                </button>
                <button className="h-14 mb-12 text-2xl hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-black rounded shadow">
                  Authereum
                </button>
                <button className="h-14 mb-12 text-2xl hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-black rounded shadow">
                  Fortmatic
                </button>
                <button className="h-14 mb-12 text-2xl hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-black rounded shadow">
                  Magic
                </button>
                <button className="h-14 mb-12 text-2xl hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-black rounded shadow">
                  Portis
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
