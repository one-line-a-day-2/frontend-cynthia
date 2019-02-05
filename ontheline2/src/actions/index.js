import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// export const logIn = (user) => dispatch => {
//     dispatch({ type: LOGIN_START});
//     const res = axios.post('https://one-line-a-day-2.herokuapp.com/api/login', user)
//     .then(res => dispatch({ type: LOGIN_SUCCESS}),
//     localStorage.setItem("jwt", res.data.token))
//     // .then(() => {
//     //     this.props.history.push("/users");
//     //   })
//     .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err}))
// }



