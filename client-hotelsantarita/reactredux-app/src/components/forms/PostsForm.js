import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../../actions/postsActions'
import RoomOptions from './RoomOptions'

class PostsForm extends Component {
    
    state = {
        cashier: '',
        guest: '',
        content: '',
        amountpaid: '',
        room: '',
        occupationdate: '',
        disoccupationdate: '',
        amountofpeople: '',
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
                <br />
                <br />
                <br />
                <label>
                    <h1>New Guest</h1>
                </label>

                <h5>
                    Cashier:
                    <br />
                    <input type="text" value={this.state.cashier} onChange={this.handleChange} name="cashier" />

                    <br />
                    <br />

                    Amount Paid:
                    <br />
                    <input type="number" value={this.state.amountpaid} onChange={this.handleChange} name="amountpaid" />

                    <br />
                    <br />
                    
                    Guest Name:
                    <br />
                    <input type="text" value={this.state.guest} onChange={this.handleChange} name="guest" />

                    <br />
                    <br />

                    Occupation Date:
                    <br />
                    <input type="date" value={this.state.occupationdate} onChange={this.handleChange} name="occupationdate" />

                    <br />
                    <br />
                    
                    Disoccupation Date:
                    <br />
                    <input type="date" value={this.state.disoccupationdate} onChange={this.handleChange} name="disoccupationdate" />

                    <br />
                    <br />

                    Room:
                    <br />
                    <RoomOptions />

                    <br />
                    <br />

                    Guest Count:
                    <br />
                    <input type="number" min="1" max="5" value={this.state.amountofpeople} onChange={this.handleChange} name="amountofpeople" />

                    <br />
                    <br />

                    Comment:
                    <br />
                    <input style={{height:200}} type="text" value={this.state.content} onChange={this.handleChange} name="content" />
                </h5>

                <input type="submit" value="Submit Guest" />
            </form>
        )
    }
}

export default connect(null, { addPost })(PostsForm)


