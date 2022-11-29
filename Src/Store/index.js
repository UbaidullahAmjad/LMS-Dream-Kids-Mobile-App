import {
    createStore,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
const middleware = [thunk]

import rootReducer from './Reducer'
const initialState = {}

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store