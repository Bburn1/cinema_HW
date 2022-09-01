import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, Field, ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'
import { Button, ButtonGroup, Stack } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
// import AddIcon from '@mui/icons-material/Add'

// import DeleteIcon from '@mui/icons-material/Delete'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'

import {
  createMovieAction,
  updateMovieAction,
} from '../../store/actions/movieActions'
import { emptyMovie } from '../../constants'

import '../layout.css'
import moment from 'moment'

function MovieForm() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    moviesList: { movies },
    genresList: { genres },
    studiosList: { studios },
  } = useSelector((state) => state)

  const film = movies.find((item) => item.id === parseInt(id))
  const currentMovie = film ? film : emptyMovie

  // console.log(title)
  const schema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
  })

  // console.log(genres)
  // console.log(movies)

  const goHome = () => navigate('/movies')

  const onMovieSubmit = (values) => {
    !values.id
      ? dispatch(createMovieAction(values))
      : dispatch(updateMovieAction(values))
    goHome()
  }

  const renderFormik = ({ values, isValid }) => {
    return (
      <Form>
        <Stack className='field-container'>
          <Stack direction='row' spacing={2}>
            <label htmlFor='title'>title</label>
            <Field name='title'></Field>
          </Stack>
          <ErrorMessage name='title'>
            {(msg) => <div className='error'>{msg}</div>}
          </ErrorMessage>
        </Stack>

        <Stack direction='row' spacing={2}>
          <label htmlFor='release_year'>Release Year</label>
          <Field
            type='date'
            name='release_year'
            // defaultValue='11/11/2015'
            value={
              !currentMovie || currentMovie.release_year === null
                ? null
                : moment(currentMovie.birth_year).format('yyyy-MM-DD')
            }
          ></Field>
        </Stack>

        <Stack direction='row' spacing={2}>
          <label htmlFor='genre'>Genre</label>
          <Field as='select' name='genre'>
            <option value={values.genre}>{values.genre}</option>
            {genres.map((genre, index) => (
              <option value={genre.title} key={index}>
                {genre.title}
              </option>
            ))}
          </Field>
        </Stack>

        <Stack direction='row' spacing={2}>
          <label htmlFor='studio'>Studio</label>
          <Field as='select' name='studio'>
            <option value={values.studio}>{values.studio}</option>
            {studios.map((studio, index) => (
              <option value={studio.title} key={index}>
                {studio.title}
              </option>
            ))}
          </Field>
        </Stack>

        <Stack direction='row' spacing={2}>
          <label htmlFor='poster'>poster</label>
          <Field
            className='textarea-container'
            as='textarea'
            name='poster'
          ></Field>
        </Stack>

        <ButtonGroup variant='contained' className='button-group'>
          <Button
            variant='outlined'
            type='submit'
            startIcon={<SaveIcon />}
            disabled={!isValid}
            size='large'
          >
            Save
          </Button>
          <Button
            variant='outlined'
            type='reset'
            size='large'
            startIcon={<CleaningServicesIcon />}
          >
            Reset
          </Button>
          <Button
            variant='outlined'
            startIcon={<KeyboardReturnIcon />}
            size='large'
            onClick={() => goHome()}
          >
            Return
          </Button>
        </ButtonGroup>
      </Form>
    )
  }

  return (
    <Formik
      initialValues={currentMovie ? currentMovie : emptyMovie}
      onSubmit={onMovieSubmit}
      validationSchema={schema}
    >
      {renderFormik}
    </Formik>
  )
}

export default MovieForm
