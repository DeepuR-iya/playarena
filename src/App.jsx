import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MarqueeItem from "../components/Marquee";
import FeatureBlock from "../components/Subscriptions";
import FormEvents from "../components/FormEvents";
import Member from "../components/Member";
import Footer from "../components/Footer";

const App = () => {
  return (
    <div className="bg-neutral-100 min-h-screen">
      <Navbar />
      <HeroSection />
      <MarqueeItem />
      <FeatureBlock />
      <FormEvents />
      <Member />
      <Footer />
    </div>
  );
};

export default App;
