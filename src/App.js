import React, {Component} from 'react';
import AllUsers from "./components/all-users/AllUsers";
import './components/main.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {

    // componentWillMount() {
    //     document.body.style.backgroundColor = '#293779';
    // }

    render() {
        return (
            <Router>
                <div className={"container-fluid"}>
                    {/*<div className={"btn btn-light"}>*/}
                    <header>
                        <Link to={''}>
                            <div className={"btn btn-light"}>

                                Home
                            </div>
                        </Link>
                        {/*</div>*/}
                        {/*<div className={"btn btn-light"}>*/}
                        <Link to={'/users'}>
                            <div className={"btn btn-light"}>
                                Users
                            </div>
                        </Link>
                    </header>
                    {/*</div>*/}
                    <div>
                        <Switch>
                            <Route path={'/users'} render={(props) => {

                                return <AllUsers/>
                            }}/>
                        </Switch>
                    </div>
                </div>

                {/*<Switch>*/}
                {/*    <Route path={'/users'} render={()=>{*/}

                {/*        return <AllUsers/>*/}
                {/*    }}/>*/}
                {/*</Switch>*/}


            </Router>
        )
    }
}

export default App;