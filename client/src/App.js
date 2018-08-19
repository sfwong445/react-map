import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Button} from "semantic-ui-react";
import Home from "./containers/Home";
import Register from "./containers/Register";
import Login from './containers/Login';
import Find from './containers/Find';
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Welcome to React</h1>
                        <nav>
                            <Button as={Link}to="/" inverted>Home</Button>
                            <Button as={Link} to="/find" inverted>Find</Button>
                            <Button as={Link} to="/login" inverted>Login</Button>
                            <Button as={Link} to="/register" inverted>Register</Button>
                        </nav>
                    </header>
                    <nav />
                    <hr />
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/find" component={Find} />
                </div>
            </Router>
        );
    }
}

export default App;
