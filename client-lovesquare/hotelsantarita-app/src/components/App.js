import React from 'react';
import UsersContainer from './containers/UsersContainer'
import PostsContainer from './containers/PostsContainer'
import CommentsContainer from './containers/CommentsContainer';
import ProfilesContainer from '../components/containers/ProfilesContainer'
import Nav from './Nav';
import SignedInNav from './SignedInNav';
import './App.css'
import Home from './Home'
import About from './About'
import Logout from './Logout'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
    return(
        <Router>
            <div>
                {<SignedInNav />}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/posts">
                        <PostsContainer />
                    </Route>

                    <Route path="/profile"> 
                        <ProfilesContainer />
                    </Route>

                    <Route path="/about">
                        <About />
                    </Route>

                    <Route path="/logout">
                        <Logout />
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