import React from 'react'

const Search = ({ value, submit, update }) => (
  <form className='mb3 flex' onSubmit={submit} style={{ maxWidth: 350 }}>
    <label className='hide'>Search</label>
    <input
      type='text'
      className='flex-auto rounded-left field'
      value={value}
      onChange={update}
    />
    <button
      type='submit'
      className='btn rounded-right border black bg-silver'
    >
      Go
    </button>
  </form>
)

export default Search
