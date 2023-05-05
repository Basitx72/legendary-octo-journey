import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Education from "./Components/Education";
import "./styles.css";

const siteProps = {
  name: "Abdul Basit",
  title: "Web Designer & Video Production",
  email: "basitx72@gmail.com",
  gitHub: "basitx72",
  instagram: "heyiambasit",
  linkedIn: "basit-xd",
  medium: "",
  twitter: "basit1x",
  youTube: "Basit7",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div id="main">
      <Navbar expand="md" bg="light" variant="light" sticky="top" expanded={!collapsed} onToggle={() => setCollapsed(!collapsed)}>
        <Navbar.Brand href="#">{siteProps.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Education />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
