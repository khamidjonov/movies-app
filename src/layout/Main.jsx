import { useState } from 'react'
import { useEffect } from 'react'

import Loader from '../components/Loader';
import Movies from '../components/Movies'
import Search from '../components/Search';

function Main() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetch('http://www.omdbapi.com/?apikey=fb55926b&s=iron')
      .then(res => res.json())
      .then(res => {
        setData(res.Search);
        setLoading(false)
      })
  }, [])

  function searchMovies(str, type = 'all') {
    setData([])
    setLoading(true)
    fetch(`http://www.omdbapi.com/?apikey=fb55926b&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(res => res.json())
      .then(data => {
        setData(data.Search)
        setLoading(false)
      })
  }

  return (
    <div className='container content' >
      <Search searchMovies={searchMovies} />
      {
        !loading ? <Movies movies={data} /> : <Loader />
      }
    </div >
  )
}

export default Main