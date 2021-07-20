import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";
import Mint from "../components/Mint";
import Game from "../components/Game";
import Team from "../components/Team";
import Roadmap from "../components/Roadmap";
import Provenance from "../components/Provenance";
import Footer from "../components/Footer";
// import Overlay from '../components/Overlay';

const Index = () => (
  <>
    <Head>
      <link href="https://fonts.cdnfonts.com/css/strasua" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap"
        rel="stylesheet"
      />
      <title>RUMBLE KONG LEAGUE</title>
    </Head>

    <Header />
    <About />
    <Mint />
    <Game />
    <Team />
    <Roadmap />
    <Provenance />
    <Footer />

    {/* <Overlay/> */}
  </>
);

Index.displayName = "Index";
export default Index;
