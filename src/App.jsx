import React, { useState } from "react";
import { Navbar1 } from "./components/Navbar1";
import { Navbar2 } from "./components/Navbar2";
import { Content } from "./components/content";
import { Footer } from "./components/Footer";
import { Featured } from "./components/Featured";
import { ShopByIcon } from "./components/ShopByIcon";
import { DontMiss } from "./components/DontMiss";
import { TrendingNow } from "./components/TrendingNow";
import { SBS } from "./components/SBS";

function App() {
 
  return (
    <>
      <div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <Navbar1 />
      </div>
      <Navbar2 />
      <Content />
      <Featured />
      <ShopByIcon/>
      <DontMiss/>
      <TrendingNow/>
      <SBS/>
      <Footer />
    </>
  );
}

export default App;
