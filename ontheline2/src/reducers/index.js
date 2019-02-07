import { LOGIN_USER_START,LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "../actions";


const initialState = {
    fetchEntries: false,
     error: null,
     userId: 0,
    
};

 const rootReducer = (state = initialState, action ) => {
    switch (action.type) {
        case LOGIN_USER_START:
        return {
            ...state,
            fetchEntries: true
        };
        case LOGIN_USER_SUCCESS:
        return {
            ...state,
            fetchEntries: false,
            error: false,
            userId: action.payload
        };
        case LOGIN_USER_FAILURE:
        return {
            ...state,
            fetchEntries: false,
            error: action.payload
        };
        //     case START:
        //     return {
        //         ...state,
        //         fetchEntries: true
        //     };
        //   case SUCCESS:
        //     return {
        //       ...state,
        //       entries: action.payload,
        //       fetchEntries: false,
        //       error: null
        //     };
        //   case FAILURE:
        //       return {
        //         ...state,
        //         error: action.payload,
        //         fetchEntries: false
        //       }
              default: 
                return state;
    }
 }

export default rootReducer;