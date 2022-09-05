import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userProfileUpdateInfoReducer,
  userRegisterReducer,
} from "./userReducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userLogin"],
};

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdate: userProfileUpdateInfoReducer,
  userList: userListReducer,
});

export default persistReducer(persistConfig, rootReducer);
