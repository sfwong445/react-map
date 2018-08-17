import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class LocationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addressValue: "",
            cityValue: "",
            stateValue: ""
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
                <Button primary>Submit</Button>
            </Form>
        );
    }
}

export default LocationForm;
