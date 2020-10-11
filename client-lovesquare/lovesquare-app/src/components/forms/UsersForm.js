import React, { Component } from 'react'

import { connect } from 'react-redux'

import { addUser } from '../../actions/usersActions'

class UsersForm extends Component {

    state = {
        email: '',
        password_digest: '',
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addUser(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Email: </label>
                <input type='text' value={this.state.email} onChange={this.handleChange} name="email" />

                <br />
                <br />

                <label>Password: </label>
                <input type='password' value={this.state.password_digest} onChange={this.handleChange} name="password_digest" />

                <br />
                <br />

                <input type='submit' value="Create User" />
            </form>
        )
    }
}

export default connect(null, { addUser })(UsersForm)