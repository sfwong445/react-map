import React, { Component } from "react";
import { connect } from 'react-redux';

import { Form, Button } from "semantic-ui-react";

import PostService from "../services/PostService";

class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            title: "",
            postImg: "",
            description: "",
            imageUrl: "",
            email: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getPostData = this.getPostData.bind(this);

        this.getPostData()

    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    async handleSubmit(event) {
        const post = {
            _id: this.props.match.params.postId,
            userId: this.props.token,
            name: this.state.name,
            title: this.state.title,
            postImg: this.state.postImg,
            description: this.state.description,
            imageUrl: this.state.imageUrl,
            email: this.state.email
        };
        await PostService.updatePost(post);
        this.props.history.push('/find');
    }

    async getPostData() {
        const post = (await PostService.findPost(this.props.match.params.postId)).data;
        console.log(this.props);
        console.log(post);
        if (this.props.token === post.userId) {
            this.setState({
                name: post.name,
                title: post.title,
                postImg: post.postImg,
                description: post.description,
                imageUrl: post.imageUrl,
                email: post.email
            })
        } else {
            alert('You do not have access to this post')
            this.props.history.push('/find')
        }
    }

    render() {
        return (
            <div className="post-create-container">
                <Form>
                    <Form.Field>
                        <label>Name</label>
                        <input
                            placeholder="Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Post Image</label>
                        <input
                            placeholder="Post Image"
                            name="postImg"
                            value={this.state.postImg}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Title</label>
                        <input
                            placeholder="Title"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Text</label>
                        <textarea
                            placeholder="Text Body"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Image Url</label>
                        <input
                            placeholder="Image URL"
                            name="imageUrl"
                            value={this.state.imageUrl}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input
                            placeholder="E-mail"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Button primary onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.isLoggedOn,
        token: state.token
    }
}

export default connect(mapStateToProps)(EditPost);
