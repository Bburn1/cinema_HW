import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMovieAction } from '../../store/actions/movieActions'

import { emptyMovie } from '../../constants'

function MovieItem() {
  const { id } = useParams()

  // const {
  //   moviesList: { movies },
  // } = useSelector((state) => state)

  // const currentMovie = movies.find((movie) => movie.id === parseInt(id))

  // console.log(id)
  // console.log(movies)
  // console.log(currentMovie)

  const {
    moviesList: { oneMovie },
  } = useSelector((state) => state)

  // const {
  //   moviesList: { movies },
  // } = useSelector((state) => state)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovieAction(id))
  }, [dispatch, id])
  // console.log(movies)

  return (
    <div>
      {/* <p>{currentMovie.title}</p>
      <img src={currentMovie.poster} /> */}

      <p>{oneMovie.title}</p>

      <img src={oneMovie.poster} alt='Poster' />
    </div>
  )
}

export default MovieItem
