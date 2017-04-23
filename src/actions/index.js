import data from '../util/data'

export const REQUEST_JOKES = 'REQUEST_JOKES'
export const RECEIVE_JOKES = 'RECEIVE_JOKES'
export const UPDATE_SEARCH = 'UPDATE_SEARCH'
export const SELECT_TAG = 'SELECT_TAG' 

export const requestJokes = () => ({
  type: REQUEST_JOKES,
})

export const receiveJokes = results => ({
  type: RECEIVE_JOKES,
  results,
})

export const fetchJokes = query => dispatch => {
  dispatch(requestJokes())

  data.search(query, { hitsPerPage: 1000 }, (err, data) => {
    dispatch(receiveJokes(data))
  })
}

export const updateSearch = query => ({
  type: UPDATE_SEARCH,
  query,
})

export const selectTag = tag => ({
  type: SELECT_TAG,
  tag,
})
