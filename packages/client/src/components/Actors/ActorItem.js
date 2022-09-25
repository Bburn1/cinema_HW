import { Grid, Stack } from '@mui/material'
import React from 'react'
import moment from 'moment'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { emptyActor } from '../../constants'
import { useSelector } from 'react-redux'

function ActorItem() {
  const {
    actorsList: { actors },
  } = useSelector((state) => state)
  const { id } = useParams()
  const artist = actors.find((actor) => actor.id === parseInt(id))

  const actor = artist ? artist : emptyActor
  // console.log(window.location.pathname)

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
        <h1>{actor.full_name}</h1>
      </Grid>
      <Grid className='photo-container' item lg={5} md={5} xl={5} sm={5} xs={5}>
        <img className='photo' src={actor.photo} alt='actor'></img>
      </Grid>
      <Grid item lg={7} md={7} xl={7} sm={7} xs={7}>
        <Stack>
          <h2>About actor</h2>
          <h3>Full Name: {actor.full_name}</h3>
          <h3>Birth: {moment(actor.birth_year).format(' DD.MM.YYYY')}</h3>
          <h3>
            Death:
            {actor.death_year === null
              ? ''
              : moment(actor.death_year).format(' DD.MM.YYYY')}
          </h3>

          <h3>Nationality: {actor.nationality}</h3>

          <Link key={actor.id} to={`movies`}>
            <p>Movies</p>
          </Link>

          {/* <h3>Movies:</h3> */}

          {/* {actor.movies.map((movie, index) => (
            <p key={index}>{movie}</p>
          ))} */}
        </Stack>
      </Grid>
    </Grid>
  )
}

export default ActorItem
