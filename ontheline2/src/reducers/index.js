import 
{ LOGIN_USER_START,
  LOGIN_USER_SUCCESS, 
  LOGIN_USER_FAILURE, 
  ENTRY_START, 
  ENTRY_SUCCESS,
  ENTRY_FAILURE,
  ENTRY_ADD_START,
  ENTRY_ADD_SUCCESS,
  ENTRY_ADD_FAILURE,
  ENTRY_DELETE_START,
  ENTRY_DELETE_SUCCESS,
  ENTRY_DELETE_FAILURE,
} 
from "../actions";


const initialState = {
    fetchLogin: false,
    fetchEntries: false,
     error: null,
     userId: 0,
     entries: [],
     deleteEntries: false,
    
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
        case ENTRY_ADD_START:
            return {
                ...state,
                    fetchEntries: true
                };
        case ENTRY_ADD_SUCCESS:
                return {
                ...state,
                fetchEntries: false,
                error: null
                };
        case ENTRY_ADD_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                    fetchEntries: false
                }
        case ENTRY_DELETE_START:
                return {
                    ...state,
                    deleteEntries: true
                    };
        case ENTRY_DELETE_SUCCESS:
                return {
                    ...state,
                    deleteEntries: false,
                     error: null,
                     entries: state.entries.filter(entry => action.id !== entry.id )
                        };
        case ENTRY_DELETE_FAILURE:
                return {
                     ...state,
                      error: action.payload,
                      deleteEntries: false
                        }
              default: 
                return state;
    }
 }

export default rootReducer;

