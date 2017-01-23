const HNReducer = (state = [], action) => {
  switch (action.type) {
  case 'FETCH_POSTS':
    return state
  case 'FETCH_POSTS_COMPLETE':
    return action.payload
  default:
    return state
  }
}

export default HNReducer
