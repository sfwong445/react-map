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
        this.getData();
    }
    async getData() {
        // When logged in, the component will fetch all the related posts required from db and concat into a single array.
        if (this.props.isLoggedIn) {
            // This line gets informati on the current user.
            const user = (await AuthenticationService.getUser(this.props.token))
                .data;
            this.setState({
                distance: user
            });
            // Now we need to get all the users in the database
            const users = (await AuthenticationService.getUsers()).data;
            // Then filter out everyone in the database so only the same city matches
            const filteredUser = users.filter(
                user => user.city === this.state.distance.city
            );
            this.setState({ users: filteredUser });
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
                posts: finalPost
            });
        } else {
            console.log("You are not logged on!");
        }
    }
    render() {
        if (this.props.isLoggedIn) {
            console.log(this.state);
        }
        const events = this.state.posts.map(post => ({
            summary: post.title,
            extraText: post.description,
            extraImages: [post.imageUrl]
        }))
        console.log(events)
        return (
            <div className="find-container">
                <h1>Posts</h1>
                <div className="find-button">
                    <Button as={Link} to={"/find/create"} primary>
                        Create Post
                    </Button>
                </div>
                <div className="post">
                    <Feed size="large">
                        <Feed.Event>
                            <Feed.Label>
                                <img
                                    src="https://scontent-sjc3-1.cdninstagram.com/vp/eb7357e7a6b139b09a0ceee1a5efa04d/5BFB2FA7/t51.2885-19/23824971_295605060931256_6109301832771698688_n.jpg"
                                    alt="mirae"
                                />
                            </Feed.Label>
                            <Feed.Content>
                                <Feed.Summary>
                                    <Feed.User>Mirae Yi</Feed.User> has posted
                                    <Feed.Date>3 days ago</Feed.Date>
                                </Feed.Summary>
                                <Feed.Extra text>
                                    A summary by Mirae Yi.
                                </Feed.Extra>
                                <Feed.Extra images>
                                    <img
                                        src="https://scontent-sjc3-1.cdninstagram.com/vp/b4a08186198e4695805f5d8e08b42158/5C169602/t51.2885-15/e35/37966764_2141999412735175_1776154038446850048_n.jpg"
                                        alt="Mirae"
                                    />
                                </Feed.Extra>
                            </Feed.Content>
                        </Feed.Event>
                        <Feed.Event>
                            <Feed.Label>
                                <img
                                    src="https://i.pinimg.com/236x/9d/58/d1/9d58d1fba36aa76996b5de3f3d233d22.jpg"
                                    alt="dino"
                                />
                            </Feed.Label>
                            <Feed.Content>
                                <Feed.Summary>
                                    <Feed.User>Dino Schneider</Feed.User> has
                                    uploaded an image.
                                    <Feed.Date>5 days ago</Feed.Date>
                                </Feed.Summary>
                                <Feed.Extra images>
                                    <img
                                        src="https://thumbs.dreamstime.com/z/crow-orange-background-flaps-its-wings-throws-black-balls-37111364.jpg"
                                        alt="crow"
                                    />
                                </Feed.Extra>
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>
                    <Feed events={events}></Feed>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { isLoggedIn: state.isLoggedOn, token: state.token };
}

export default connect(mapStateToProps)(FindComponent);
