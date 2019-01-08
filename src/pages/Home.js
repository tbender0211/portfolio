import React, { Component } from "react";
import Title from "../components/Title/Title";
import TopNav from "../components/TopNav/TopNav";
import Education from "../components/Education/Education";
import Work from "../components/Work/Work";

class Home extends Component {
    render() {
        return (
            <div>
                <TopNav />
                <Title />
                <Education />
                <Work />
            </div>
        );
    }
};

export default Home;