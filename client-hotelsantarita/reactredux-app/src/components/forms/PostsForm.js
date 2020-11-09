import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../../actions/postsActions'

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
                <label>
                    <h1>New Guest</h1>
                </label>

                <h5>Cashier:</h5>
                <input type="text" value={this.state.cashier} onChange={this.handleChange} name="cashier" />

                <h5>Amount Paid:</h5>
                <input type="number" value={this.state.amountpaid} onChange={this.handleChange} name="amountpaid" />

                <h5>Guest Name:</h5>
                <input type="text" value={this.state.guest} onChange={this.handleChange} name="guest" />

                <h5>Occupation Date:</h5>
                <input type="date" value={this.state.occupationdate} onChange={this.handleChange} name="occupationdate" />

                <h5>Disoccupation Date:</h5>
                <input type="date" value={this.state.disoccupationdate} onChange={this.handleChange} name="disoccupationdate" />

                <h5>Room:</h5>
                <select name="room">
                    <option value="Room #1 /1 Full">#1 /1 Full</option>
                    <option value="Room #2 /1 Full">#2 /1 Full</option>
                    <option value="Room #3 /1 Full">#3 /1 Full</option>
                    <option value="Room #4 /1 Full">#4 /1 Full</option>
                    <option value="Room #5 /1 Full, 1 Twin">#5 /1 Full, 1 Twin</option>
                    <option value="Room #6 /1 Full">#6 /1 Full</option>
                    <option value="Room #7 /1 Full">#7 /1 Full</option>
                    <option value="Room #8 /1 Full, 1 Twin">#8 /1 Full, 1 Twin</option>
                    <option value="Room #9 /1 Full">#9 /1 Full</option>
                    <option value="Room #10 /1 Full">#10 /1 Full</option>
                    <option value="Room #11 /2 Full">#11 /2 Full</option>
                    <option value="Room #12 /2 Full">#12 /2 Full</option>
                    <option value="Room #14 /2 Full">#14 /2 Full</option>
                    <option value="Room #15 /2 Full, 1 Twin">#15 /2 Full, 1 Twin</option>
                    <option value="Room #16 /1 Full">#16 /1 Full</option>
                    <option value="Room #17 /2 Full">#17 /2 Full</option>
                    <option value="Room #18 /1 Full, 1 Twin">#18 /1 Full, 1 Twin</option>
                    <option value="Room #19 /2 Full, 1 Twin">#19 /2 Full, 1 Twin</option>
                    <option value="Room #20 /2 Full">#20 /2 Full</option>
                    <option value="Room #21 /1 Full">#21 /1 Full</option>
                    <option value="Room #22 /2 Full">#22 /2 Full</option>
                    <option value="Room #23 /2 Full">#23 /2 Full</option>
                    <option value="Room #24 /1 Full">#24 /1 Full</option>
                    <option value="Room #25 /1 Full, 1 Twin">#25 /1 Full, 1 Twin</option>
                    <option value="Room #26 /2 Full">#26 /2 Full</option>
                    <option value="Room #27 /2 Full">#27 /2 Full</option>
                    <option value="Room #28 /2 Full, 1 Twin">#28 /2 Full, 1 Twin</option>
                    <option value="Room #29 /1 Full">#29 /1 Full</option>
                    <option value="Room #30 /1 Full">#30 /1 Full</option>
                    <option value="Room #31 /1 Full">#31 /1 Full</option>
                    <option value="Room #32 /2 Full">#32 /2 Full</option>
                    <option value="Room #33 /1 Full, 1 Twin">#33 /1 Full, 1 Twin</option>
                </select>

                <h5>Guest Count:</h5>
                <input type="number" min="1" max="5" value={this.state.amountofpeople} onChange={this.handleChange} name="amountofpeople" />

                <h5>Comment:</h5>
                <input style={{height:200}} type="text" value={this.state.content} onChange={this.handleChange} name="content" />
                    
                <br />
                <br />

                <input type="submit" value="Submit Guest" />
            </form>
        )
    }
}

export default connect(null, { addPost })(PostsForm)


