import React, {Component} from 'react';
import UserService from '../services/UserService';

class DetailUser extends Component {

    state = {user: null};
    userService = new UserService();

    async componentDidMount() {
        const {userId} = this.props;
        const user = await this.userService.user(userId);
        this.setState({user});
    }

    render() {
        let {user} = this.state;
        return (
            <div>
                {user && <div>
                    <ul>
                        <li className={"border-bottom"}>{user.name}</li>
                        <li><span className={"font-weight-bold"}>Phone: </span>{user.phone}</li>
                        <li className={"border-bottom"}><span className={"font-weight-bold"}>Email: </span>{user.email}</li>
                        <li><span className={"font-weight-bold"}>Website: </span>{user.website}</li>
                    </ul>
                </div>}
            </div>
        );
    }
}

export default DetailUser;