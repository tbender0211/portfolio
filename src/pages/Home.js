import React, { Component } from "react";
import Title from "../components/Title/Title";
import TopNav from "../components/TopNav/TopNav";
import Education from "../components/Education/Education";
import Work from "../components/Work/Work";
import { Grid, Row, Col } from "react-bootstrap";
import SideNav from "../components/SideNav/SideNav";
import "./main.css";

class Home extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <SideNav />
                    <Col md={10}>
                        <Title />
                        <Education />
                        <Work />
                    </Col>
                </Row>
            </Grid>
        );
    }
};

export default Home;