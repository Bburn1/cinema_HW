import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'
import {
  deleteStudioAction,
  getAllStudiosAction,
} from '../../store/actions/studioAction'

import StudioItem from './StudioItem'
import StudioList from './StudioList'

function Studios() {
  const dispatch = useDispatch()
  const {
    studiosList: { studios },
  } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getAllStudiosAction())
  }, [dispatch])

  const onDelete = (id) => {
    dispatch(deleteStudioAction(id))
  }

  return (
    <>
      <div>
        <Link to='new'>New</Link>
      </div>
      <Routes>
        <Route path='new' />
        <Route path=':id' element={<StudioItem studios={studios} />} />
        <Route
          path='/'
          element={<StudioList studios={studios} onDelete={onDelete} />}
        />
      </Routes>
    </>
  )
}

export default Studios
