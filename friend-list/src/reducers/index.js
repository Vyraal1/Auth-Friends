import {
  FETCHING_START,
  FETCHING_SUCCESS,
  FETCHING_FAIL,
  POST_FAIL,
  POST_SUCCESS,
  POST_START,
  LOGIN_START,
  SUCCESS_LOGIN,
  FAIL_LOGIN
} from "../actions";

const initialState = {
  friends: [],
  fetchingFriends: false,
  addingFriend: false,
  editingFriend: false,
  error: {}
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return { ...state, fetchingFriends: true };
    case FETCHING_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friends: action.payload
      };
    case FETCHING_FAIL:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload
      };
  }
};
