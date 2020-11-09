import React from 'react';
import PostsContainer from './containers/PostsContainer'
import CommentsContainer from './containers/CommentsContainer';
import Nav from './Nav';
import './App.css'
import Home from './Home'
import About from './About'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
    return(
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/posts">
                        <PostsContainer />
                    </Route>

                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;

            // <Nav />
            // <UsersContainer />
            // <PostsContainer />
            // <CommentsContainer />