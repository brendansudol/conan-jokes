import React, { Component } from 'react'
import {
  Configure,
  Hits,
  InstantSearch,
  Pagination,
  RefinementList,
  SearchBox,
} from 'react-instantsearch/dom'

const Item = ({ hit }) => <div className='my1'>{hit.body}</div>

class App extends Component {
  render() {
    return (
      <div className='p3'>
        <InstantSearch
          appId="6L4BP18C7G"
          apiKey="59e5d053f16aa77c6b7cd94ccb83746a"
          indexName="jokes"
        >
          <Configure hitsPerPage={25} />
          <SearchBox defaultRefinement="Trump" />
          <RefinementList attributeName="rating" />
          <Hits hitComponent={Item} />
          <Pagination />
        </InstantSearch>
      </div>
    )
  }
}

export default App
