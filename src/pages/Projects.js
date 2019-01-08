import React, { Component } from "react";
import Project from "../components/Projects/Project";
import TopNav from "../components/TopNav/TopNav";

class Projects extends Component {
    render() {
        return (
            <div>
                <TopNav />
                <Project />
            </div>
        )
    }
};

export default Projects;