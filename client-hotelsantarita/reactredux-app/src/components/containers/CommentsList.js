import React, { Component } from 'react'
import { connect } from 'react-redux'

const CommentsList = ({comments}) => {
    return (
        <div>
            {comments.map(comment =>
                <ul key={comment.id}>
                    <ul>
                        <p>
                            Associate: {comment.associate}
                            <br />
                            Note: {comment.note}
                        </p>
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