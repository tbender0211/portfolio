import React from "react";
import "./title.css";
import { Jumbotron, Button, Grid, Row, Col, Image } from "react-bootstrap";


//Font awesome stuff for symbols
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);
library.add(faLinkedin);

const Title = () => (
    <div>
        <Grid>
            <Row>
                <Col md={8} mdOffset={2}>
                    <Jumbotron>
                        <h1>Tara Bender</h1>
                        <p>
                            Full-stack Web Developer
                        </p>
                        <p>
                            <Image src="/me-thumbnail.jpg" circle />
                        </p>
                        <p>
                            <Button bsStyle="primary"><FontAwesomeIcon icon={faGithub} /></Button>
                            <Button bsStyle="primary"><FontAwesomeIcon icon={faLinkedin} /></Button>
                        </p>
                    </Jumbotron>
                </Col>
            </Row>
       
        </Grid>
    </div>
);

export default Title;