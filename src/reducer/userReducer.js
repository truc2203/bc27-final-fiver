const initialState = {
    userData:{},
    userInfo:{},
    posted: true
}

const userReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'editUser':
            
            return {...state,userData:action.data}
        case 'changeInfo' :
            return {...state,userInfo:action.data}
        case 'postComment' : 
            return {...state,posted:action.isPosted}
        default:
            return state;
    }
}

export default userReducer