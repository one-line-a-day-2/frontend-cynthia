import { START, SUCCESS, FAILURE } from "../actions";


const initialState = {
    fetchEntries: false,
     error: null,
    entries: [
        // {id: 0, title: 'First Entry', input: 'Something about a journal'},
        // {id: 1, title: 'Second Entry', input: 'Something about a journal'},
        // {id: 2, title: 'Third Entry', input: 'Something about a journal'}
    ]
};

 const rootReducer = (state = initialState, action ) => {
    switch (action.type) {
        case START:
          return {
            ...state,
              fetchEntries: true
          };
          case SUCCESS:
            return {
              ...state,
              entries: action.payload,
              fetchEntries: false,
              error: null
            };
          case FAILURE:
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