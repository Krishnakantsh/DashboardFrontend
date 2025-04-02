import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import  {thunk}  from "redux-thunk";
import { AdminReducer } from "./Admin/Reducer";
import { ImageReducer } from "./images/Reducer";
import { BlogReducer } from "./blogs/Reducer";

const rootReducers = combineReducers({

  admin:AdminReducer,
  images:ImageReducer,
  blogs:BlogReducer,

})

export  const store = legacy_createStore(rootReducers, applyMiddleware(thunk) )