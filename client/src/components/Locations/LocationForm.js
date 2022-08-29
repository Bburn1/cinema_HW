import { ButtonGroup, Stack } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { emptyLocations } from '../../constants'
import {
  createLocationAction,
  updateLocationAction,
} from '../../store/actions/locationAction'
import { Button } from '@mui/material'
// import AddIcon from '@mui/icons-material/Add'
import SaveIcon from '@mui/icons-material/Save'
// import DeleteIcon from '@mui/icons-material/Delete'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'

function LocationForm() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    locationsList: { locations },
  } = useSelector((state) => state)

  const currentLocation = locations.find(
    (location) => location.id === parseInt(id)
  )
  const schema = Yup.object().shape({
    title: Yup.string().required('title is required'),
  })

  const onLocationSubmit = (values) => {
    !values.id
      ? dispatch(createLocationAction(values))
      : dispatch(updateLocationAction(values))
    goHome()
  }

  const goHome = () => navigate('/locations')

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
      initialValues={currentLocation ? currentLocation : emptyLocations}
      onSubmit={onLocationSubmit}
      validationSchema={schema}
    >
      {renderFormik}
    </Formik>
  )
}

export default LocationForm
