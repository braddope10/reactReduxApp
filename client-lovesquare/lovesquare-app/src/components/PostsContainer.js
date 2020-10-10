import React, { Component } from 'react'
// import { postsReducer } from '../reducers/postsReducer'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postsActions'
import PostsForm from './PostsForm'

class PostsContainer extends Component {
    render() {
        return (
            <div>
                PostsContainer
            </div>
        )
    }
}

export default PostsContainer