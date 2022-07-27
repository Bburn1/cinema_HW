import React from 'react'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import { deleteActorAction } from '../../store/actions/actorAction'

function ActorsList({ actors }) {
  const dispatch = useDispatch()

  const onDeleteActor = (id) => {
    dispatch(deleteActorAction(id))
  }
  return (
    <div>
      <ul>
        {actors.map((actor) => {
          return (
            <li key={actor.id} className='item-list-inbox'>
              <Link key={actor.id} to={`${actor.id}`}>
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
