import React from "react";
import "./Work.css";
import { Grid, Row, Col } from "react-bootstrap";

const Work = () => (
            <Row id="experience">
                <Col md={10} mdOffset={1}>
                    <br />
                    <h1>Work Experience</h1>
                    <br />

                        <p><b>Merchandising Operations Leader</b></p>
                        <p>Petco - Kansas City, MO</p>
                        <p>May 2018 to Present</p>
                        <ul>
                            <li>
                                Oversee day-to-day operations of the store
                            </li>
                            <li>
                                Manage a team of sales associates in order to ensure optimal guest experience
                            </li>
                            <li>
                                Perform weekly inventory management reports
                            </li>
                        </ul>

                    <hr />

                        <p><b>Host/Server</b></p>
                        <p>Blue Koi Noodles & Dumplings - Leawood, KS</p>
                        <p>January 2016 to May 2018</p>
                        <ul>
                            <li>
                                Function efficiently in a fast-paced, occasionally stressful work environment
                            </li>
                            <li>
                                Display an elevated level of customer service and patience, even in difficult situations
                            </li>
                            <li>
                                Demonstrate strong teamwork abilities with coworkers to ensure pleasant experience for patrons
                            </li>
                        </ul>

                    <hr />

                        <p><b>Business Manager</b></p>
                        <p>La~de~da - Kansas City, MO</p>
                        <p>July 2015 to January 2016</p>
                        <ul>
                            <li>
                                Assisted in the establishment of a new store location
                            </li>
                            <li>
                                Monitored sales and made reordering decisions
                            </li>
                            <li>
                                Operated social media websites to reach potential customers
                            </li>
                        </ul>

                </Col>
            </Row>
);

export default Work;