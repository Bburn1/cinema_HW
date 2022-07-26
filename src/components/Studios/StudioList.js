import React from 'react'

import { Link } from 'react-router-dom'

import StudioItem from './StudioItem'

function StudioList({ studios, onDelete }) {
  const onDeleteStudio = (id) => {
    onDelete(id)
  }
  return (
    <div>
      <ul>
        {studios.map((studio) => {
          return (
            <li key={studio.id} className='item-list-inbox'>
              <Link
                element={<StudioItem studio={studio} />}
                key={studio.id}
                to={`${studio.id}`}
              >
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
