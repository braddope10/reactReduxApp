import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../../actions/postsActions'

class PostsForm extends Component {
    
    state = {
        cashier: '',
        guest: '',
        content: '',
        amountpaid: '',
        amountofpeople: '',
        occupationperiod: '',
        beds: '',
        roomnumber: ''
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addPost(this.state)
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <h1>New Guest</h1>
                </label>

                <h5>Cashier:</h5>
                <input type="text" value={this.state.cashier} onChange={this.handleChange} name="cashier" />

                <h5>Amount Paid:</h5>
                <input type="number" value={this.state.amountpaid} onChange={this.handleChange} name="amountpaid" />

                <h5>Guest Name:</h5>
                <input type="text" value={this.state.guest} onChange={this.handleChange} name="guest" />

                <h5>Occupation Period:</h5>
                <input type="number" value={this.state.occupationperiod} onChange={this.handleChange} name="occupationperiod" />

                <h5>Guest Count:</h5>
                <input type="number" min="1" max="8" value={this.state.amountofpeople} onChange={this.handleChange} name="amountofpeople" />

                <h5>Beds:</h5>
                <input type="number" min="1" max="4" value={this.state.beds} onChange={this.handleChange} name="beds" />

                <h5>Room #:</h5>
                <input type="number" min="1" max="33" value={this.state.roomnumber} onChange={this.handleChange} name="roomnumber" />

                <h5>Comment:</h5>
                <input type="text" value={this.state.content} onChange={this.handleChange} name="content" />

                <br />
                <br />

                <input type="submit" value="Submit Guest" />
            </form>
        )
    }
}

export default connect(null, { addPost })(PostsForm)


