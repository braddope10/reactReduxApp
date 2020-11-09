import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentsContainer from './CommentsContainer'


const PostsList = ({posts}) => {
    return (
        <div className="reverse" >
            {posts.map(post => 
                <ul key={post.id} >
                    _______________________________________
                    <h4>
                        Cashier: {post.cashier}
                    </h4>
                    <ul>
                        <p>
                            Guest: <ul><li>{post.guest}</li></ul>
                            <br />
                            Content: <ul><li>{post.content}</li></ul>
                            <br />
                            Room: <ul><li>{post.room}</li></ul>
                            <br />
                            Occupation Date: <ul><li>{post.occupationdate}</li></ul>
                            <br />
                            Disoccupation Date: <ul><li>{post.disoccupationdate}</li></ul>
                            <br />
                            Amount Paid: <ul><li>{post.amountpaid}</li></ul>
                            <br />
                            Guest Count: <ul><li>{post.amountofpeople}</li></ul>
                        </p>
                    </ul>
                    <CommentsContainer />
                </ul> 
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return{posts: state.posts}
}

export default connect(mapStateToProps)(PostsList)
