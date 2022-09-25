import { ButtonGroup, Stack } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { emptyGenres } from '../../constants'
import {
  createGenreAction,
  updateGenreAction,
} from '../../store/actions/genreAction'
import { Button } from '@mui/material'
// import AddIcon from '@mui/icons-material/Add'
import SaveIcon from '@mui/icons-material/Save'
// import DeleteIcon from '@mui/icons-material/Delete'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'

function GenreForm() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    genresList: { genres },
  } = useSelector((state) => state)

  const currentGenre = genres.find((genre) => genre.id === parseInt(id))
  const schema = Yup.object().shape({
    title: Yup.string().required('title is required'),
  })

  const onGenreSubmit = (values) => {
    !values.id
      ? dispatch(createGenreAction(values))
      : dispatch(updateGenreAction(values))
    goHome()
  }

  const goHome = () => navigate('/genres')

  const renderFormik = ({ values, isValid }) => {
    return (
      <Form>
        <Stack className='field-container'>
          <Stack direction='row' spacing={2}>
            <label htmlFor='title'>Title</label>
            <Field name='title'></Field>
          </Stack>
          <ErrorMessage name='title'>
            {(msg) => <div className='error'>{msg}</div>}
          </ErrorMessage>
        </Stack>

        <Stack direction='row' spacing={2}>
          <label htmlFor='description'>description</label>
          <Field
            className='textarea-container'
            as='textarea'
            name='description'
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
      initialValues={currentGenre ? currentGenre : emptyGenres}
      onSubmit={onGenreSubmit}
      validationSchema={schema}
    >
      {renderFormik}
    </Formik>
  )
}

export default GenreForm
