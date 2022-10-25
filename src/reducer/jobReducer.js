const initialState = {
    jobDetail:{},
    subTypeJobInfo:{}
}

const jobReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'editJob':
            
            return {...state,jobDetail:action.booked}
        case 'editSubTypeJob' :
            return {...state,subTypeJobInfo:action.value}
        default:
            return state;
    }
}

export default jobReducer