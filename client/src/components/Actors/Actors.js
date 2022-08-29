import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { getAllActorsAction } from '../../store/actions/actorAction'

import ActorItem from './ActorItem'
import ActorList from './ActorList'
import ActorsMovie from './ActorsMovie'

function Actors() {
  const dispatch = useDispatch()
  const {
    actorsList: { actors },
  } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getAllActorsAction())
  }, [dispatch])

  // const location = String(window.location.pathname)

  // console.log(location)

  return (
    <>
      <div>
        {/* {location === '/actors' ? (
          <Link to='new' className='new-btn'>
            New
          </Link>
        ) : (
          <div>HUY</div>
        )} */}

        <Link to='new' className='new-btn'>
          New
        </Link>
      </div>
      <Routes>
        <Route path=':id' element={<ActorItem actors={actors} />} />
        <Route path='/' element={<ActorList actors={actors} />} />

        {/* <Route path='movies' element={<Navigate to='/actors/:id/movies' />} /> */}

        <Route path='new' element={<Navigate to='/actors/new/:id' />} />

        <Route path=':id/movies' element={<ActorsMovie />} />
      </Routes>
    </>
  )
}

export default Actors
