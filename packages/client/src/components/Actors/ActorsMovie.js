import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { emptyActor } from '../../constants'
import { Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteMovieByActorAction,
  getMoviesByActorsAction,
} from '../../store/actions/actorMoviesAction'

function ActorsMovie() {
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getMoviesByActorsAction(id))
  }, [dispatch, id])

  const {
    actorsList: { actors },
    actorMoviesList: { actorsMovie },
  } = useSelector((state) => state)

  const artist = actors.find((actor) => actor.id === parseInt(id))

  const actor = artist ? artist : emptyActor

  const onDeleteMovie = ([actor_id, movie_id]) => {
    dispatch(deleteMovieByActorAction([actor_id, movie_id]))
  }

  console.log(id)

  return (
    <Grid container>
      )
      <Grid
        item
        lg={12}
        md={12}
        xl={12}
        sm={12}
        xs={12}
        className='movie-header'
      >
        <h3>{actor.full_name}</h3>
      </Grid>
      <ul>
        {actorsMovie.map((movie) => {
          return (
            <li key={movie.movie_id} className='item-list-inbox'>
              <Link key={movie.movie_id} to={`/movies/${movie.movie_id}`}>
                <p>{movie.movie_title}</p>
              </Link>
              <span
                id='delete'
                className='fa fa fa-trash-o'
                onClick={() => onDeleteMovie([actor.id, movie.movie_id])}
              ></span>
            </li>
          )
        })}
      </ul>
    </Grid>
  )
}
export default ActorsMovie
