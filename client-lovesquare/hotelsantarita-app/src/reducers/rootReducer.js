import { combineReducers } from 'redux'

import { usersReducer } from './usersReducer'
import { postsReducer } from './postsReducer'
import { commentsReducer } from './commentsReducer'



export const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
})