import React, { Component } from "react";
import Title from "../components/Title/Title";
import TopNav from "../components/TopNav/TopNav";
import Education from "../components/Education/Education";

class Home extends Component {
    render() {
        return (
            <div>
                <TopNav />
                <Title />
                <Education />
            </div>
        );
    }
};

export default Home;