const initialState = {
    typeJobDedail : {}
}

const jobManageReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'editTypeJob':
            
            return {...state,typeJobDedail:action.data}
    
        default:
            return state;
    }
}

export default jobManageReducer