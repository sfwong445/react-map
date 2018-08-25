import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../services/AuthenticationService";
import PostService from "../services/PostService";

import "./Find.css";

import { connect } from "react-redux";

import { Button } from "semantic-ui-react";
import { Feed } from "semantic-ui-react";

export class FindComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            users: "",
            distance: ""
        };
        this.handleDelete = this.handleDelete.bind(this);
    }
    async getData() {
        // When logged in, the component will fetch all the related posts required from db and concat into a single array.
        if (this.props.isLoggedIn) {
            // This line gets informati on the current user.
            const user = (await AuthenticationService.getUser(this.props.token))
                .data;
            // Now we need to get all the users in the database
            const users = (await AuthenticationService.getUsers()).data;
            // Then filter out everyone in the database so only the same city matches
            const filteredUser = users.filter(
                newUser => newUser.city === user.city
            );
            // Get all the posts from users that have been sorted out.
            const posts = [];
            for (let i = 0; i < filteredUser.length; i++) {
                posts.push(
                    (await PostService.getPosts(filteredUser[i]._id)).data
                );
            }
            const reducedPost = [];
            posts.map(function(post) {
                if (post.length !== 0) {
                    reducedPost.push(post);
                }
                return 0;
            });
            let finalPost = [];
            for (let j = 0; j < reducedPost.length; j++) {
                finalPost = finalPost.concat(reducedPost[j]);
            }
            this.setState({
                distance: user,
                users: filteredUser,
                posts: finalPost
            });
        } else {
            console.log("You are not logged on!");
        }
    }
    async handleDelete(postId) {
        const postResponse = await PostService.findPost(postId)
        if (this.props.token === postResponse.data.userId) {
            await PostService.deletePost({
                _id: postId
            });
            this.getData();
        } else {
            alert('You do not have access to this post')
        }
    }
    async componentDidMount() {
        this.getData();
    }
    render() {
        const events = this.state.posts.map(post => (
            <Feed.Event key={post._id}>
                <Feed.Label>
                    <img src={post.postImg} alt={post.description} />
                </Feed.Label>
                <Feed.Content>
                    <Feed.Summary>
                        <Feed.User>{post.name}</Feed.User> {post.title}
                    </Feed.Summary>
                    <Feed.Extra text>{post.description}</Feed.Extra>
                    <Feed.Extra images>
                        <img src={post.imageUrl} alt={post.description} />
                    </Feed.Extra>
                    <Feed.Meta>
                        <Button
                            circular
                            icon="delete"
                            size="mini"
                            inverted
                            onClick={() => this.handleDelete(post._id)}
                        />
                        <Button
                            circular
                            icon="edit"
                            size="mini"
                            inverted
                            as={Link}
                            to={`/find/edit/${post._id}`}
                        />
                        <Button
                            circular
                            icon="envelope"
                            size="mini"
                            inverted
                            as={'a'}
                            href={`mailto:${post.email}`}
                        />
                    </Feed.Meta>
                </Feed.Content>
            </Feed.Event>
        ));
        return (
            <div className="find-container">
                <h1>Posts</h1>
                <div className="find-button">
                    <Button
                        as={Link}
                        to={"/find/create"}
                        icon="file alternate"
                        color="google plus"
                    />
                </div>
                <div className="post">
                    <Feed size="large" className="ui feed">
                        {events}
                    </Feed>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { isLoggedIn: state.isLoggedOn, token: state.token };
}

export default connect(mapStateToProps)(FindComponent);
