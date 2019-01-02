import React from "react";
import "./topNav.css";
import { Nav, Navbar, NavItem} from "react-bootstrap";

const TopNav = () => (
    <div>
        <Navbar inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Tara's Portfolio</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    Projects
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Contact
                </NavItem>
            </Nav>
        </Navbar>
    </div>
);

export default TopNav;