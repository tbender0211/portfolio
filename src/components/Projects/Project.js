import React from "react";
import "./Project.css";
import { Grid, Row, Col, Thumbnail, Button } from "react-bootstrap";

//Project images for thumbnails
import crystalcollector from "./images/crystalcollector.PNG";
import raddit from "./images/raddit.PNG";
import wowguessgame from "./images/wowguessgame.PNG";
import moodmusic from "./images/moodmusic.PNG";

//Font awesome stuff
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = () => (

    <Grid>

        <Row>
            <Col xs={6} md={4}>
            <Thumbnail src={raddit} alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                <Button bsStyle="primary" target="_blank" href="https://github.com/tbender0211/eiforya"><FontAwesomeIcon icon={faGithub} /></Button>
                &nbsp;
                </p>
            </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
            <Thumbnail src={crystalcollector} alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                <Button bsStyle="primary" target="_blank" href="https://github.com/tbender0211/crystal-collector"><FontAwesomeIcon icon={faGithub} /></Button>
                &nbsp;
                </p>
            </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
            <Thumbnail src={moodmusic}alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                <Button bsStyle="primary" target="_blank" href="https://github.com/tbender0211/mood-music"><FontAwesomeIcon icon={faGithub} /></Button>
                &nbsp;
                </p>
            </Thumbnail>
            </Col>
        </Row>

        <Row>
            <Col xs={6} md={4}>
            <Thumbnail src={wowguessgame} alt="242x200">
                <h3>Thumbnail Label</h3>
                <p>Description</p>
                <p>
                <Button bsStyle="primary" target="_blank" href="https://github.com/tbender0211/word-guess-game"><FontAwesomeIcon icon={faGithub} /></Button>
                </p>
            </Thumbnail>
            </Col>
        </Row>

    </Grid>
);

export default Project;