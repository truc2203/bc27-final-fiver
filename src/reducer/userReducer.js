const initialState = {
    userData:{}
}

const userReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'editUser':
            
            return {...state,userData:action.data}
    
        default:
            return state;
    }
}

export default userReducer