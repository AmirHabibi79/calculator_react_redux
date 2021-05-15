import {createStore} from "redux"
import allreducers from "./reducers"
let store=createStore(allreducers);
export default store