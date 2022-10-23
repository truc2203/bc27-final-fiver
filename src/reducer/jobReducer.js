const initialState = {
    jobDetail:{}
}

const jobReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'editJob':
            
            return {...state,jobDetail:action.booked}
    
        default:
            return state;
    }
}

export default jobReducer