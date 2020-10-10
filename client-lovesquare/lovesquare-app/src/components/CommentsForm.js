import React, { Component } from 'react'

import { connect } from 'react-redux'

import { addComment } from '../actions/commentsActions'

class CommentsForm extends Component {

    state = {
        text: '',
        user_id: this.user_id,
        post_id: this.post_id
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addComment(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>New Comment:</label>

                <br />
                <br />

                <input type='text' value={this.state.text} onChange={this.handleChange} name="text" />

                <br />
                <br />

                <input type='submit' value="Create Comment" />
            </form>
        )
    }
}
