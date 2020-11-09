import React, { Component } from 'react'

import { connect } from 'react-redux'

import { addPost } from '../../actions/postsActions'

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
        this.props.addPost(this.state)
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>New Post:</label>

                <br />
                <br />

                <input type="text" value={this.state.content} onChange={this.handleChange} name="content" />

                <br />
                <br />

                <input type="submit" value="Create Post" />
            </form>
        )
    }
}

export default connect(null, { addPost })(PostsForm)


