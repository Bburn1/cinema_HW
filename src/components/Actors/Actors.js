import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { getAllActorsAction } from '../../store/actions/actorAction'

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

  return (
    <>
      <div>
        <Link to='new' className='new-btn'>
          New
        </Link>
      </div>
      <Routes>
        <Route path=':id' element={<ActorItem actors={actors} />} />
        <Route path='/' element={<ActorList actors={actors} />} />
        <Route path='new' element={<Navigate to='/actors/new/:id' />} />
      </Routes>
    </>
  )
}

export default Actors
