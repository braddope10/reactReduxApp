import React, { Component } from 'react'
// import { postsReducer } from '../reducers/postsReducer'
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions/postsActions'
import PostsForm from '../forms/PostsForm'
import PostsList from './PostsList'

class PostsContainer extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <div>
                <PostsForm />
                <h3>PostsContainer</h3>
                <PostsList />
            </div>
        )
    }
}

export default connect(null, { fetchPosts })(PostsContainer)