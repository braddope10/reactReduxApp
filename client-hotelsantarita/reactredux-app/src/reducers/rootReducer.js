import { combineReducers } from 'redux'

import { postsReducer } from './postsReducer'
import { commentsReducer } from './commentsReducer'



export const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer
})