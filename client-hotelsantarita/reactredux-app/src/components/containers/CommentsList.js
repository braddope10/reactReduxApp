import React, { Component } from 'react'
import { connect } from 'react-redux'

const CommentsList = ({comments}) => {
    return (
        <div>
            {comments.map(comment =>
                <ul key={comment.id}>
                    <ul>
                        <h5>
                            Associate: {comment.associate}
                        </h5>
                        <h6>
                            Update: {comment.text}
                        </h6>
                    </ul>
                </ul>    
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return{comments: state.comments}
}

export default connect(mapStateToProps)(CommentsList)