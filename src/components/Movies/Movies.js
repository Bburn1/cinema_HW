import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, Route, Routes } from 'react-router-dom'

import { getAllMoviesAction } from '../../store/actions/movieActions'

import MovieItem from './MovieItem'
import MovieList from './MovieList'

function Movies() {
  const dispatch = useDispatch()
  const {
    moviesList: { movies },
  } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getAllMoviesAction())
  }, [dispatch])

  return (
    <>
      <div>
        <Link to='new' className='new-btn'>
          New
        </Link>
      </div>
      <Routes>
        <Route path=':id' element={<MovieItem movies={movies} />} />
        <Route path='/' element={<MovieList movies={movies} />} />
        <Route path='new' element={<Navigate to='/movies/new/:id' />} />
      </Routes>
    </>
  )
}

export default Movies
