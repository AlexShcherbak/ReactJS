import React, {Component} from 'react';
import AllUsers from "./components/all-users/AllUsers";
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
                    <div className={"btn btn-light"}>
                        <Link to={'/users'}>
                            users
                        </Link>
                    </div>
                </div>

                <Switch>
                    <Route path={'/users'} render={()=>{

                        return <AllUsers/>
                    }}/>
                </Switch>



            </Router>
        )
    }
}

export default App;