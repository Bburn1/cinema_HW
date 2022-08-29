import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, Field, ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'
import { Button, ButtonGroup, Stack } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
// import AddIcon from '@mui/icons-material/Add'
import moment from 'moment'

// import DeleteIcon from '@mui/icons-material/Delete'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'

import {
  createActorAction,
  updateActorAction,
} from '../../store/actions/actorAction'
import { emptyActor } from '../../constants'

function ActorForm() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    actorsList: { actors },
    nationalitiesList: { nationalities },
  } = useSelector((state) => state)

  const currentActor = actors.find((actor) => actor.id === parseInt(id))

  const schema = Yup.object().shape({
    full_name: Yup.string().required('full_name is required'),
  })

  const goHome = () => navigate('/actors')

  const onActorSubmit = (values) => {
    !values.id
      ? dispatch(createActorAction(values))
      : dispatch(updateActorAction(values))
    goHome()
  }

  const renderFormik = ({ values, isValid }) => {
    return (
      <Form>
        <Stack className='field-container'>
          <Stack direction='row' spacing={2}>
            <label htmlFor='full_name'>full_name</label>
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
              !currentActor || currentActor.birth_year === null
                ? null
                : moment(currentActor.birth_year).format('yyyy-MM-DD')
            }
          ></Field>
        </Stack>
        <Stack direction='row' spacing={2}>
          <label htmlFor='death_year'>Death</label>
          <Field
            type='date'
            name='death_year'
            value={
              !currentActor || currentActor.death_year === null
                ? null
                : moment(currentActor.death_year).format('yyyy-MM-DD')
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

        {/* <Stack direction='row' spacing={2}>
          <label htmlFor='national_id'>national_id</label>
          <Field name='national_id'></Field>
        </Stack> */}

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
      initialValues={currentActor ? currentActor : emptyActor}
      onSubmit={onActorSubmit}
      validationSchema={schema}
    >
      {renderFormik}
    </Formik>
  )
}

export default ActorForm
