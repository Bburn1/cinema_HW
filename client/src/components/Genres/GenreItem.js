import { Grid, Stack } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { emptyGenres } from '../../constants'

function GenreItem({ genres }) {
  const { id } = useParams()

  const gn = genres.find((item) => item.id === parseInt(id))

  const genre = gn ? gn : emptyGenres

  return (
    <Grid item lg={12} md={12} xl={12} sm={12} xs={12} className='movie-header'>
      <Stack>
        <h1>About genre {genre.title} </h1>
        <h3>Description:</h3>
        <p>{genre.description}</p>

        {/* <h3>Movies:</h3>

          {genre.movies.map((movie, index) => (
            <p key={index}>{movie}</p>
          ))} */}
      </Stack>
    </Grid>
  )
}

export default GenreItem
