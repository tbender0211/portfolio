import React from "react";
import "./Education.css";
import { Grid, Row, Col } from "react-bootstrap";

const Education = () => (
            <Row id="education">
                <Col md={10} mdOffset={1}>
                    <h1>Education</h1>
                    <br />
                    <h2><b>The University of Kansas</b>, Overland Park, KS</h2>
                    <p><i>Full Stack Web Development Bootcamp</i></p>
                    <p>An intensive 24-week long boot camp dedicated to designing and building web
                        applications. Skills learned consisted of HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js,
                        MySQL, MongoDB, Express, Handlebars JS, & React J</p>
                    <hr />
                    <h2><b>The University of Kansas</b>, Lawrence, KS</h2>
                    <p><i>Bachelor of Arts in Economics</i></p>
                    <p>GPA: 3.16</p>
                </Col>
            </Row>
);

export default Education;