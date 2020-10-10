export const fetchPosts = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/posts')
            .then(resp => resp.json())
            .then(posts => dispatch({ type: 'FETCH_POSTS', payload: posts }))
    }
}