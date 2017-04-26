import React from 'react'

import Suggestions from './Suggestions'

const Search = ({ query, results, submit, suggest, update }) => {
  const showSuggestions = query === '' && !results

  return (
    <div className="mb3">
      <form className="flex" onSubmit={submit} style={{ maxWidth: 350 }}>
        <label className="hide">Search</label>
        <input
          type="text"
          className="m0 flex-auto rounded-left field"
          placeholder="Search by joke or topic..."
          value={query}
          onChange={update}
        />
        <button
          type="submit"
          className="btn btn-primary bg-orange rounded-right"
        >
          Go
        </button>
      </form>
      {showSuggestions && <Suggestions suggest={suggest} />}
    </div>
  )
}

export default Search
