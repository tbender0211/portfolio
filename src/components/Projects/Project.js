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


//Make props for each project
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
                    <p>Reddit-esque app using MySQL</p>
                    <p>
                    <Button bsStyle="primary" target="_blank" href="https://github.com/tbender0211/eiforya"><FontAwesomeIcon icon={faGithub} /></Button>
                    &nbsp;
                    </p>
                </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                <Thumbnail src={crystalcollector} alt="242x200">
                    <h3>Crystal Collector</h3>
                    <p>Simple click game using JavaScript</p>
                    <p>
                    <Button bsStyle="primary" target="_blank" href="https://github.com/tbender0211/crystal-collector"><FontAwesomeIcon icon={faGithub} /></Button>
                    &nbsp;
                    </p>
                </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                <Thumbnail src={moodmusic}alt="242x200">
                    <h3>Mood Music</h3>
                    <p>App using facial recognition software to detect the highest scoring emotion, using it to generate a random Spotify playlist</p>
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
                    <p>Simple JavaScript game where user guesses a World of Warcraft related word selected from an array</p>
                    <p>
                    <Button bsStyle="primary" target="_blank" href="https://github.com/tbender0211/word-guess-game"><FontAwesomeIcon icon={faGithub} /></Button>
                    </p>
                </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                <Thumbnail src={friendfinder} alt="242x200">
                    <h3>Friend Finder</h3>
                    <p>Uses Express to create a friend API; user is matched with most compatible friend by scoring survey responses</p>
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