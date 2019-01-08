import React from "react";
import "./SideNav.css";
import { Nav, Col, NavItem } from "react-bootstrap";

function handleSelect(selectedKey) {
    console.log(`selected ${selectedKey}`);
};


const SideNav = () => (
    <Col md={2} id="sidenav">
        <div id="fixed">
            <h3>Tara Bender</h3>
            <p>Full-stack Web Developer</p>
            <br />
            <p>
                <Nav id="nav" bsStyle="pills" stacked onSelect={handleSelect}>
                    <NavItem eventKey={0} href="#intro">
                        Intro
                    </NavItem>
                    <NavItem eventKey={1} href="#education">
                        Education
                    </NavItem>
                    <NavItem eventKey={2} href="#experience">
                        Experience
                    </NavItem>
                    <NavItem eventKey={3} href="#projects">
                        Projects
                    </NavItem>
                    
                </Nav>
            </p>
        </div>
    </Col>
);

export default SideNav;