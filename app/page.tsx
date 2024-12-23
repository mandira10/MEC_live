"use client";

import { Beyond } from "@/components/beyond";
import { Elevate } from "@/components/elevate";
import Employers from "@/components/employers";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Overview from "@/components/overview";
import { Scroll } from "@/components/scroll";
import { Pablo } from "@/components/ui/pablo";
import { useEffect } from "react";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="App flex items-center justify-center flex-col">
        <Hero></Hero>
        <Elevate></Elevate>
        <Pablo></Pablo>
        <Overview></Overview>
        <Scroll></Scroll>
        <div className="h-[70vh]"></div>
        <Employers></Employers>
        {/* <Beyond></Beyond> */}
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
