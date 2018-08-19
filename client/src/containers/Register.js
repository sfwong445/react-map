import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import "./Register.css";

import LocationService from "../services/LocationService";
import AuthenticationService from "../services/AuthenticationService";

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            address: "",
            city: "",
            state: "",
            latitude: "",
            longitude: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.Register = this.Register.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    async getCoordinates() {
        const result = await LocationService.getGeoCoding(
            this.state.address,
            this.state.city,
            this.state.state
        );
        this.setState({
            latitude: result.data.results[0].geometry.location.lat,
            longitude: result.data.results[0].geometry.location.lng
        });
        console.log(this.state)
    }
    async Register() {
        await this.getCoordinates();
        const response = await AuthenticationService.register(
            this.state.username,
            this.state.password,
            this.state.latitude,
            this.state.longitude
        )
        console.log(await response)
    }

    render() {
        return (
            <div className="register-app">
                <Form className="register-form">
                    <Form.Input
                        label="Username"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="Password"
                        type="Password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="Address"
                        placeholder="Address"
                        name="address"
                        value={this.state.address}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="City"
                        placeholder="City"
                        name="city"
                        value={this.state.city}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="State"
                        placeholder="State"
                        name="state"
                        value={this.state.state}
                        onChange={this.handleChange}
                    />
                    <Button primary onClick={this.Register}>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default RegisterForm;
