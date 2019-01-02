import React, { Component } from "react";
import Title from "../components/Title/Title";
import TopNav from "../components/TopNav/TopNav";

const Home = () => (
<div>
    <TopNav  />
    <Title />
</div>
);

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