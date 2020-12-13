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
        let {item, match: {url}} = this.props;
        return (
            <div className={"d-flex justify-content-between"}>
                {item.id} - {item.name}  <Link to={`${url}/${item.id}`}>
                <a href={"#"} className={'btn btn-primary'}>
                    details
                </a>
            </Link>
            </div>
        );
    }
}

export default withRouter(User);