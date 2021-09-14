import { combineReducers } from "redux";
import booksData from './booksReducer'
const rootReducer = combineReducers({
    booksData
})

export default rootReducer