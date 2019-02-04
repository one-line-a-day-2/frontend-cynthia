import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (user) => dispatch => {
    dispatch({ type: LOGIN_START });
    axios.post('http://localhost:3003/api/login', user )
    .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
    .catch(err =>({ type: LOGIN_FAILURE, payload: err}))
}