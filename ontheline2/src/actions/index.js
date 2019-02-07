import axios from 'axios';


export const START = 'START';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// export const ADD_ENTRY= 'ADD_ENTRY';
// export const ADD_SUCCESS = 'ADD_SUCCESS';
// export const ADD_FAILURE = 'ADD_FAILURE';



export const fetchEntry = id => dispatch => {
    console.log(fetchEntry)
    dispatch({ type: START });
    axios.get(`https://one-line-a-day-2.herokuapp.com/api/users/${id}/entries`,{ headers: 
        {Authorization: localStorage.getItem("jwt") }}) 
    .then(res => dispatch({ type: SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FAILURE, payload: err }))

}


// export const addEntry = () => dispatch => {
//     dispatch({ type: ADD_ENTRY });
//     axios.post("https://one-line-a-day-2.herokuapp.com/api/users/userID/entries") //something in the comma 
//     .then(res => dispatch({ type: ADD_SUCCESS, payload: res.data }))
//     .catch(err => dispatch({ type: ADD_FAILURE, payload: err }))

// }



