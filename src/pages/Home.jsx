import React from "react";
import Hero from "../layouts/Hero";
import About from "../layouts/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ButtonBackTop from "../components/ButtonBackTop";

export default function Home() {
  return (
    <React.Fragment>
      {/* set position of element to the center of body */}
      <div className='wrapper'>
        <Navbar /> {/* Navigation Bar element in the top of body */}
        <Hero /> {/* Hero Landing Page Section */}
        <About /> {/* About Section */}
        <Footer /> {/* Footer to write copyright in the bottom of body */}
      </div>
      {/* Button Back to Top */}
      <ButtonBackTop />
    </React.Fragment>
  );
}
