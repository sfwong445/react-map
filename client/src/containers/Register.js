import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import "./Register.css";

<<<<<<< HEAD
import LocationService from "../services/LocationService";
=======
>>>>>>> 653e16f5d14ebbcb1257c475554e2d2bfa9131b1
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
<<<<<<< HEAD
            latitude: "",
            longitude: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
=======
        };

        this.handleChange = this.handleChange.bind(this);
>>>>>>> 653e16f5d14ebbcb1257c475554e2d2bfa9131b1
        this.Register = this.Register.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
<<<<<<< HEAD
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
=======
    async Register() {
>>>>>>> 653e16f5d14ebbcb1257c475554e2d2bfa9131b1
        const response = await AuthenticationService.register(
            this.state.username,
            this.state.password,
            this.state.latitude,
            this.state.longitude
<<<<<<< HEAD
        )
        console.log(await response)
=======
        );
>>>>>>> 653e16f5d14ebbcb1257c475554e2d2bfa9131b1
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
<<<<<<< HEAD
                    <Button primary onClick={this.Register}>Submit</Button>
=======
                    <Button primary onClick={this.Register}>
                        Submit
                    </Button>
>>>>>>> 653e16f5d14ebbcb1257c475554e2d2bfa9131b1
                </Form>
            </div>
        );
    }
}

export default RegisterForm;
