import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../actions/commentsActions'
// import { PostsList } from '../containers/PostsList'

class CommentsForm extends Component {

    state = {
        associate: '',
        note: ''
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
                    <ul>
                        <ul>
                            _____________________________
                            <h5>New Note:</h5>
                            <h6>
                                Associate: 
                                <br />
                                <input type="text" value={this.state.associate} onChange={this.handleChange} name="associate" />

                                <br />
                                <br />

                                Note: 
                                <br />
                                <input type="text" value={this.state.note} onChange={this.handleChange} name="note" />
                            </h6>

                            <input type='submit' value="Submit Note" />
                            <br />
                        </ul>
                    </ul>
                </form>
        )
    }
}

export default connect(null, { addComment })(CommentsForm)
