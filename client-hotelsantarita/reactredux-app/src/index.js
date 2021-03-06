// react-redux, redux, thunk

import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './components/App'
import { rootReducer } from './reducers/rootReducer'

// need to create a store for redux => createStore 1. reducer 2. dev tools

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
    )

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)