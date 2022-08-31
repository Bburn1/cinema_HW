import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteNationalityAction } from '../../store/actions/nationalityAction'

function NationalityList({ nationalities }) {
  const dispatch = useDispatch()
  const onDeleteNationality = (id) => {
    dispatch(deleteNationalityAction(id))
  }
  return (
    <div>
      <ul>
        {nationalities.map((nationality) => {
          return (
            <li key={nationality.id} className='item-list-inbox'>
              <Link key={nationality.id} to={`${nationality.id}/cities`}>
                <p>
                  {nationality.title} -- {nationality.description}
                </p>
              </Link>

              <div className='edit-item_box'>
                <Link to={`new/${nationality.id}`}>
                  <p id='edit' className='fa fa-pencil'></p>
                </Link>
                <span
                  id='delete'
                  className='fa fa fa-trash-o'
                  onClick={() => onDeleteNationality(nationality.id)}
                ></span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NationalityList
