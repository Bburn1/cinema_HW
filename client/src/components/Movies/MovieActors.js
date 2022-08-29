import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { emptyActor } from '../../constants'
import { Grid, Stack } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getActorsByMovieAction } from '../../store/actions/movieDirectorsActorsAction'

function ActorsMovie() {
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getActorsByMovieAction(id))
  }, [dispatch, id])

  const {
    actorsList: { actors },
    movieActorsDirectorsList: { movieActors },
  } = useSelector((state) => state)

  const artist = actors.find((actor) => actor.id === parseInt(id))

  const actor = artist ? artist : emptyActor

  // console.log(movieActors)

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
        <h3>{actor.full_name}</h3>
      </Grid>
      <ul>
        {movieActors.map((actor) => {
          return (
            <li key={actor.actor_id} className='item-list-inbox'>
              <Link key={actor.actor_id} to={`/actors/${actor.actor_id}`}>
                <p>{actor.actor_name}</p>
              </Link>
              {/* <div className='edit-item_box'>
                <Link to={`new/${actor.id}`}>
                  <p id='edit' className='fa fa-pencil'></p>
                </Link> */}
              {/* <span
                  id='delete'
                  className='fa fa fa-trash-o'
                  onClick={() => onDeleteActor(actor.id)}
                ></span> */}
              {/* </div> */}
            </li>
          )
        })}
      </ul>
    </Grid>
  )
}
export default ActorsMovie
