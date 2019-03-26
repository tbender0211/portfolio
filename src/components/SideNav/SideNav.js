import React from "react";
import "./SideNav.css";
import { Nav, Col, NavItem } from "react-bootstrap";



class SideNav extends React.Component {
    // handleSelect(selectedKey) {
    //     console.log(`selected ${selectedKey}`);
    // }
    render() {
        return (
            <Col md={2} id="sidenav">
                <div id="fixed">
                    <br />
                    <p>
                        <Nav id="nav" bsStyle="pills" stacked >
                            <NavItem  eventKey={0} href="#intro">
                                Intro
                            </NavItem>
                            <NavItem eventKey={1} href="#education">
                                Education
                            </NavItem>
                            <NavItem eventKey={3} href="#projects">
                                Projects
                            </NavItem>
                            
                        </Nav>
                    </p>
                </div>
            </Col>
        );
    }
};

export default SideNav;