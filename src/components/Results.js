import React from 'react'

const Results = ({ data }) => (
  <div>
    {data.map(d => (
      <div
        key={d.id}
        className='mb3 border-left bw4 pl2 py2'
        style={{ borderColor: 'rgba(0, 0, 0, .0625)' }}
      >
        {d.body}
      </div>
    ))}
  </div>
)

export default Results
