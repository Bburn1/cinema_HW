import { Form, Field, ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'
import SaveIcon from '@mui/icons-material/Save'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone'
import {
  createLocationAction,
  deleteLocationAction,
  getLocationsAction,
} from '../../store/actions/locationAction'
import { Button, Stack } from '@mui/material'

function CityList() {
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLocationsAction(id))
  }, [dispatch, id])

  const {
    locationList: { locations },
  } = useSelector((state) => state)
  console.log(id)

  const onDeleteLocation = ([id, location_id]) => {
    dispatch(deleteLocationAction([id, location_id]))
  }
  const schema = Yup.object().shape({
    city: Yup.string().required('city is required'),
  })

  const onLocationSubmit = (values) => {
    console.log(values)
    dispatch(createLocationAction(values))
  }

  const renderFormik = ({ values, isValid }) => {
    return (
      <Form>
        <Stack className='field-container'>
          <Stack direction='row' spacing={2}>
            <label htmlFor='city'>city</label>
            <Field name='city'></Field>
          </Stack>
          <ErrorMessage name='city'>
            {(msg) => <div className='error'>{msg}</div>}
          </ErrorMessage>
        </Stack>
        <Button
          variant='outlined'
          type='submit'
          startIcon={<AddBoxTwoToneIcon />}
          disabled={!isValid}
          size='large'
        >
          ADD
        </Button>
      </Form>
    )
  }

  return (
    <div>
      <Formik
        onSubmit={onLocationSubmit}
        initialValues={{ city: '', id: id }}
        validationSchema={schema}
      >
        {renderFormik}
      </Formik>
      <ul>
        {locations.map((location) => {
          return (
            <li key={location.id} className='item-list-inbox'>
              <p>{location.city}</p>

              <div className='edit-item_box'>
                <span
                  id='delete'
                  className='fa fa fa-trash-o'
                  onClick={() => onDeleteLocation([id, location.id])}
                ></span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CityList
