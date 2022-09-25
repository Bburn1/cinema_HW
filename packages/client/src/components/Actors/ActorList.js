import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

import { Link } from 'react-router-dom'
import { deleteActorAction } from '../../store/actions/actorAction'

function ActorsList() {
  const {
    actorsList: { actors },
  } = useSelector((state) => state)
  const dispatch = useDispatch()

  const onDeleteActor = (id) => {
    dispatch(deleteActorAction(id))
  }
  // console.log(actors)
  return (
    <div>
      <ul>
        {actors.map((actor) => {
          return (
            <li key={actor.id} className='item-list-inbox'>
              <Link key={actor.id} to={`${actor.id}`}>
                <p>{actor.full_name}</p>
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
