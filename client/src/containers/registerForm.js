import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import "./Register.css";

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
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="register-app">
                <Form className="register-form">
                    <Form.Input
                        label="Username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="Password"
                        type="Password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="Address"
                        placeholder="Address"
                        value={this.state.address}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="City"
                        placeholder="City"
                        value={this.state.city}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="State"
                        placeholder="State"
                        value={this.state.state}
                        onChange={this.handleChange}
                    />
                    <Button primary>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default RegisterForm;
