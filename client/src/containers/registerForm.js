import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import "./Register.css";

class RegisterForm extends Component {

    render() {
        return (
            <div className="register-app">
                <Form className="register-form">
                    <Form.Input label="Username" placeholder="Username" />
                    <Form.Input
                        label="Password"
                        type="Password"
                        placeholder="Password"
                    />
                    <Form.Input label="Address" placeholder="Address" />
                    <Form.Input label="City" placeholder="City" />
                    <Form.Input label="State" placeholder="State" />
                    <Button primary>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default RegisterForm;
