import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../actions/commentsActions'

class CommentsForm extends Component {

    state = {
        text: '',
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
            <ul>
                <form onSubmit={this.handleSubmit}>
                        <ul>
                            _____________________________
                            <h5>New Update:</h5>
                            <h6>
                                Associate: 
                                <br />
                                <input type="text" value={this.state.associate} onChange={this.handleChange} name="associate" />

                                <br />
                                <br />

                                Comment: 
                                <br />
                                <input type="text" value={this.state.text} onChange={this.handleChange} name="text" />
                            </h6>

                            <input type='submit' value="Submit Update" />
                            <br />
                            _____________________________
                        </ul>
                </form>
            </ul>
        )
    }
}

export default connect(null, { addComment })(CommentsForm)
