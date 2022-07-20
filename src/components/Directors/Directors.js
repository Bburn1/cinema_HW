import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import DirectorForm from './DirectorForm'
import DirectorItem from './DirectorItem'
import DirectorList from './DirectorList'

function Directors() {
  return (
    <>
      <div>
        <Link to='new'>New</Link>
      </div>
      <Routes>
        <Route path='new' element={<DirectorForm />} />
        <Route path='new/:id' element={<DirectorForm />} />
        <Route path=':id' element={<DirectorItem />} />
        <Route path='/' element={<DirectorList />} />
        <Route path='new' element={<Navigate to='new/:id' />} />
      </Routes>
    </>
  )
}

export default Directors
