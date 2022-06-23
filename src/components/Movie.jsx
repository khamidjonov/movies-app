import React from 'react'

function Movie({ Title, Year, imdbID, Type, Poster }) {
  return (
    <div id={imdbID} className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={Poster} alt={Title} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{Title}<i className="material-icons right">more_vert</i></span>
        <p> {Year} <span> {Type} </span></p>
      </div>
    </div>
  )
}

export default Movie