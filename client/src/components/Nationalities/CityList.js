import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {
  deleteLocationAction,
  getLocationsAction,
} from '../../store/actions/locationAction'

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

  const onDeleteLocation = (id) => {
    dispatch(deleteLocationAction(id))
  }

  return (
    <div>
      <ul>
        {locations.map((location) => {
          return (
            <li key={location.id} className='item-list-inbox'>
              <p>{location.city}</p>

              <div className='edit-item_box'>
                <span
                  id='delete'
                  className='fa fa fa-trash-o'
                  onClick={() => onDeleteLocation(location.id)}
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
