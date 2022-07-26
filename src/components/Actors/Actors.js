import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'
import {
  deleteActorAction,
  getAllActorsAction,
} from '../../store/actions/actorAction'

import ActorItem from './ActorItem'
import ActorList from './ActorList'

function Actors() {
  const dispatch = useDispatch()
  const {
    actorsList: { actors },
  } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getAllActorsAction())
  }, [dispatch])

  const onDelete = (id) => {
    dispatch(deleteActorAction(id))
  }

  return (
    <>
      <div>
        <Link to='new'>New</Link>
      </div>
      <Routes>
        <Route path='new' />

        <Route path=':id' element={<ActorItem actors={actors} />} />
        <Route
          path='/'
          element={<ActorList actors={actors} onDelete={onDelete} />}
        />
      </Routes>
    </>
  )
}

export default Actors
