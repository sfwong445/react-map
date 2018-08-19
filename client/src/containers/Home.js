import React, { Component } from "react";
import LocationForm from "./locationForm";
import "./Home.css";

class Home extends Component {
    render() {
        return (
            <div className="App-Home">
                <div className="address-form">
                    <LocationForm />
                </div>
            </div>
        );
    }
}

export default Home;
