import React, { Component } from 'react'

import { connect } from 'react-redux'

import { addProfile } from '../../actions/profilesActions'

class ProfilesForm extends Component {
    
    state = {
        bio: '',
        name: '',
        city: '',
        state: '',
        sex: '',
        preference: '',
        profile_pic: '',
        age: '',
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
        this.props.addProfile(this.state)
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>New Profile:</label>

                <br />
                <br />

                <label>Bio: </label>
                <input type="text" value={this.state.bio} onChange={this.handleChange} name="bio" />

                <br />
                <br />

                <label>Name: </label>
                <input type="text" value={this.state.name} onChange={this.handleChange} name="name" />

                <br />
                <br />

                <label>City: </label>
                <input type="text" value={this.state.city} onChange={this.handleChange} name="city" />

                <br />
                <br />
                
                <label>State: </label>
                <input type="text" value={this.state.state} onChange={this.handleChange} name="state" />

                <br />
                <br />

                <label>Sex: </label>
                <input type="text" value={this.state.sex} onChange={this.handleChange} name="sex" />

                <br />
                <br />
                
                <label>Preference: </label>
                <input type="text" value={this.state.preference} onChange={this.handleChange} name="preference" />

                <br />
                <br />

                <label>Profile Pic: </label>
                <input type="string" value={this.state.profile_pic} onChange={this.handleChange} name="profile_pic" />

                <br />
                <br />

                <label>Age: </label>
                <input type="number" value={this.state.age} onChange={this.handleChange} name="age" />

                <br />
                <br />

                <input type="submit" value="Save Profile" />
            </form>
        )
    }
}

export default connect(null, { addProfile })(ProfilesForm)