import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import "./Register.css";

import AuthenticationService from "../services/AuthenticationService";

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            address: "",
            city: "",
            state: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.Register = this.Register.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async Register() {
        await AuthenticationService.register(
            this.state.username,
            this.state.password,
            this.state.latitude,
            this.state.longitude
        );
    }
    render() {
        const { store, Login } = this.props;
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
                    <Button primary onClick={this.Register}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default RegisterForm;
