import { ButtonGroup, Stack } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { emptyStudios } from '../../constants'
import {
  createStudioAction,
  updateStudioAction,
} from '../../store/actions/studioAction'
import { Button } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'

import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'

function StudioForm() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    studiosList: { studios },
  } = useSelector((state) => state)

  const currentStudio = studios.find((studio) => studio.id === parseInt(id))
  const schema = Yup.object().shape({
    title: Yup.string().required('Name is required'),
  })

  const onStudioSubmit = (values) => {
    !values.id
      ? dispatch(createStudioAction({ ...values, id: Date.now() }))
      : dispatch(updateStudioAction(values))
    goHome()
  }

  const goHome = () => navigate('/studios')

  const renderFormik = (props) => {
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
          <label htmlFor='location'>Location</label>
          <Field name='location'></Field>
        </Stack>
        <Stack direction='row' spacing={2}>
          <label htmlFor='foundationYear'>Foundation Year</label>
          <Field name='foundationYear'></Field>
        </Stack>

        <Stack direction='row' spacing={2}>
          <label htmlFor='logo'>logo</label>
          <Field
            className='textarea-container'
            as='textarea'
            name='logo'
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
      initialValues={currentStudio ? currentStudio : emptyStudios}
      onSubmit={onStudioSubmit}
      validationSchema={schema}
    >
      {renderFormik}
    </Formik>
  )
}

export default StudioForm
