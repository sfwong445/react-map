import React, { Component } from 'react';

import { Embed } from 'semantic-ui-react';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <h1>This is the home directory!</h1>
                <p>
                    This website was originally designed to let users find posts
                    that are made by users who lives in a certain area. As of
                    currently, this website can also serve as a boilerplate for
                    any social media platform. It supports user name, request by
                    email, and the functionality can be expanded to add more
                    pictures.
                </p>
                <div className="player">
                    <Embed
                        id="n8ve4k8IyTk"
                        source="youtube"
                        placeholder="https://i.ytimg.com/vi/n8ve4k8IyTk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIZCGAFwAQ==&rs=AOn4CLBaTfUZcOX64VjrHOwH9DLTtAI0aA"
                        aspectRatio="16:9"
                    />
                </div>
            </div>
        );
    }
}

export default Home;
