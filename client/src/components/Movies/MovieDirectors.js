import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { emptyDirectors } from '../../constants'
import { Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getDirectorsByMovieAction } from '../../store/actions/movieDirectorsActorsAction'

function DirectorsMovie() {
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getDirectorsByMovieAction(id))
  }, [dispatch, id])

  const {
    directorsList: { directors },
    movieActorsDirectorsList: { movieDirectors },
  } = useSelector((state) => state)

  const artist = directors.find((director) => director.id === parseInt(id))

  const director = artist ? artist : emptyDirectors

  console.log(movieDirectors)

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
        <h3>{director.full_name}</h3>
      </Grid>
      <ul>
        {movieDirectors.map((director) => {
          return (
            <li key={director.director_id} className='item-list-inbox'>
              <Link
                key={director.director_id}
                to={`/directors/${director.director_id}`}
              >
                <p>{director.director_name}</p>
              </Link>
              {/* <div className='edit-item_box'>
                <Link to={`new/${director.id}`}>
                  <p id='edit' className='fa fa-pencil'></p>
                </Link> */}
              {/* <span
                  id='delete'
                  className='fa fa fa-trash-o'
                  onClick={() => onDeleteDirector(director.id)}
                ></span> */}
              {/* </div> */}
            </li>
          )
        })}
      </ul>
    </Grid>
  )
}
export default DirectorsMovie
