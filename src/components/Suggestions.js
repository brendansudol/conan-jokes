import React from 'react'

const options = ['Sports', 'Tech', 'Donald Trump']

const Suggestions = ({ suggest }) => (
  <p className="h5">
    <span className="mr1">For example:</span>
    {options.map(o => (
      <a key={o} className="mr1 black" href="#!" onClick={suggest(o)}>{o}</a>
    ))}
  </p>
)

export default Suggestions
