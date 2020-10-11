import React, { Component } from 'react'
// import { postsReducer } from '../reducers/postsReducer'
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions/postsActions'
import PostsForm from '../forms/PostsForm'

class PostsContainer extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <div>
                PostsContainer
                <PostsForm />
            </div>
        )
    }
}

export default connect(null, { fetchPosts })(PostsContainer)