import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { emptyDirectors } from '../../constants'
import { Grid, Stack } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteMovieByDirectorAction,
  getMoviesByDirectorsAction,
} from '../../store/actions/directorMoviesAction'

function DirectorsMovie() {
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getMoviesByDirectorsAction(id))
  }, [dispatch, id])

  const {
    directorsList: { directors },
    directorMoviesList: { directorsMovie },
  } = useSelector((state) => state)

  const artist = directors.find((director) => director.id === parseInt(id))

  const director = artist ? artist : emptyDirectors

  const onDeleteMovie = ([director_id, movie_id]) => {
    dispatch(deleteMovieByDirectorAction([director_id, movie_id]))
  }

  return (
    <Grid container>
      <Grid
        item
        lg={12}
        md={12}
        xl={12}
        sm={12}
        xs={12}
        className='movie-header'
      >
        <h3>{director.full_name}</h3>
      </Grid>
      <ul>
        {directorsMovie.map((movie) => {
          return (
            <li key={movie.movie_id} className='item-list-inbox'>
              <Link key={movie.movie_id} to={`/movies/${movie.movie_id}`}>
                <p>{movie.movie_title}</p>
              </Link>
              <span
                id='delete'
                className='fa fa fa-trash-o'
                onClick={() => onDeleteMovie([director.id, movie.movie_id])}
              ></span>
            </li>
          )
        })}
      </ul>
    </Grid>
  )
}
export default DirectorsMovie
