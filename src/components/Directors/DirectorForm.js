import { ButtonGroup, Stack } from '@mui/material'
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { emptyDirectors } from '../../constants'
import {
  createDirectorAction,
  updateDirectorAction,
} from '../../store/actions/directorAction'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'

function DirectorForm() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    directorsList: { directors },
  } = useSelector((state) => state)

  const currentDirector = directors.find(
    (director) => director.id === parseInt(id)
  )
  const schema = Yup.object().shape({
    fullName: Yup.string().required('Name is required'),
  })

  const onDirectorSubmit = (values) => {
    !values.id
      ? dispatch(createDirectorAction({ ...values, id: Date.now() }))
      : dispatch(updateDirectorAction(values))
    goHome()
  }

  const goHome = () => navigate('/directors')

  const renderFormik = (props) => {
    return (
      <Form>
        <Stack className='field-container'>
          <Stack direction='row' spacing={2}>
            <label htmlFor='fullName'>FullName</label>
            <Field name='fullName'></Field>
          </Stack>
          <ErrorMessage name='fullName'>
            {(msg) => <div className='error'>{msg}</div>}
          </ErrorMessage>
        </Stack>
        <Stack direction='row' spacing={2}>
          <label htmlFor='birthYear'>Birth Year</label>
          <Field name='birthYear'></Field>
        </Stack>
        <Stack direction='row' spacing={2}>
          <label htmlFor='nationality'>Nationality</label>
          <Field name='nationality'></Field>
        </Stack>
        <fieldset className='item-container'>
          <legend>Movies</legend>
          <FieldArray name='movies'>
            {({
              push,
              remove,
              form: {
                values: { movies },
              },
            }) => {
              return (
                <Stack spacing={2}>
                  {movies.map((movie, index) => (
                    <Stack key={index} direction='row' spacing={2}>
                      <Field name={`movies[${index}]`}></Field>
                      {index > 0 && (
                        <Button
                          type='button'
                          size='large'
                          startIcon={<DeleteIcon />}
                          onClick={() => remove(index)}
                        ></Button>
                      )}
                      <Button
                        type='button'
                        size='large'
                        startIcon={<AddIcon />}
                        onClick={() => push('')}
                      ></Button>
                    </Stack>
                  ))}
                </Stack>
              )
            }}
          </FieldArray>
        </fieldset>

        <Stack direction='row' spacing={2}>
          <label htmlFor='image'>image</label>
          <Field
            className='textarea-container'
            as='textarea'
            name='image'
          ></Field>
        </Stack>

        <ButtonGroup variant='contained' className='button-group'>
          <Button
            variant='outlined'
            type='submit'
            startIcon={<SaveIcon />}
            disabled={!props.isValid}
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
      initialValues={currentDirector ? currentDirector : emptyDirectors}
      onSubmit={onDirectorSubmit}
      validationSchema={schema}
    >
      {renderFormik}
    </Formik>
  )
}

export default DirectorForm
