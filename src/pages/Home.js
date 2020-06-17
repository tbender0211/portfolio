import React, { Component } from 'react';
import Title from '../components/Title/Title';
import Education from '../components/Education/Education';
import Work from '../components/Work/Work';
import { Grid, Row, Col } from 'react-bootstrap';
import TopNav from '../components/TopNav/TopNav';
import './main.css';

class Home extends Component {
    render() {
        return (
            <Grid>
            <TopNav />
                <Row>
                    <Col>
                        <Title />
                    </Col>
                </Row>
            </Grid>
        );
    }
};

export default Home;