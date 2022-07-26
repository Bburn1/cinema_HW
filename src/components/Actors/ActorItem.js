import { Grid, Stack } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { emptyActor } from '../../constants'

function ActorItem({ actors }) {
  const { id } = useParams()
  const artist = actors.find((actor) => actor.id === parseInt(id))

  const actor = artist ? artist : emptyActor

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
        <h1>{actor.fullName}</h1>
      </Grid>
      <Grid className='photo-container' item lg={5} md={5} xl={5} sm={5} xs={5}>
        <img className='photo' src={actor.image} alt='actor'></img>
      </Grid>
      <Grid item lg={7} md={7} xl={7} sm={7} xs={7}>
        <Stack>
          <h2>About actor</h2>
          <h3>{actor.fullName}</h3>
          <h3>{actor.birthYear}</h3>
          <h3>{actor.nationality}</h3>
          <h3>Movies:</h3>

          {actor.movies.map((movie, index) => (
            <p key={index}>{movie}</p>
          ))}
        </Stack>
      </Grid>
    </Grid>
  )
}

export default ActorItem
