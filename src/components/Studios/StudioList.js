import React from 'react'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import { deleteStudioAction } from '../../store/actions/studioAction'

function StudioList({ studios }) {
  const dispatch = useDispatch()
  const onDeleteStudio = (id) => {
    dispatch(deleteStudioAction(id))
  }
  return (
    <div>
      <ul>
        {studios.map((studio) => {
          return (
            <li key={studio.id} className='item-list-inbox'>
              <Link key={studio.id} to={`${studio.id}`}>
                <p>{studio.title}</p>
              </Link>
              <div className='edit-item_box'>
                <Link to={`new/${studio.id}`}>
                  <p id='edit' className='fa fa-pencil'></p>
                </Link>
                <span
                  id='delete'
                  className='fa fa fa-trash-o'
                  onClick={() => onDeleteStudio(studio.id)}
                ></span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default StudioList
