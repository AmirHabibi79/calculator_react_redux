import {combineReducers} from "redux"
import calcReducer from "./calcReducer"
import menuReducer from './menuReducer'
const allreducers=combineReducers({
    calc:calcReducer,
    menu:menuReducer
})

export default allreducers