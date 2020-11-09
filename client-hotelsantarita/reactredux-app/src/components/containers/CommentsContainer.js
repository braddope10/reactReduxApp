import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../../actions/commentsActions'
import CommentsForm from '../forms/CommentsForm'
import CommentsList from './CommentsList'

class CommentsContainer extends Component {

    componentDidMount() {
        this.props.fetchComments()
    }

    render() {
        return (
            <div>
                <CommentsList />
                <CommentsForm />
            </div>
        )
    }
}

export default connect(null, { fetchComments })(CommentsContainer)