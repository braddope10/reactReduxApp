import React from 'react';
import UsersContainer from './UsersContainer'
import PostsContainer from './PostsContainer'
import CommentsContainer from './CommentsContainer';
import Nav from './Nav'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
    return(
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        {/* <Landing /> */}
                    </Route>

                    <Route>
                        {/* <Home /> */}
                    </Route>

                    <Route>
                        <PostsContainer />
                    </Route>

                    <Route>
                        <UsersContainer />
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