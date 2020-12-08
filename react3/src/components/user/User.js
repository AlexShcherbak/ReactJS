import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class User extends Component {
    render() {
        let {match: {url}, item} = this.props;
        // let {item} = this.props;
        return (
            <div>
                {item.id} - {item.name} - <Link to={`${url}/${item.id}`}>about</Link>
            </div>
        );
    }
}

export default withRouter(User);