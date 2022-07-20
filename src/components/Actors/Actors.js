import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import ActorForm from './ActorForm'
import ActorItem from './ActorItem'
import ActorList from './ActorList'

function Actors() {
  return (
    <>
      <div>
        <Link to='new'>New</Link>
      </div>
      <Routes>
        <Route path='new' element={<ActorForm />} />
        <Route path='new/:id' element={<ActorForm />} />
        <Route path=':id' element={<ActorItem />} />
        <Route path='/' element={<ActorList />} />
        <Route path='new' element={<Navigate to='new/:id' />} />
      </Routes>
    </>
  )
}

export default Actors
