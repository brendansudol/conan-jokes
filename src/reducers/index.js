import {
  REQUEST_JOKES,
  RECEIVE_JOKES,
  UPDATE_SEARCH,
  SELECT_TAG,
} from '../actions'

const reducer = (
  state = {
    results: null,
    query: '',
    isFetching: false,
  },
  action,
) => {
  switch (action.type) {
    case REQUEST_JOKES:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_JOKES:
      return {
        ...state,
        isFetching: false,
        results: action.results,
      }
    case UPDATE_SEARCH:
      return {
        ...state,
        query: action.query,
      }
    case SELECT_TAG:
      return {
        ...state,
        results: null,
        query: action.tag,
      }
    default:
      return state
  }
}

export default reducer
