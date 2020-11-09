import React, { Component } from 'react'
// import { postsReducer } from '../reducers/postsReducer'
import { connect } from 'react-redux'
import { fetchProfiles } from '../../actions/profilesActions'
import ProfilesForm from '../forms/ProfilesForm'

class ProfilesContainer extends Component {

    componentDidMount() {
        this.props.fetchProfiles()
    }

    render() {
        return (
            <div>
                <h3>ProfilesContainer</h3>
                <ProfilesForm />
            </div>
        )
    }
}

export default connect(null, { fetchProfiles })(ProfilesContainer)