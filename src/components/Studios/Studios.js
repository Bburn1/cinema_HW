import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'

import StudioForm from './StudioForm'
import StudioItem from './StudioItem'
import StudioList from './StudioList'

function Studios() {
  return (
    <>
      <div>
        <Link to='new'>New</Link>
      </div>
      <Routes>
        <Route path='new' element={<StudioForm />} />
        <Route path='new/:id' element={<StudioForm />} />
        <Route path=':id' element={<StudioItem />} />
        <Route path='/' element={<StudioList />} />
        <Route path='new' element={<Navigate to='new/:id' />} />
      </Routes>
    </>
  )
}

export default Studios
