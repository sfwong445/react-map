import React, { Component } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import LocationService from "../services/LocationService";

class LocationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addressValue: "",
            cityValue: "",
            stateValue: "",
            lat: "",
            lng: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.getGeoCoordinates = this.getGeoCoordinates.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    async getGeoCoordinates() {
        const result = await LocationService.getGeoCoding(
            this.state.addressValue,
            this.state.cityValue,
            this.state.stateValue
        );
        this.setState({
            lat: result.data.results[0].geometry.location.lat,
            lng: result.data.results[0].geometry.location.lng
        });
        console.log(typeof(this.state.lat));
        console.log(typeof(this.state.lng));
    }
    render() {
        return (
            <Form>
                <Form.Field>
                    <label>Street Address</label>
                    <input
                        placeholder="Street Address"
                        name="addressValue"
                        value={this.state.addressValue}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input
                        placeholder="City"
                        name="cityValue"
                        value={this.state.cityValue}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label>State</label>
                    <input
                        placeholder="State"
                        name="stateValue"
                        value={this.state.stateValue}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Button primary onClick={this.getGeoCoordinates}>
                    Submit
                </Button>
                <hr />
                <div className="data">
                    <Input label="latitude" value={this.state.lat} fluid />
                    <br />
                    <Input label="longitude" value={this.state.lng} fluid />
                </div>
            </Form>
        );
    }
}

export default LocationForm;
