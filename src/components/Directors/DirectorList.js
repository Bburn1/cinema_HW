import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteDirectorAction } from '../../store/actions/directorAction'

function DirectorList({ directors }) {
  const dispatch = useDispatch()
  const onDeleteDirector = (id) => {
    dispatch(deleteDirectorAction(id))
  }
  return (
    <div>
      <ul>
        {directors.map((director) => {
          return (
            <li key={director.id} className='item-list-inbox'>
              <Link key={director.id} to={`${director.id}`}>
                <p>{director.fullName}</p>
              </Link>

              <div className='edit-item_box'>
                <Link to={`new/${director.id}`}>
                  <p id='edit' className='fa fa-pencil'></p>
                </Link>
                <span
                  id='delete'
                  className='fa fa fa-trash-o'
                  onClick={() => onDeleteDirector(director.id)}
                ></span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DirectorList
