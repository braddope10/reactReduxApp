import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../actions/usersActions'

class UsersContainer extends Component {
    render() {
        return (
            <div>
                UsersContainer
            </div>
        )
    }
}

export default connect(null, { fetchUsers })(UsersContainer)
