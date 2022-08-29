import { ButtonGroup, Stack } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
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
// import AddIcon from '@mui/icons-material/Add'
import SaveIcon from '@mui/icons-material/Save'
// import DeleteIcon from '@mui/icons-material/Delete'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import moment from 'moment'

function DirectorForm() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    directorsList: { directors },
    nationalitiesList: { nationalities },
  } = useSelector((state) => state)

  const currentDirector = directors.find(
    (director) => director.id === parseInt(id)
  )
  const schema = Yup.object().shape({
    full_name: Yup.string().required('Name is required'),
  })

  const onDirectorSubmit = (values) => {
    !values.id
      ? dispatch(createDirectorAction(values))
      : dispatch(updateDirectorAction(values))
    goHome()
  }

  const goHome = () => navigate('/directors')

  const renderFormik = ({ values, isValid }) => {
    return (
      <Form>
        <Stack className='field-container'>
          <Stack direction='row' spacing={2}>
            <label htmlFor='full_name'>FullName</label>
            <Field name='full_name'></Field>
          </Stack>
          <ErrorMessage name='full_name'>
            {(msg) => <div className='error'>{msg}</div>}
          </ErrorMessage>
        </Stack>

        <Stack direction='row' spacing={2}>
          <label htmlFor='birth_year'>Birth Year</label>
          <Field
            type='date'
            name='birth_year'
            value={
              !currentDirector || currentDirector.birth_year === null
                ? null
                : moment(currentDirector.birth_year).format('yyyy-MM-DD')
            }
          ></Field>
        </Stack>

        <Stack direction='row' spacing={2}>
          <label htmlFor='death_year'>Death</label>
          <Field
            type='date'
            name='death_year'
            // defaultValue='11/11/2015'
            value={
              !currentDirector || currentDirector.death_year === null
                ? null
                : moment(currentDirector.death_year).format('yyyy-MM-DD')
            }
          ></Field>
        </Stack>
        <Stack direction='row' spacing={2}>
          <label htmlFor='nationality'>Nationality</label>
          <Field as='select' name='nationality'>
            <option value={values.nationality}>{values.nationality}</option>
            {nationalities.map((nationality, index) => (
              <option value={nationality.description} key={index}>
                {nationality.description}
              </option>
            ))}
          </Field>
        </Stack>
        {/* <fieldset className='item-container'>
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
        </fieldset> */}

        <Stack direction='row' spacing={2}>
          <label htmlFor='photo'>photo</label>
          <Field
            className='textarea-container'
            as='textarea'
            name='photo'
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
      initialValues={currentDirector ? currentDirector : emptyDirectors}
      onSubmit={onDirectorSubmit}
      validationSchema={schema}
    >
      {renderFormik}
    </Formik>
  )
}

export default DirectorForm
