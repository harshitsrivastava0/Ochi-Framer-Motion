import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marque from "./components/Marque";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Feactured from "./components/Feactured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
function App() {
  const locomotiveScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true },
  });

  return (
    <div className="w-full h-screen min-h-screen  bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <Eyes />
      <Feactured />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
