import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

import { connect } from "react-redux";
import { Login } from "../stores/actions";

import AuthenticationService from "../services/AuthenticationService";

class LoginForm extends Component {
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

    async handleSubmit() {
        try {
            const response = await AuthenticationService.login(
                this.state.username,
                this.state.password
            );
            this.props.handleLogin(response.data._id);
            this.props.history.push("/");
        } catch (err) {
            console.log(err);
            alert("An error has occured while logging in");
        }
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
                        />
                    </Form.Field>
                    <Button primary onClick={this.handleSubmit}>
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}

function mapStatetoProps(state) {
    return {
        isLoggedOn: state.isLoggedOn,
        token: state.token
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleLogin: token => dispatch(Login(token))
    };
}

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(LoginForm);
