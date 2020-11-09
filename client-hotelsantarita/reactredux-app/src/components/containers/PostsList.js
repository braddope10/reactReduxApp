import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentsContainer from './CommentsContainer'
import CommentsList from './CommentsList'

const PostsList = ({posts}) => {
    return (
        <div>
            {posts.map(post => 
                <ul key={post.id}>
                    <h4>
                        Cashier: {post.cashier}
                    </h4>
                    <h6>
                        Guest: {post.guest}
                    </h6>
                    <h6>
                        Content: {post.content}
                    </h6>
                    <h6>
                        Room: {post.room}
                    </h6>
                    <h6>
                        Occupation Date: {post.occupationdate}
                    </h6>
                    <h6>
                        Disoccupation Date: {post.disoccupationdate}
                    </h6>
                    <h6>
                        Amount Paid: {post.amountpaid}
                    </h6>
                    <h6>
                        Guest Count: {post.amountofpeople}
                    </h6>

                    <CommentsContainer />

                    <br />
                </ul>
                
            )}

            
        </div>
    )
}

const mapStateToProps = state => {
    return{posts: state.posts}
}

export default connect(mapStateToProps)(PostsList)
