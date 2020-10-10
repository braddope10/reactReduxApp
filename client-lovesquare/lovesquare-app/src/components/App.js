import React from 'react';
import UsersContainer from './UsersContainer'
import PostsContainer from './PostsContainer'
import CommentsContainer from './CommentsContainer';

const App = () => {
    return(
        <div>
            <UsersContainer />
            <PostsContainer />
            <CommentsContainer />
        </div>
    )
}

export default App;