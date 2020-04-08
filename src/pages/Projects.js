import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import TopNav from "../components/TopNav/TopNav";
import Project from "../components/Projects/Project";

import crystalcollector from "../components/Projects/images/crystalcollector.PNG";
import raddit from "../components/Projects/images/raddit.PNG";
import wowguessgame from "../components/Projects/images/wowguessgame.PNG";
import moodmusic from "../components/Projects/images/moodmusic.PNG";
import friendfinder from "../components/Projects/images/friendfinder.PNG";
import wowmazon from "../components/Projects/images/wowmazon.PNG";

class Projects extends Component {
    render() {
        return (
            <Grid>
                <TopNav />
                <Row id="projects">
                    <Col md={10} mdOffset={1}>
                        <Row>
                            <br />
                            <br />
                            <Project pic={raddit} project="Raddit" description="Reddit-esque app using MySQL"
                                link="https://github.com/tbender0211/eiforya"/>
                            <Project pic={crystalcollector} project="Crystal Collector" description="Simple click game using JavaScript"
                                link="https://github.com/tbender0211/crystal-collector"/>
                            <Project pic={moodmusic} project="Mood Music" description="App using facial recognition software to detect the highest emotion to generate Spotify playlist"
                                link="https://github.com/tbender0211/mood-music"/>
                            <Project pic={wowguessgame} project="Word Guess Game" description="Simple JavaScript game where user guesses a World of Warcraft related word"
                                link="https://github.com/tbender0211/word-guess-game"/>
                            <Project pic={friendfinder} project="Friend Finder" description="User is matched with most compatible friend through survey responses"
                                link="https://github.com/tbender0211/FriendFinder"/>
                            <Project pic={wowmazon} project="WoWmazon" description="Node app simulating the World of Warcraft Auction House"
                                link="https://github.com/tbender0211/WoWmazon"/>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Projects;