import { Grid, Stack } from '@mui/material'
import moment from 'moment'
import React from 'react'

import { Link, useParams } from 'react-router-dom'
import { emptyMovie } from '../../constants'

function MovieItem({ movies }) {
  const { id } = useParams()

  const film = movies.find((item) => item.id === parseInt(id))
  const movie = film ? film : emptyMovie
  // console.log(movie)

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
        <h1>{movie.title}</h1>
      </Grid>
      <Grid className='photo-container' item lg={5} md={5} xl={5} sm={5} xs={5}>
        <img className='photo' src={movie.poster} alt='movie'></img>
      </Grid>
      <Grid item lg={7} md={7} xl={7} sm={7} xs={7}>
        <Stack>
          <h2>About Movie</h2>

          <h3>Genre: {movie.genre}</h3>

          <h3>Studio: {movie.studio}</h3>

          <h3>
            Relese year: {moment(movie.release_year).format('DD.MM.YYYY')}
          </h3>
          <ul>
            <li>
              <Link key={movie.id} to={`actors`}>
                <p>Actors</p>
              </Link>
            </li>
            <li>
              <Link key={movie.id} to={`directors`}>
                <p>Directors</p>
              </Link>
            </li>
          </ul>

          {/* {movie.directors.map((director, index) => (
            <p key={index}>{director}</p>
          ))} */}

          {/* <h3>Actors:</h3>
          {movie.actors.map((actor, index) => (
            <p key={index}>{actor}</p>
          ))} */}

          {/* <h3>Studios:</h3>
          {movie.studios.map((studio, index) => (
            <p key={index}>{studio}</p>
          ))} */}
        </Stack>
      </Grid>
    </Grid>
  )
}

export default MovieItem
