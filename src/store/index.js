import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducer from './reducer'
const middleware = applyMiddleware(ReduxThunk)
const store = createStore(reducer, middleware)
export default store
