import { applyMiddleware, combineReducers, createStore } from "redux";
import {addNewTask, fetchReducer} from './MainReducer';
import thunk from "redux-thunk"


const rootReducer = combineReducers({
    addNewTask,
    fetchReducer
})

const store= createStore(rootReducer,applyMiddleware(thunk));
export default store;

