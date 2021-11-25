import "./header.css";
import { useState } from "react";
import logo from "../../assets/images/logos/mainLogo.png";
import logo1 from "../../assets/images/logos/swim.png";
import {
  Menu,
  Close,
  ChevronRight,
  ChevronLeft,
  Instagram,
} from "@material-ui/icons";
import discordImg from "../../assets/images/icons/discord.svg";
const Header = () => {
  const [sideBar, setSideBar] = useState(false);
  const scrollTo_Section = (sec_id) => {
    let element = document.getElementById(sec_id);
    const yOffset = -97;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <>
      <header className="web-header">
        <div className="cs_row header-container">
          <div className="header-logo-area cs_row">
            <a
              onClick={() => scrollTo_Section("home")}
              href="javascript:void(0)"
              className="cs_row"
            >
              <img
                className="header-main-logo"
                loading="lazy"
                src={logo}
                alt="KRUICY KROCS"
              />
            </a>
            <img
              className="krocs-logo"
              loading="lazy"
              src={logo1}
              alt="KROCS"
            />
          </div>
          <div className="header-right-area">
            <a
              href="https://discord.gg/kruisykrocs"
              target="_blank"
              className="header-join-btn cs_row"
            >
              Join Discord <img loading="lazy" src={discordImg} alt="" />
            </a>
            <div className="menu-btn">
              {sideBar ? (
                <Close
                  onClick={() => setSideBar(false)}
                  className="menu-icon"
                />
              ) : (
                <Menu onClick={() => setSideBar(true)} className="menu-icon" />
              )}
            </div>
          </div>
        </div>
        <div className="sidebar-open-btn" onClick={() => setSideBar(true)}>
          <ChevronLeft className="chev-icon" />
        </div>
        {sideBar && (
          <div
            onClick={() => setSideBar(false)}
            className="backdrop-sidebar"
          ></div>
        )}
        <nav className={`side-bar-wrapper ${sideBar ? "opened-sidebar" : ""}`}>
          <div className="side-logo">
            <img loading="lazy" src={logo} alt="KRUICY KROCS" />
          </div>
          <ul>
            <li>
              <a
                onClick={() => {
                  setSideBar(false);
                  scrollTo_Section("home");
                }}
                href="javascript:void(0)"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setSideBar(false);
                  scrollTo_Section("roadmap");
                }}
                href="javascript:void(0)"
              >
                RoadMap
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setSideBar(false);
                  scrollTo_Section("devroadmap");
                }}
                href="javascript:void(0)"
              >
                Development RoadMap
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setSideBar(false);
                  scrollTo_Section("faq");
                }}
                href="javascript:void(0)"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setSideBar(false);
                  scrollTo_Section("team");
                }}
                href="javascript:void(0)"
              >
                Team
              </a>
            </li>
          </ul>
          <div className="social sidebar-socials cs_row">
            <div className="link">
              <a
                href="https://twitter.com/KruisyKrocs"
                target="_blank"
                rel="noopener"
                className="twitter cs_row"
              ></a>
            </div>
            <div className="link">
              <a
                href="https://discord.gg/kruisykrocs"
                target="_blank"
                rel="noopener"
                className="discord cs_row"
              ></a>
            </div>
            <div className="link">
              <a
                href="https://www.instagram.com/kruisykrocs/"
                target="_blank"
                rel="noopener"
                className="opensea cs_row"
              >
                <Instagram className="insta-icon" />
              </a>
            </div>
          </div>
          <div className="sidebar-close-btn" onClick={() => setSideBar(false)}>
            <ChevronRight className="chev-icon" />
          </div>
        </nav>
      </header>
      <div className="header-spacer"></div>
    </>
  );
};

export default Header;
