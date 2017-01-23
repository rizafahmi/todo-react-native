import { createStore } from 'redux'
import HNReducer from './reducers.js'

const store = createStore(HNReducer)

export default store
