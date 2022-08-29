import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteLocationAction } from '../../store/actions/locationAction'

function LocationList({ locations }) {
  const dispatch = useDispatch()

  const onDeleteLocation = (id) => {
    dispatch(deleteLocationAction(id))
  }

  return (
    <div>
      <ul>
        {/* {locations.map((location) => {
          return (
            <li key={location.id} className='item-list-inbox'>
              <Link key={location.id} to={`${location.id}`}>
                <p>{location.title}</p>
              </Link>

              <div className='edit-item_box'>
                <Link to={`new/${location.id}`}>
                  <p id='edit' className='fa fa-pencil'></p>
                </Link>
                <span
                  id='delete'
                  className='fa fa fa-trash-o'
                  onClick={() => onDeleteLocation(location.id)}
                ></span>
              </div>
            </li>
          )
        })} */}
      </ul>
    </div>
  )
}

export default LocationList
