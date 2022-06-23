import React, { useState } from 'react'

function Search({ searchMovies }) {

  const [value, setValue] = useState('iron')
  const [typeValue, setTypeValue] = useState('all')

  function handleKey(e) {
    if (e.key === 'Enter') {
      searchMovies(value, typeValue)
    }
  }

  function handleType(e) {
    setTypeValue(e.target.dataset.type)
    searchMovies(value, typeValue)
  }



  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field inline">
          <input id="email_inline" type="text" className="validate" placeholder='Search for ...' value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKey} />
          <button className='btn search-btn' onClick={() => { searchMovies(value, typeValue) }}>Search</button>
        </div>
        <div className='movie-sort'>
          <label>
            <input className="with-gap" name="search-for" type="radio" onChange={handleType} data-type='all'
              checked={() => setTypeValue('all')} />
            <span>All</span>
          </label>

          <label>
            <input className="with-gap" name="search-for" type="radio" onChange={handleType} data-type='movie'
              checked={() => setTypeValue('movie')} />
            <span>Movies</span>
          </label>

          <label>
            <input className="with-gap" name="search-for" type="radio" onChange={handleType} data-type='series'
              checked={() => setTypeValue('series')} />
            <span>Series</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Search