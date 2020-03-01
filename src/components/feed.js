import React, { Component } from 'react';
import '../css/App.css';


import AddPost from '../AddPost/addPost'
import PostList from './PostList';

class Feed extends Component{
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    render() {
        return (
            <div className="wrapper">
              <AddPost addPostFn={this.addPost}/>
              <PostList posts={this.state.posts} />
            </div>
        )
    }

    componentDidMount = () => {
        const posts = localStorage.getItem('posts')
        if (posts) {
            const savedPosts = JSON.parse(posts)
            this.setState({
                posts: savedPosts
            })
        }
        else {
            console.log("no posts")
        }
    }

    addPost = async (post) => {
      await this.setState(previousState => ({posts: previousState.posts.concat(post)}))
      localStorage.setItem('posts', JSON.stringify(this.state.posts))
      console.log(localStorage.getItem('posts'))
    }
}
export default Feed;
