import React from "react";
import "./title.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Title = props => (
    <div>
        <Jumbotron>
            <h1>Tara Bender</h1>
            <p>
                Full-stack Web Developer
            </p>
            <p>
                <Button bsStyle="primary"><FontAwesomeIcon icon="github" />Github</Button>
                <Button bsStyle="primary"><FontAwesomeIcon icon="linkedin" />LinkedIn</Button>
            </p>
        </Jumbotron>
    </div>
);