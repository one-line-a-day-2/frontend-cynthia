import 
{ LOGIN_USER_START,
  LOGIN_USER_SUCCESS, 
  LOGIN_USER_FAILURE, 
  ENTRY_START, 
  ENTRY_SUCCESS,
  ENTRY_FAILURE 
} 
from "../actions";


const initialState = {
    fetchLogin: false,
    fetchEntries: false,
     error: null,
     userId: 0,
    
};

 const rootReducer = (state = initialState, action ) => {
    switch (action.type) {
        case LOGIN_USER_START:
        return {
            ...state,
            fetchLogin: true
        };
        case LOGIN_USER_SUCCESS:
        return {
            ...state,
            fetchLogin: false,
            error: false,
            userId: action.payload
        };
        case LOGIN_USER_FAILURE:
        return {
            ...state,
            fetchLogin: false,
            error: action.payload
        };
        case ENTRY_START:
            return {
                ...state,
                fetchEntries: true
            };
        case ENTRY_SUCCESS:
            return {
              ...state,
              entries: action.payload,
              fetchEntries: false,
              error: null
            };
        case ENTRY_FAILURE:
              return {
                ...state,
                error: action.payload,
                fetchEntries: false
              }
              default: 
                return state;
    }
 }

export default rootReducer;


// case ADD_FRIENDS:
//               return {
//                   ...state,
//                   fetchingFriends: true
//               }
//         case ADD_SUCCESS:
//               return {
//                   ...state,
//                   fetchingFriends: false,
//                   error: null,
//                   friends: action.payload
                
//               }
//               case ADD_FAILURE:
//               return {
//                 ...state,
//                 error: action.payload,
//                 fetchingFriends: false
//               }
//               case DELETE_FRIENDS:
//               return {
//                   ...state,
//                   deleteFriends: true,
//                 //   fetchingFriends: true, //might change
//               }
//               case DELETE_SUCCESS:
//               return {
//                   ...state,
//                   fetchingFriends: false,
//                   error: null,
//                   friends: action.payload
                
//               }
//               case DELETE_FAILURE:
//               return {
//                 ...state,
//                 error: action.payload,
//                 fetchingFriends: false
//               }
