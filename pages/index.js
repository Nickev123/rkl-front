import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";
import Mint from "../components/Mint";
import Game from "../components/Game";
import Team from "../components/Team";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";
// import Overlay from '../components/Overlay';

const Index = () => (
  <>
    <Head>
      <link href="http://fonts.cdnfonts.com/css/strasua" rel="stylesheet" />
      <title>RUMBLE KONG LEAGUE</title>
    </Head>

    <Header />
    <About />
    <Mint />
    <Game />
    <Team />
    <Roadmap />
    <Footer />

    {/* <Overlay/> */}
  </>
);

Index.displayName = "Index";
export default Index;
