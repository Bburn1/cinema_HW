import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'

import {
  deleteMovieAction,
  getAllMoviesAction,
} from '../../store/actions/movieActions'

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

  const onDelete = (id) => {
    dispatch(deleteMovieAction(id))
  }

  return (
    <>
      <div>
        <Link to='new'>New</Link>
      </div>
      <Routes>
        <Route path='new' />
        <Route path=':id' element={<MovieItem movies={movies} />} />
        <Route
          path='/'
          element={<MovieList movies={movies} onDelete={onDelete} />}
        />
      </Routes>
    </>
  )
}

export default Movies
