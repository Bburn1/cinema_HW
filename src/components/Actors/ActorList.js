import React from 'react'

import { Link } from 'react-router-dom'

import ActorItem from './ActorItem'

function ActorsList({ actors, onDelete }) {
  const onDeleteActor = (id) => {
    onDelete(id)
  }
  return (
    <div>
      <ul>
        {actors.map((actor) => {
          return (
            <li key={actor.id} className='item-list-inbox'>
              <Link
                element={<ActorItem actor={actor} />}
                key={actor.id}
                to={`${actor.id}`}
              >
                <p>{actor.fullName}</p>
              </Link>
              <div className='edit-item_box'>
                <Link to={`new/${actor.id}`}>
                  <p id='edit' className='fa fa-pencil'></p>
                </Link>
                <span
                  id='delete'
                  className='fa fa fa-trash-o'
                  onClick={() => onDeleteActor(actor.id)}
                ></span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ActorsList
