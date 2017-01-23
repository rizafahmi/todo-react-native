import { combineReducers } from 'redux'

const initialState = [
  {
    title: 'react native',
    id: 1
  },
  {
    title: 'redux',
    id: 2
  }
]
const HNReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return state
    case 'FETCH_POSTS_COMPLETE':
      return action.payload
    case 'ADD_POST':
      debugger
      return [...state, action.payload]
    default:
      return state
  }
}

export default combineReducers({
  HNReducer: HNReducer
})
