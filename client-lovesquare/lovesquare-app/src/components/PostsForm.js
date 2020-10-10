import React, { Component } from 'react'

import { connect } from 'react-redux'

import { addPosts } from '../actions/postsActions'

class PostsForm extends Component {
    
    state = {
        content: '',
        user_id: this.user_id
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addPosts(this.state)
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Create Post!</label>
                <input type="text" value={this.state.content} onChange={this.handleChange} name="content" />
            </form>
        )
    }
}

export default connect(null, { addPosts })(PostsForm)


