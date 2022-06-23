import React from 'react'
import Movie from './Movie'

function Movies({ movies = [] }) {
  return (
    <div className='movies'>
      {movies.length ? movies.map(item => (
        <Movie key={item.imdbID} {...item} />
      )) : <h4>Nothing Found</h4>}
    </div>
  )
}

export default Movies