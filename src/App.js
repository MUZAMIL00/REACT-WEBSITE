import React, { useState, useEffect } from "react";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Free from "./components/Free";
import Home from "./components/Home";
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import Release from "./components/Release";
//import ScrollToTop from "./components/ScrollToTop";
import Discord from "./components/discord";
import Faq from "./components/Faq";
import Carousel from "./components/Carousel";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Signup from "./components/Signup";
import JoinCommunity from "./components/JoinCommunity";
import SuperRare from "./components/SuperRare";
import scrollreveal from "scrollreveal";
import ReactDOM from 'react-dom';  
import "./sass/index.scss";
function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .free,
        .clients,
        .super-rare,
        .carousel,
        .roadmap,
        .team,
        .releases,
        .like,
        .faq,
        .community,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);
  return (
    // <div data-theme={theme} className="app-container">
    //   <Discord />
    //   <Navbar changeTheme={changeTheme} currentTheme={theme} />
    //   <Home />
    //   <Free />
    //   <Clients />
    //   <SuperRare />
    //   <Release />
    //   <Like />
    //   <Roadmap />
    //   <Team />
    //   <Faq />
    //   <JoinCommunity />
    //   <Footer />
    // </div>
    <div data-theme={theme}  className="app-container">
      <Discord />
      <Navbar changeTheme={changeTheme} currentTheme={theme}/>
      <Home />
      <SuperRare />
      <Carousel />
      <Roadmap />
      <Team />
      <Faq />
      <JoinCommunity />
      <Footer />
    </div>
  );
}

export default App;
