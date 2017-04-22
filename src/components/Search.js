import React from 'react'

const Search = ({ value, submit, update }) => (
  <form className='mb3 flex' onSubmit={submit} style={{ maxWidth: 350 }}>
    <label className='hide'>Search</label>
    <input
      type='text'
      className='m0 flex-auto rounded-left field'
      placeholder='Search by joke or topic...'
      value={value}
      onChange={update}
    />
    <button
      type='submit'
      className='btn btn-primary bg-orange rounded-right'
    >
      Go
    </button>
  </form>
)

export default Search
