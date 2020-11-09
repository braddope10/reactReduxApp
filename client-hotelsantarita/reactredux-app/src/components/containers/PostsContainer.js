import React, { Component } from 'react'
// import { postsReducer } from '../reducers/postsReducer'
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions/postsActions'
import PostsForm from '../forms/PostsForm'
import PostsList from './PostsList'
import SplitPanel from 'split-panel-react';

class PostsContainer extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <div>
                <SplitPanel>
                        <div class="centered">
                            <PostsForm />
                        </div>
                        <div >
                            <ul>
                                <h1 class="centerh3">Guest List</h1>
                            </ul>    
                            <PostsList class="centered" />
                        </div>
                
                </SplitPanel>
            </div>
        )
    }
}

export default connect(null, { fetchPosts })(PostsContainer)