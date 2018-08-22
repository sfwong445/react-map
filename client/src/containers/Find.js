import React, { Component } from "react";
import AuthenticationService from "../services/AuthenticationService";
import PostService from "../services/PostService";

import { connect } from "react-redux";

export class FindComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            users: [],
            distance: {}
        };
    }
    async componentDidMount() {
        if (this.props.isLoggedIn) {
            const user = (await AuthenticationService.getUser(
                this.props.token
            )).data;
            // The current User's address is displayed below.
            this.setState({
                distance: user
            })
            // Now we need to get all the users in the database
            const users = (await AuthenticationService.getUsers()).data;
            // Then filter out everyone in the database so only the same city matches
            const filteredUser = users.filter((user) => user.city === this.state.distance.city)
            this.setState({
                users: filteredUser
            })
            // Get all the posts from users that have been sorted out.
            const posts = [];
            filteredUser.map(
                async (user) => {
                    posts.push((await PostService.getPosts(user.id)).data)
                    return user;
                }
            )
            console.log(posts);
        }
    }
    render() {
        return (
            <div className="container">
                <h1>This is the find Component</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.isLoggedOn,
        token: state.token
    };
}

export default connect(mapStateToProps)(FindComponent);
