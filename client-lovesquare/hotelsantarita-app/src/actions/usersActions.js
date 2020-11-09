const setUser = (payload) => ({ type: "SET_USER", payload})

export const logUserOut = () => ({type: "LOG_OUT"})


export const fetchUser = (userInfo) => dispatch => {
    fetch(`http://localhost:4000/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("token", data.token)
        dispatch(setUser(data.user))
    })
}

export const signUserUp = (userInfo) => dispatch => {
    fetch(`http://localhost:4000/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("token", data.token)
        dispatch(setUser(data.user))
    })
}

export const autoLogin = () => dispatch => {
    fetch(`http://localhost:4000/auto_login`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("token", data.token)
        dispatch(setUser(data.user))
    })
}




export const fetchUsers = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/users')
            .then(resp => resp.json())
            .then(users => dispatch({ type: 'FETCH_USERS', payload: users }))
    }
}

export const addUser = user => {
    return dispatch => {
        fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(user => dispatch({ type: 'ADD_USER', payload: user }))
    }
}