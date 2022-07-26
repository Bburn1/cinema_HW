import { Grid, Stack } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { emptyDirectors } from '../../constants'

function DirectorItem({ directors }) {
  const { id } = useParams()

  const prod = directors.find((item) => item.id === parseInt(id))

  const director = prod ? prod : emptyDirectors

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
        <h1>{director.fullName}</h1>
      </Grid>
      <Grid className='photo-container' item lg={5} md={5} xl={5} sm={5} xs={5}>
        <img className='photo' src={director.image} alt='director'></img>
      </Grid>
      <Grid item lg={7} md={7} xl={7} sm={7} xs={7}>
        <Stack>
          <h2>About Director</h2>
          <h3>{director.fullName}</h3>
          <h3>{director.birthYear}</h3>
          <h3>{director.nationality}</h3>
          <h3>Movies:</h3>

          {director.movies.map((movie, index) => (
            <p key={index}>{movie}</p>
          ))}
        </Stack>
      </Grid>
    </Grid>
  )
}

export default DirectorItem
