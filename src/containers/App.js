import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchJokes, selectTag, updateSearch } from '../actions'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Results from '../components/Results'
import Search from '../components/Search'

class App extends Component {
  handleSearchSubmit = e => {
    e.preventDefault()

    const { dispatch, query } = this.props
    if (!query) return
    dispatch(fetchJokes(query))
  }

  handleSearchChange = e => {
    this.props.dispatch(updateSearch(e.target.value))
  }

  handleTagClick = tag => () => {
    const { dispatch } = this.props
    dispatch(selectTag(tag))
    dispatch(fetchJokes(tag))
  }

  render() {
    const { results, query } = this.props

    return (
      <div className="p2 sm-p3 app" style={{ maxWidth: 600 }}>
        <Header />
        <main>
          <Search
            value={query}
            submit={this.handleSearchSubmit}
            update={this.handleSearchChange}
          />
          {results && <Results data={results} clickTag={this.handleTagClick} />}
        </main>
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  query: PropTypes.string.isRequired,
  results: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(App)
