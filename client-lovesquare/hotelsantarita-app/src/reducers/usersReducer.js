const defaultState = {
    loggedIn: false,
    user: {}
}

export const usersReducer = (state = defaultState, action) => {
    switch(action.type){
        case "SET_USER":
            return { loggedIn: true, user: {...action.payload} }
        case "LOG_OUT":
            localStorage.clear()
            return { loggedIn: false, user: {} }
        case 'FETCH_USERS':
            return action.payload
        case 'ADD_USER':
            return [...state, action.payload]
        default: 
            return state
    }
}




// export const usersReducer = (state= [], action) => {
//     switch(action.type){
//         case 'FETCH_USERS':
//             return action.payload
//         case 'ADD_USER':
//             return [...state, action.payload]
//         default:
//             return state
//     }
// }