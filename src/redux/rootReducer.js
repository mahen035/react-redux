import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import { customerReducer } from "./customerReducer";
import { postReducer } from "./postReducer";

export const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
    posts: postReducer
})