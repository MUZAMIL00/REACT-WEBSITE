import React from "react";
import logo from "../assets/logo.png";
import { BsFacebook, BsTwitter, BsInstagram ,BsDiscord } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
export default function Footer() {
  const links = [
    {
      data: ["About", "Terms", "Legal"],
    },
    {
      data: ["OpenSea", "Maker", "Learn"],
    },
    {
      data: ["Press", "Support"],
    },
    {
      title: "Social",
      data: ["Twiiter", "Instagram"],
    },
  ];
  const socialLink = [
    <BsDiscord />,
    <BsTwitter />,
    <BsInstagram />,
  ];
  return (
    <footer>
      <div className="upper" id="footer">
        <div className="brand-container">
          <ul>
            <li>
              <a href="https://discord.gg/7cUbfKMY" className="icon-link" target="_blank"><BsDiscord /></a>
            </li>
            <li>
            <a href="https://discord.gg/7cUbfKMY" className="icon-link" target="_blank"><BsTwitter /></a>
            </li>
            <li>
            <a href="https://discord.gg/7cUbfKMY" className="icon-link" target="_blank"><BsInstagram /></a>
            </li>
          </ul>
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <p>Terms &amp; Conditions</p>
        </div>
        <div className="links">
        </div>
      </div>
      <div className="lower">
        <span>&copy; Copyright 2022 Alpha Lions. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
