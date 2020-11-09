export const fetchProfiles = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/profiles')
            .then(resp => resp.json())
            .then(profiles => dispatch({ type: 'FETCH_PROFILES', payload: profiles }))
    }
}

export const addProfile = profile => {
    return dispatch => {
        fetch('http://localhost:3000/profiles', {
            method: 'POST',
            body: JSON.stringify(profile),
            headers: { 'Content-Type': 'application/json'}
        })
            .then(resp => resp.json())
            .then(profile => dispatch({ type: 'ADD_PROFILE', payload: profile }))
    }
}