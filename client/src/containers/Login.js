import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

import AuthenticationService from '../services/AuthenticationService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit() {
        AuthenticationService.login(this.state.username, this.state.password);
    }
    

    render() {
        return (
            <div className="container">
                <Form>
                    <Form.Field>
                        <label>Username</label>
                        <input
                            placeholder="Username"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            fluid
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            fluid
                        />
                    </Form.Field>
                    <Button primary onClick={this.handleSubmit}>Login</Button>
                </Form>
            </div>
        );
    }
}

export default Login;
