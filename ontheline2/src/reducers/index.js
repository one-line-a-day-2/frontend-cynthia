import { LOGIN_START, LOGIN_FAILURE,
//  LOGIN_SUCCESS,
// LOGIN_FAILURE
} 

from '../actions'


const initialState = {
    authenticated: '',
    error: ''
};

 const loginReducer = (state = initialState, action ) => {
    switch(action.type) {
        case LOGIN_START:
            return { ...state, authenticated: action.payload }
        case LOGIN_FAILURE:
            return {...state, error: action.payload }
        default:
            return state;
    }
}

export default loginReducer;