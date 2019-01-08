import React from "react";
import "./title.css";
import { Jumbotron, Button, Grid, Row, Col, Image } from "react-bootstrap";
import methumbnail from "./methumbnail.jpg";


//Font awesome stuff for symbols
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);
library.add(faLinkedin);

const Title = () => (
 

            <Row id="main-content">
                <Col md={10} mdOffset={1}>
                    <Jumbotron id="intro">
                        <div class="img"></div>
                        <div class="container">
                            <h1>Tara Bender</h1>
                            <p>
                                Full-stack Web Developer
                            </p>
                            <p>
                                <Image id="me" src={methumbnail} circle responsive />
                            </p>
                            <p>
                                <Button bsStyle="primary" target="_blank" href="https://github.com/tbender0211"><FontAwesomeIcon icon={faGithub} /></Button>
                                <Button bsStyle="primary" target="_blank" href="https://www.linkedin.com/in/tara-bender-008377b1/"><FontAwesomeIcon icon={faLinkedin} /></Button>
                            </p>
                        </div>
                    </Jumbotron>
                </Col>
            </Row>    


);

export default Title;