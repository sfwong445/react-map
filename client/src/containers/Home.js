import React, { Component } from "react";

import { Embed } from "semantic-ui-react";

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
                        placeholder="https://scontent-sjc3-1.cdninstagram.com/vp/46f8154ccf1916e9f0e855442fa4bf55/5B847795/t51.2885-15/e35/29095603_389216011552565_8708839954135908352_n.jpg"
                        source='youtube'
                        aspectRatio="16:9"
                    />
                </div>
            </div>
        );
    }
}

export default Home;
