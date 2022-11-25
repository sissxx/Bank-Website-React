import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import InfoSection from "../components/InfoSection";
import {
  homeObgjOne,
  homeObgjTwo
} from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";
import HomePage from "../components/HomeSection";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HomePage />
      <InfoSection {...homeObgjOne} />
      <InfoSection {...homeObgjTwo} />
      <Services/>
      <Footer/>
    </>
  );
};

export default Home;
