import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { getAllStudiosAction } from '../../store/actions/studioAction'

import StudioItem from './StudioItem'
import StudioList from './StudioList'

function Studios() {
  const {
    studiosList: { studios },
  } = useSelector((state) => state)

  return (
    <>
      <div>
        <Link to='new' className='new-btn'>
          New
        </Link>
      </div>
      <Routes>
        <Route path=':id' element={<StudioItem studios={studios} />} />
        <Route path='/' element={<StudioList studios={studios} />} />
        <Route path='new' element={<Navigate to='/studios/new/:id' />} />
      </Routes>
    </>
  )
}

export default Studios
