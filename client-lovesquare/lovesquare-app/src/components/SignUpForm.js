import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUserUp } from '../actions/userActions'

class SignUpForm extends Component {

    state = {
        username: '', 
        password: ''
    }

    handleOnChange = (e) => {
        e.persist();
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.signUserUp(this.state)
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleOnChange} />

                    <br />
                    <br />

                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleOnChange} />

                    <br />
                    <br />

                    <input type="submit" value="Login" />
                </form>
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUserUp: (userInfo) => dispatch(signUserUp(userInfo))
    }
}


export default connect(null, mapDispatchToProps)(SignUpForm)