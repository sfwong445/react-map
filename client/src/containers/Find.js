import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
import LocationService from "../services/LocationService";

export class FindComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat1: "",
            lng1: "",
            lat2: "",
            lng2: "",
            distance: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.getDistance = this.getDistance.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    getDistance() {
        LocationService.getDistance(
            this.state.lat1,
            this.state.lng1,
            this.state.lat2,
            this.state.lng2
        ).then(result => {
            console.log(result)
            this.setState({
                distance: result.data.routes[0].legs[0].distance.text
            });
        });
    }

    render() {
        return (
            <div className="distance-container">
                <div className="app-distance">
                    <label>Latitude 1</label>
                    <Input value={this.state.lat1} name="lat1" onChange={this.handleChange} fluid />
                    <br />
                    <label>Longitude 1</label>
                    <Input value={this.state.lng1} name="lng1" onChange={this.handleChange} fluid />
                    <br />
                    <label>Latitude 2</label>
                    <Input value={this.state.lat2} name="lat2" onChange={this.handleChange} fluid />
                    <br />
                    <label>Longitude 2</label>
                    <Input value={this.state.lng2} name="lng2" onChange={this.handleChange} fluid />
                    <br />
                    <Button primary onClick={this.getDistance}>
                        Get Distance
                    </Button>
                    <br />
                    <br />
                    <label>Distance</label>
                    <Input value={this.state.distance} fluid />
                </div>
            </div>
        );
    }
}

export default FindComponent;
