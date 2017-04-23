import React from 'react'

const Results = ({ data, clickTag }) => {
  const { hits, nbHits: total } = data

  return (
    <div>
      <div className="mb2">
        <strong>{total}</strong> results
      </div>
      {hits.map(d => (
        <div key={d.id} className="mb3 border-left border-silver bw4 pl2 py2">
          <div className="mb2">{d.body}</div>
          <div className="mb2 h6">— {d.date}</div>
          {d.tags.map((tag, i) => (
            <button
              key={i}
              type="button"
              className="mb1 mr1 btn btn-sm btn-primary regular black bg-silver"
              onClick={clickTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Results
