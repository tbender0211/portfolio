import React, { Component } from "react";
import Title from "../components/Title/Title";
import TopNav from "../components/TopNav/TopNav";

class Home extends Component {
    render() {
        return (
            <div>
                <TopNav />
                <Title />
            </div>
        );
    }
};

export default Home;