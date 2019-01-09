import React from "react";
import "./Project.css";
import { Grid, Row, Col, Thumbnail, Button } from "react-bootstrap";

//Project images for thumbnails
import crystalcollector from "./images/crystalcollector.PNG";
import raddit from "./images/raddit.PNG";
import wowguessgame from "./images/wowguessgame.PNG";
import moodmusic from "./images/moodmusic.PNG";
import friendfinder from "./images/friendfinder.PNG";
import wowmazon from "./images/wowmazon.PNG";

//Font awesome stuff
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = () => (
    <Row id="projects">
        <Col md={10} mdOffset={1}>
            <Row>
                <br />
                <h1>Projects</h1>
                <br />
                <Col xs={6} md={4}>
                <Thumbnail src={raddit} alt="242x200">
                    <h3>Raddit</h3>
                    <p></p>
                    <p>
                    <Button bsStyle="primary" target="_blank" href="https://github.com/tbender0211/eiforya"><FontAwesomeIcon icon={faGithub} /></Button>
                    &nbsp;
                    </p>
                </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                <Thumbnail src={crystalcollector} alt="242x200">
                    <h3>Crystal Collector</h3>
                    <p></p>
                    <p>
                    <Button bsStyle="primary" target="_blank" href="https://github.com/tbender0211/crystal-collector"><FontAwesomeIcon icon={faGithub} /></Button>
                    &nbsp;
                    </p>
                </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                <Thumbnail src={moodmusic}alt="242x200">
                    <h3>Mood Music</h3>
                    <p></p>
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
                    <h3>Word Guess Game</h3>
                    <p></p>
                    <p>
                    <Button bsStyle="primary" target="_blank" href="https://github.com/tbender0211/word-guess-game"><FontAwesomeIcon icon={faGithub} /></Button>
                    </p>
                </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                <Thumbnail src={friendfinder} alt="242x200">
                    <h3>Friend Finder</h3>
                    <p></p>
                    <p>
                    <Button bsStyle="primary" target="_blank" href="https://github.com/tbender0211/FriendFinder"><FontAwesomeIcon icon={faGithub} /></Button>
                    </p>
                </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                <Thumbnail src={wowmazon} alt="242x200">
                    <h3>WoWmazon</h3>
                    <p>Node app simulating the World of Warcraft Auction House</p>
                    <p>
                    <Button bsStyle="primary" target="_blank" href="https://github.com/tbender0211/WoWmazon"><FontAwesomeIcon icon={faGithub} /></Button>
                    </p>
                </Thumbnail>
                </Col>
            </Row>
        </Col>
    </Row>
);

export default Project;