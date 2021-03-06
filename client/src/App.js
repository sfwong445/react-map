import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import { connect } from "react-redux";
import { Logout } from "./stores/actions";
import { Button } from "semantic-ui-react";
import Home from "./containers/Home";
import CreatePost from "./containers/CreatePost";
import Find from "./containers/Find";
import Login from "./containers/Login";
import Register from "./containers/Register";
import EditPost from "./containers/EditPost";

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    async handleLogout() {
        await this.props.handleLogout();
        window.location.assign('/')
    }

    render() {
        const isLoggedOn = this.props.isLoggedOn;
        return (
            <Router>
                <div className="App"> 
                    <header className="App-header">
                        <h1 className="App-title">Welcome to React</h1>
                        <GetNavigation
                            isLoggedIn={isLoggedOn}
                            func={this.handleLogout}
                        />
                    </header>
                    <nav />
                    <hr />
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route exact path="/find" component={Find} />
                    <Route path="/find/create" component={CreatePost} />
                    <Route path="/find/edit/:postId" component={EditPost} />
                </div>
            </Router>
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
        handleLogout: () => dispatch(Logout())
    };
}

function GetNavigation(props) {
    const isLoggedIn = props.isLoggedIn;
    if (!isLoggedIn) {
        return (
            <nav>
                <Button as={Link} to="/" inverted>
                    Home
                </Button>
                <Button as={Link} to="/login" inverted>
                    Login
                </Button>
                <Button as={Link} to="/register" inverted>
                    Register
                </Button>
            </nav>
        );
    } else {
        return (
            <nav>
                <Button as={Link} to="/" inverted>
                    Home
                </Button>
                <Button as={Link} to="/find" inverted>
                    Find
                </Button>
                <Button onClick={props.func} inverted>
                    Logout
                </Button>
            </nav>
        );
    }
}

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(App);
