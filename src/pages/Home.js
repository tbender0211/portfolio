import React, { Component } from "react";
import Title from "../components/Title/Title";
import Project from "../components/Projects/Project";
import Education from "../components/Education/Education";
import Work from "../components/Work/Work";
import { Grid, Row, Col } from "react-bootstrap";
import SideNav from "../components/SideNav/SideNav";
import "./main.css";

//Project images for thumbnails
import crystalcollector from "../components/Projects/images/crystalcollector.PNG";
// import raddit from "./images/raddit.PNG";
// import wowguessgame from "./images/wowguessgame.PNG";
// import moodmusic from "./images/moodmusic.PNG";
// import friendfinder from "./images/friendfinder.PNG";
// import wowmazon from "./images/wowmazon.PNG";

class Home extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <SideNav />
                    <Col md={10}>
                        <Title />
                        <Education />
                        <Project pic={crystalcollector} project="Raddit" description="Reddit-esque app using MySQL"
                         link="https://github.com/tbender0211/eiforya"/>
                    </Col>
                </Row>
            </Grid>
        );
    }
};

export default Home;