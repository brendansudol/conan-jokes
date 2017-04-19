import React, { Component } from 'react'
import Algolia from 'algoliasearch'

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
    const { search } = this.state
    this.getResults(search)
  }

  updateSearch = e => {
    this.setState({ search: e.target.value })
  }

  render() {
    const { results, search } = this.state

    return (
      <div className='p3 mx-auto' style={{ maxWidth: 600 }}>
        <form className='mb3 flex' onSubmit={this.submitHandler}>
          <label className='hide'>Search</label>
          <input
            type='text'
            className='flex-auto field rounded-left'
            value={search}
            onChange={this.updateSearch}
          />
          <button
            type='submit'
            className='btn rounded-right border black bg-silver'
          >
            Go
          </button>
        </form>
        {results && results.hits.map(hit => (
          <div key={hit.id} className='mb3'>{hit.body}</div>
        ))}
      </div>
    )
  }
}

export default App
