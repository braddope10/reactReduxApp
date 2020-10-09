import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../actions/usersActions'
import UsersForm from './UsersForm'

class UsersContainer extends Component {

    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        return (
            <div>
                UsersContainer
                <UsersForm />
            </div>
        )
    }
}

export default connect(null, { fetchUsers })(UsersContainer)
