import { Grid, Stack } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import moment from 'moment'
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
        <h1>{director.full_name}</h1>
      </Grid>
      <Grid className='photo-container' item lg={5} md={5} xl={5} sm={5} xs={5}>
        <img className='photo' src={director.image} alt='director'></img>
      </Grid>
      <Grid item lg={7} md={7} xl={7} sm={7} xs={7}>
        <Stack>
          <h2>About Director</h2>
          <h3>Full Name: {director.full_name}</h3>
          <h3>Birth: {moment(director.birth_year).format(' DD.MM.YYYY')}</h3>
          <h3>
            Death:
            {director.death_year === null
              ? ''
              : moment(director.death_year).format(' DD.MM.YYYY')}
          </h3>

          <h3>Nationality: {director.nationality}</h3>

          <Link key={director.id} to={`movies`}>
            <p>Movies</p>
          </Link>
          {/* <h3>Movies:</h3>

          {director.movies.map((movie, index) => (
            <p key={index}>{movie}</p>
          ))} */}
        </Stack>
      </Grid>
    </Grid>
  )
}

export default DirectorItem
