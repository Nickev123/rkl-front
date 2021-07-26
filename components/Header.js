import React, { useEffect, useState } from "react";
// import { useWeb3Context } from "web3-react";
import { useWeb3React } from "@web3-react/core";
import Image from "next/image";
import { slide as Menu } from "react-burger-menu";
import { Web3Provider } from "@ethersproject/providers";

import Modal from "../components/Modal";

import { useEagerConnect, useInactiveListener } from "../hooks";
import {
  injected,
  network,
  walletconnect,
  walletlink,
  ledger,
  trezor,
  lattice,
  frame,
  authereum,
  fortmatic,
  magic,
  portis,
  torus,
} from "../connectors";
import { Spinner } from "./Spinner";

var ConnectorNames;
(function (ConnectorNames) {
  ConnectorNames["Injected"] = "Injected";
  ConnectorNames["Network"] = "Network";
  ConnectorNames["WalletConnect"] = "WalletConnect";
  ConnectorNames["WalletLink"] = "WalletLink";
  ConnectorNames["Ledger"] = "Ledger";
  ConnectorNames["Trezor"] = "Trezor";
  ConnectorNames["Lattice"] = "Lattice";
  ConnectorNames["Frame"] = "Frame";
  ConnectorNames["Authereum"] = "Authereum";
  ConnectorNames["Fortmatic"] = "Fortmatic";
  ConnectorNames["Magic"] = "Magic";
  ConnectorNames["Portis"] = "Portis";
  ConnectorNames["Torus"] = "Torus";
})(ConnectorNames || (ConnectorNames = {}));

const connectorsByName = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.Network]: network,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.WalletLink]: walletlink,
  [ConnectorNames.Ledger]: ledger,
  [ConnectorNames.Trezor]: trezor,
  [ConnectorNames.Lattice]: lattice,
  [ConnectorNames.Frame]: frame,
  [ConnectorNames.Authereum]: authereum,
  [ConnectorNames.Fortmatic]: fortmatic,
  [ConnectorNames.Magic]: magic,
  [ConnectorNames.Portis]: portis,
  [ConnectorNames.Torus]: torus,
};

function getErrorMessage(error) {
  if (error instanceof NoEthereumProviderError) {
    return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network.";
  } else if (
    error instanceof UserRejectedRequestErrorInjected ||
    error instanceof UserRejectedRequestErrorWalletConnect ||
    error instanceof UserRejectedRequestErrorFrame
  ) {
    return "Please authorize this website to access your Ethereum account.";
  } else {
    console.error(error);
    return "An unknown error occurred. Check the console for more details.";
  }
}

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

// Header Component
// ------------------------------------------------------------------------------------------------------- //
const Header = () => {
  const context = useWeb3React();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context;

  const [open, setOpen] = useState(false);

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState();

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  // const triedEager = useEagerConnect();

  // if (!context.active && !context.error) {
  //   return <Spinner />;
  // } else if (context.error) {
  //   return <div>Error..</div>;
  // } else {

  return (
    <>
      <Modal open={open} setOpen={setOpen} />

      <header
        className="bg-grayColor h-24 items-center text-whiteColor inline-flex justify-between md:justify-evenly w-full px-5p"
        data-aos="fade"
      >
        <Image
          src="/assets/header/logo.png"
          alt="RKL Logo"
          width="96"
          height="96"
        />

        {/* Navigation for Desktop */}
        <nav className="hidden md:inline-flex text-xs sm:text-sm md:text-base justify-evenly w-3/5 max-w-3/5 font-sans font-semibold flex-wrap 2xs:flex-nowrap">
          <a
            className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
            href="#mint"
          >
            MINT
          </a>
          <a
            className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
            href="#game"
          >
            GAME
          </a>
          <a
            className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
            href="#team"
          >
            TEAM
          </a>
          <a
            className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
            href="#roadmap"
          >
            ROADMAP
          </a>
          <a
            className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
            href="#provenance"
          >
            PROVENANCE
          </a>
        </nav>

        {/* Social Links */}
        <div className="flex justify-center">
          <a
            className="mr-4"
            href="https://discord.gg/PVeQeRdXYT"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/assets/footer/discord.jpg"
              alt="Discord"
              width="32"
              height="32"
            />
          </a>
          <a
            href="https://twitter.com/RumbleKongs"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/assets/footer/twitter.png"
              alt="Twitter"
              width="32"
              height="32"
            />
          </a>
        </div>

        <div onClick={() => setOpen(true)}>
          <button className="h-14 text-2xl ml-2 mr-2 hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-white-400 rounded shadow">
            Connect
          </button>
        </div>

        {/* Navigation for Mobile */}
        <div className="md:hidden">
          <Menu right>
            <a
              className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
              href="#about"
            >
              ABOUT
            </a>
            <a
              className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
              href="#mint"
            >
              MINT
            </a>
            <a
              className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
              href="#game"
            >
              GAME
            </a>
            <a
              className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
              href="#team"
            >
              TEAM
            </a>
            <a
              className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
              href="#roadmap"
            >
              ROADMAP
            </a>
            <a
              className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
              href="#provenance"
            >
              PROVENANCE
            </a>
          </Menu>
        </div>
      </header>
    </>
  );
};
// ------------------------------------------------------------------------------------------------------- //

Header.displayName = "Header";
export default Header;
