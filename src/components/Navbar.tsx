import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
//import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className="nav-teste"
      // className={navColour ? "sticky" : "navbar"}
    >
      <Container className="w-screen  border border-violet-1">
        <Navbar.Brand href="/" className="d-flex">
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
        </Navbar.Brand>
        {/* <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle> */}
        <Navbar.Collapse id="responsive-navbar-nav opacity-0">
          <Nav
            className=" text-gray-100  bg-violet-2 flex justify-end"
            defaultActiveKey="#home"
          >
            <Nav.Item className="fork-btn m-1">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => updateExpanded(false)}
                >
                  <span className="flex">
                    <AiOutlineHome className="m-1" /> Home
                  </span>
                </Nav.Link>
              </Nav.Item>
            </Nav.Item>

            <Nav.Item className="fork-btn m-1">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/sobre"
                  onClick={() => updateExpanded(false)}
                >
                  <span className="flex">
                    <AiOutlineUser className="m-1" /> Sobre
                  </span>
                </Nav.Link>
              </Nav.Item>
            </Nav.Item>

            <Nav.Item className="fork-btn m-1">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/projetos"
                  onClick={() => updateExpanded(false)}
                >
                  <span className="flex">
                    <AiOutlineFundProjectionScreen className="m-1" /> Projetos
                  </span>
                </Nav.Link>
              </Nav.Item>
            </Nav.Item>

            <Nav.Item>
              <Button
                href="https://github.com/eosantos"
                target="_blank"
                className="fork-btn-inner rounded flex m-10"
              >
                <CgGitFork className="text-xl flex" />
                <AiFillStar className="text-xl flex" />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
