import React, {Component} from 'react';
import AllUsers from "./components/all-users/AllUsers";
import AllPosts from "./components/all-posts/AllPosts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to={'/users'}>
                            users
                        </Link>
                    </div>
                    <div>
                        <Link to={'/posts'}>
                            posts
                        </Link>
                    </div>
                </div>

                <Switch>
                    <Route path={'/users'} render={()=>{

                        return <AllUsers/>
                    }}/>
                    <Route path={'/posts'} render={() => {

                        return <AllPosts/>
                    }}/>
                </Switch>



            </Router>
        );
    }
}

export default App;