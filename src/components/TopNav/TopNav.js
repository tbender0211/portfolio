import React from "react";
import "./topNav.css";
import { Nav, Navbar, NavItem} from "react-bootstrap";

const TopNav = () => (
        <Navbar bg="dark" variant="dark">
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Tara Bender</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
                <NavItem eventKey={1} href="/projects">
                    Projects
                </NavItem>
                <NavItem eventKey={2} href="/contact">
                    Contact
                </NavItem>
            </Nav>
        </Navbar>
);

export default TopNav;