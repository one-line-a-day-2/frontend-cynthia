import axios from 'axios';


// export const START = 'START';
// export const SUCCESS = 'SUCCESS';
// export const FAILURE = 'FAILURE';

export const LOGIN_USER_START= 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';



// export const fetchEntry = id => dispatch => {
//     console.log(fetchEntry)
//     dispatch({ type: START });
//     axios.get(`https://one-line-a-day-2.herokuapp.com/api/users/${id}/entries`,{ headers: 
//         {Authorization: localStorage.getItem("jwt") }}) 
//     .then(res => dispatch({ type: SUCCESS, payload: res.data }))
//     .catch(err => dispatch({ type: FAILURE, payload: err }))

// }


export const login = item => dispatch => {
    dispatch({ type: LOGIN_USER_START });
    axios
      .post("https://one-line-a-day-2.herokuapp.com/api/login", item)
      .then(res => {
        console.log(res);
        localStorage.setItem("jwt", res.data.token);
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: res.data.id
        });
        
      })
      .catch(err => dispatch({ type: LOGIN_USER_FAILURE, payload: err }));
  };



