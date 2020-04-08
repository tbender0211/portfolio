import React from "react";
import "./Project.css";
import { Col, Thumbnail, Button } from "react-bootstrap";

//Font awesome stuff
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Project extends React.Component {
    render() {
        return (
            <Col md={8} mdOffset={2}>
                <Thumbnail src={this.props.pic} alt="242x200">
                    <h3 className="project">
                        <span>{this.props.project}</span>
                    </h3>
                    <p className="description">
                        <span>{this.props.description}</span>
                    </p>
                    <p>
                        <Button variant="dark" target="_blank" href={this.props.link}>
                            <FontAwesomeIcon icon={faGithub} />
                        </Button>
                        &nbsp;
                    </p>
                </Thumbnail>
            </Col>
        );
    }
};

export default Project;