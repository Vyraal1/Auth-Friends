import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAIL = "FETCHING_FAIL";

export const LOGIN_START = "LOGIN_START";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const FAIL_LOGIN = "FAIL_LOGIN";

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_FAIL";

const FRIENDS_LINK = "/api/friends";

// where does this even go?
export const login = () => {
  //post request
  //saves returned token to local storage
  //if log successful, changes the state of the log in so route adjusts view
  //if login fails, changes the state of the login error, so error message pops up
};

export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING_START });
  axiosWithAuth
    .get(FRIENDS_LINK)
    .then(res => dispatch({ type: FETCHING_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCHING_FAIL, payload: err }));
};

export const addFriend = friend => dispatch => {
  dispatch({ type: POST_START });
  axiosWithAuth
    .post(`/api/friends`, friend)
    .then(res => dispatch({ type: POST_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: POST_FAIL, payload: err.error }));
};
