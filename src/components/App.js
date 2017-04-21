import React, { Component } from 'react'
import Algolia from 'algoliasearch'

import Footer from './Footer'
import Header from './Header'
import Results from './Results'
import Search from './Search'

const client = Algolia('6L4BP18C7G', '59e5d053f16aa77c6b7cd94ccb83746a')
const index = client.initIndex('jokes')

class App extends Component {
  state = {
    results: null,
    search: '',
  }

  componentDidMount() {
    this.getResults('Trump')
  }

  getResults = query => {
    index.search(query, (err, results) => {
      this.setState({ results })
    })
  }

  submitHandler = e => {
    e.preventDefault()
    this.getResults(this.state.search)
  }

  updateSearch = e => {
    this.setState({ search: e.target.value })
  }

  render() {
    const { results, search } = this.state

    return (
      <div className='p3' style={{ maxWidth: 600 }}>
        <Header />
        <Search
          value={search}
          submit={this.submitHandler}
          update={this.updateSearch}
        />
        {results && <Results data={results.hits} />}
        <Footer />
      </div>
    )
  }
}

export default App
