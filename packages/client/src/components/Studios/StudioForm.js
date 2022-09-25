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
import moment from 'moment'

function StudioForm() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    studiosList: { studios },
    nationalitiesList: { nationalities },
  } = useSelector((state) => state)

  const currentStudio = studios.find((studio) => studio.id === parseInt(id))
  const schema = Yup.object().shape({
    title: Yup.string().required('Name is required'),
  })

  const onStudioSubmit = (values) => {
    !values.id
      ? dispatch(createStudioAction(values))
      : dispatch(updateStudioAction(values))
    goHome()
  }

  const goHome = () => navigate('/studios')

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
          <label htmlFor='found_year'>Found year</label>
          <Field
            type='date'
            name='found_year'
            value={
              !currentStudio || currentStudio.found_year === null
                ? null
                : moment(currentStudio.found_year).format('yyyy-MM-DD')
            }
          ></Field>
        </Stack>

        <fieldset>
          <Stack direction='row' spacing={2}>
            <label htmlFor='country'>Nationality</label>
            <Field as='select' name='country'>
              <option value={values.country}>{values.country}</option>
              {nationalities.map((country, index) => (
                <option value={country.description} key={index}>
                  {country.description}
                </option>
              ))}
            </Field>
          </Stack>

          <Stack direction='row' spacing={2}>
            <label htmlFor='city'>Location</label>
            <Field name='city'></Field>
          </Stack>
        </fieldset>

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
      initialValues={currentStudio ? currentStudio : emptyStudios}
      onSubmit={onStudioSubmit}
      validationSchema={schema}
    >
      {renderFormik}
    </Formik>
  )
}

export default StudioForm
