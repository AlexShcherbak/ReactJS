import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class Post extends Component {
    render() {
        let {match: {url}, item} = this.props;
        return (
            <div>
                {item.title} - {item.body} - <Link to={`${url}/${item.id}`}>about</Link>
            </div>
        );
    }
}

export default withRouter(Post);