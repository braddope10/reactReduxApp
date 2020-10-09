import React, { Component } from 'react'

class UsersForm extends Component {

    state = {
        bio: '',
        name: '',
        email: '',
        password_digest: '',
        city: '',
        state: '',
        sex: '',
        preference: '',
        profile_pic: '',
        age: ''
    }

    render() {
        return (
            <form>
                <label>Profile Picture:</label>

                <br />
                <br />
                
                <input type='file' value={this.state.profile_pic} onChange={this.handleChange} name="profile_pic" />

                <br />
                <br />
                
                <label>Name:</label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name="name" />

                <br />
                <br />

                <label>Email:</label>
                <input type='text' value={this.state.email} onChange={this.handleChange} name="email" />

                <br />
                <br />

                <label>Password:</label>
                <input type='text' value={this.state.password_digest} onChange={this.handleChange} name="password_digest" />

                <br />
                <br />

                <label>Bio:</label>
                <input type='text' value={this.state.bio} onChange={this.handleChange} name="bio" />

                <br />
                <br />

                <label>City:</label>
                <input type='text' value={this.state.city} onChange={this.handleChange} name="city" />

                <br />
                <br />

                <label>State:</label>
                <input type='text' value={this.state.state} onChange={this.handleChange} name="state" />

                <br />
                <br />

                <label>Sex:</label>
                <input type='text' value={this.state.sex} onChange={this.handleChange} name="sex" />

                <br />
                <br />

                <label>Preference:</label>
                <input type='text' value={this.state.preference} onChange={this.handleChange} name="preference" />

                <br />
                <br />

                <label>Age:</label>
                <input type='text' value={this.state.age} onChange={this.handleChange} name="age" />

                <br />
                <br />

                <input type='submit' value="Create User" />
            </form>
        )
    }
}


export default UsersForm