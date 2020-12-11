import React, {Component} from 'react';
import {PostService} from "../services/PostService";
import Post from '../post/Post'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class AllPosts extends Component {



    state = {posts: []}
    postService = new PostService();

    async componentDidMount() {
        let posts = await this.postService.getAllPost();
        this.setState({posts})
    }

    render() {
        let {posts} = this.state;
        return (
            <div>
                {
                    posts.map(value => <Post key={value.id} item={value}/>)
                }

                <div className={'border'}>
                    <Switch>
                        <Route path={'/users/:id'} render={(props) => {
                            return ' This is post'
                        }}/>
                    </Switch>
                </div>

            </div>
        );
    }
}

export default AllPosts;









