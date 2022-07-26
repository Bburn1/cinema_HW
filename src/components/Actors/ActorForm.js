import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, Field, ErrorMessage, Formik, FieldArray } from 'formik'
import * as Yup from 'yup'
import { Button, Stack } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import AddIcon from '@mui/icons-material/Add'

import DeleteIcon from '@mui/icons-material/Delete'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'

import {
  createActorAction,
  deleteActorAction,
  updateActorAction,
} from '../../store/actions/actorAction'
import { emptyActor } from '../../constants'

function ActorForm() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    actorsList: { actors },
  } = useSelector((state) => state)

  const currentActor = actors.find((actor) => actor.id === parseInt(id))

  const schema = Yup.object().shape({
    fullName: Yup.string().required('fullName is required'),
  })

  const goHome = () => navigate('/actors')

  const onActorSubmit = (values) => {
    !values.id
      ? dispatch(createActorAction({ ...values, id: Date.now() }))
      : dispatch(updateActorAction(values))
    goHome()
  }

  const onActorDelete = (id) => {
    dispatch(deleteActorAction(id))
    goHome()
  }

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

        <Stack>
          <Stack direction='row' spacing={2}>
            <label htmlFor='image'>image</label>
            <Field
              className='textarea-container'
              as='textarea'
              name='image'
            ></Field>
          </Stack>
          <ErrorMessage name='image'>
            {(msg) => <div className='error'>{msg}</div>}
          </ErrorMessage>
        </Stack>

        <Stack>
          <Button
            type='submit'
            startIcon={<SaveIcon />}
            // disabled={}
            size='large'
          >
            Save
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            size='large'
            onClick={() => onActorDelete(id)}
          >
            Delete
          </Button>
          <Button
            startIcon={<KeyboardReturnIcon />}
            size='large'
            onClick={() => goHome()}
          >
            Return
          </Button>
        </Stack>
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
