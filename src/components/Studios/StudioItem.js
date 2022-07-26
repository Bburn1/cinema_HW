import { Grid, Stack } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { emptyStudios } from '../../constants'

function StudioItem({ studios }) {
  const { id } = useParams()

  const bufStudios = studios.find((studio) => studio.id === parseInt(id))

  const studio = bufStudios ? bufStudios : emptyStudios

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
        <h1>{studio.title}</h1>
      </Grid>
      <Grid className='photo-container' item lg={6} md={6} xl={6} sm={6} xs={6}>
        <img className='photo' src={studio.logo} alt='studio'></img>
      </Grid>

      <Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
        <Stack>
          <h2>About studio</h2>
          <h3>{studio.location}</h3>
          <h3>{studio.foundationYear}</h3>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default StudioItem
