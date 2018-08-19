import React, { Component } from "react";
import { Button, Form } from 'semantic-ui-react';

class Login extends Component {
    render() {
        return (
            <div className="container">
                <Form>
                    <Form.Field>
                        <label>Username</label>
                        <input placeholder="Username" fluid/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input type="password" placeholder="Password" fluid />
                    </Form.Field>
                    <Button primary>Login</Button>
                </Form>
            </div>
        );
    }
}

export default Login;
