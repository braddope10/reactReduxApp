import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/usersActions'
import UsersForm from '../forms/UsersForm'

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
