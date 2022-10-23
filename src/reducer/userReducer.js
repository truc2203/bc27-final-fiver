const initialState = {
    userData:{},
    userInfo:{}
}

const userReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'editUser':
            
            return {...state,userData:action.data}
        case 'changeInfo' :
            return {...state,userInfo:action.data}
        default:
            return state;
    }
}

export default userReducer