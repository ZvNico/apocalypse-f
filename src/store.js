import {applyMiddleware, legacy_createStore as createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import appReducer from "./reducers"
import promise from "redux-promise"
import thunk from "redux-thunk"


const middleware = [promise, thunk]

const compose = composeWithDevTools(applyMiddleware(...middleware))
const store = createStore(appReducer, compose)

export default store
