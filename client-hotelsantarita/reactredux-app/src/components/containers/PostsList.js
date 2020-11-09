import React, { Component } from 'react'
import { connect } from 'react-redux'


export default class PostsList extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const PostsList = ({posts}) => {
    return (
        <div>
            {posts.map(post => 
                <ul>
                    <li key={post.id} style={{boder: '3px solid green'}}>
                        <h4>
                            {post.cashier}
                        </h4>
                        <b>
                            {post.guest}
                            {post.content}
                            {post.room}
                            {post.occupationdate}
                            {post.disoccupationdate}
                            {post.amountpaid}
                            {post.amountofpeople}
                        </b>
                    </li>
                </ul>
            )}
        </div>
    )
}
