import React, {Component} from 'react';
import UserService from "../services/UserService";
import User from "../user/User";
import DetailUser from "../user/DetailUser";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class AllUsers extends Component {

    userService = new UserService();
    state = {users: []}

    async componentDidMount() {
        let users = await this.userService.users();
        this.setState({users})
    }

    render() {
        let {users} = this.state;
        return (
            <div className={'d-flex'}>
                <div className={'col'}>
                    {
                        users.map(value => <User key={value.id}
                                              item={value}/>)
                    }
                </div>
                <div className={'border col'}>

                    <Switch>
                        <Route path={'/users/:id'} render={(props) => {
                            let {match: {params: {id}}} = props;
                            return <DetailUser userId={id} key={id}/>
                        }}/>
                    </Switch>

                </div>
            </div>
        );
    }
}

export default AllUsers;