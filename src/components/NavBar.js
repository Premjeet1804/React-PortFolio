import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import leetcode from "../assets/img/leetcode.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import twitter from "../assets/img/twitter.png";
import github from "../assets/img/github-logo.png";
import mail from "../assets/img/gmail.png";
import { HashLink } from "react-router-hash-link";
import codechef from "../assets/img/codechef.png";
import youtube from "../assets/img/youtube.png";
import { BrowserRouter as Router } from "react-router-dom";
import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import { getDefaultNormalizer } from "@testing-library/react";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/premjeet-sahu-9a6958228/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon1} alt="" />
                </a>
                <a
                  href="https://github.com/Premjeet1804"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="" />
                </a>
                <a
                  href="https://leetcode.com/Premjeet1804/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={leetcode} alt="twitter" />
                </a>
                <a
                  href="https://twitter.com/why_Premjeet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitter} alt="twitter" />
                </a>
                <a
                  href="https://dev.to/premjeet1804"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={codechef} alt="twitter" />
                </a>
                <a
                  href="https://www.codechef.com/users/premjeet1804"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitter} alt="twitter" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCyqYCZaPaVng-kQsXDNX5MA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={youtube} alt="twitter" />
                </a>
                <a href="https://www.instagram.com/why_premjeet/reels/">
                  <img src={navIcon3} alt="" />
                </a>
                <a href="mailto:premjeetsahu254@gmail.com">
                  <img src={mail} alt="" />
                </a>
              </div>
              <a
                href="https://drive.google.com/file/d/1YZJjzRwpsiB34I4rxj_xi6Q6JzkN1h1V/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="">
                  <span>Resume</span>
                </button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
