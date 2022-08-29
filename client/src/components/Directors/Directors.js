import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { getAllDirectorsAction } from '../../store/actions/directorAction'

import DirectorItem from './DirectorItem'
import DirectorList from './DirectorList'
import DirectorsMovie from './DirectorsMovie'

function Directors() {
  const dispatch = useDispatch()
  const {
    directorsList: { directors },
  } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getAllDirectorsAction())
  }, [dispatch])

  return (
    <>
      <div>
        <Link to='new' className='new-btn'>
          New
        </Link>
      </div>
      <Routes>
        <Route path=':id' element={<DirectorItem directors={directors} />} />
        <Route path='/' element={<DirectorList directors={directors} />} />
        <Route path='new' element={<Navigate to='/directors/new/:id' />} />
        <Route path=':id/movies' element={<DirectorsMovie />} />
      </Routes>
    </>
  )
}

export default Directors
