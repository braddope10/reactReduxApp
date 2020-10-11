import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../actions/commentsActions'
import CommentsForm from './CommentsForm'

class CommentsContainer extends Component {

    componentDidMount() {
        this.props.fetchComments()
    }

    render() {
        return (
            <div>
                CommentsContainer
                <CommentsForm />
            </div>
        )
    }
}

export default connect(null, { fetchComments })(CommentsContainer)