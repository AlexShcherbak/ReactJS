import React, {Component} from 'react';
import Post from './post/Post'
import './post.css';

class AllPosts extends Component {

    state = {posts: [], classState: 'one', choosePost: null};

    flag = false;


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsFromAPI => {
                this.setState({posts: postsFromAPI});
            });
    }


    clickTitle = () => {
        if (this.flag) {
            this.setState({classState: 'one'})
        } else {
            this.setState({classState: 'two'})
        }
        this.flag = !this.flag;
    };

    selectPost = (id) => {
        let choosePost = this.state.posts.find(value => value.id === id);
        this.setState({choosePost})
    }


    render() {

        let {posts, classState, choosePost} = this.state;

        // console.log(this.state)
        return (
            <div>
                <h1 onClick={this.clickTitle} className={classState}>Posts</h1>
                {
                    posts.map(value => (<Post
                        item={value}
                        key={value.id}
                        selectPost={this.selectPost}
                    />))
                }

                <hr/>

                {choosePost &&
                (<Post item={choosePost}/>)

                }
            </div>
        );
    }
}

export default AllPosts;