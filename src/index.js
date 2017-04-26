import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import { updateSearch } from './actions'
import reducer from './reducers'
import App from './containers/App'
import { parseUrl } from './util/misc'

import 'ace-css/css/ace.min.css'
import './css/index.css'

const middleware = [thunk, createLogger()]
const store = createStore(reducer, applyMiddleware(...middleware))

const query = parseUrl()
if (query) store.dispatch(updateSearch(query))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
