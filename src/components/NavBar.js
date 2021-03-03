import React from "react";
import "./NavBar.css";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import wallet from "../assets/wallet.svg";

function NavBar() {
  return (
    <div className="NavBar">
      <Navbar className="NavBar__Nav">
        <Navbar.Brand href="#home">
          <img
            src="https://about.gitlab.com/images/press/logo/png/gitlab-logo-1-color-white-stacked-rgb.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
        <Button className="NavBar__btn">
          <img src={wallet} alt="wallet icon" />
          Connect to Wallet
        </Button>
      </Navbar>
    </div>
  );
}

export default NavBar;
