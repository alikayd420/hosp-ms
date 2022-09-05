import {
  CLEAR_ERRORS,
  USERS_LIST_FAIL,
  USERS_LIST_REQ,
  USERS_LIST_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQ,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQ,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQ,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQ,
  USER_UPDATE_RESET,
  USER_UPDATE_SUCCESS,
} from "../actionTypes/userTypes";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQ:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQ:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USERS_LIST_REQ:
      return { loading: true, users: [] };
    case USERS_LIST_SUCCESS:
      return {
        loading: false,
        users: action.payload.users,
        //   pages: action.payload.pages,
        //   page: action.payload.page,
      };
    case USERS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQ:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case USER_DETAILS_RESET:
      return { user: {} };
    default:
      return state;
  }
};
export const userProfileUpdateInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_REQ:
      return { ...state, loading: true };
    case USER_UPDATE_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case USER_UPDATE_RESET:
      return {};
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
