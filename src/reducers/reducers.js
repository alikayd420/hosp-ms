import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  userListReducer,
  userLoginReducer,
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
  userList: userListReducer,
});

export default persistReducer(persistConfig, rootReducer);
