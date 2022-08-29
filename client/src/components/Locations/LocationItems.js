import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteLocationAction } from '../../store/actions/locationAction'

function LocationItems() {
  const {
    nationalitiesList: { nationalities },
  } = useSelector((state) => state)

  const dispatch = useDispatch()
  const onDeleteLocation = (id) => {
    dispatch(deleteLocationAction(id))
  }

  console.log(nationalities)
  return (
    <div>
      <div className='select-container'>
        <select>
          {nationalities.map((nationality, index) => (
            <option value={nationality.description} key={index}>
              {nationality.description}
            </option>
          ))}
        </select>
      </div>

      <Link to={`cities`}>
        <p>Cities</p>
      </Link>
    </div>
  )
}

export default LocationItems
