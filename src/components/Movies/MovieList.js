import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getAllMoviesAction } from '../../store/actions/movieActions'
import MovieItem from './MovieItem'

function MovieList() {
  const dispatch = useDispatch()
  const {
    moviesList: { movies },
  } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getAllMoviesAction())
  }, [dispatch])

  // const getMovie = ({ id }) => {
  //   dispatch(getMovieAction(id))
  //   console.log(id)
  // }

  return (
    <div>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link
                element={<MovieItem movie={movie} />}
                key={movie.id}
                to={`${movie.id}`}
              >
                <p>{movie.title}</p>
              </Link>
              <Link to={`new/${movie.id}`}>
                <p>Edit</p>
              </Link>
            </li>
          )
        })}
        {/* <Routes>
          <Route path=':id' element={<MovieItem />} />
        </Routes> */}
      </ul>
    </div>
  )
}

export default MovieList
