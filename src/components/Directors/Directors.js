import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'
import {
  deleteDirectorAction,
  getAllDirectorsAction,
} from '../../store/actions/directorAction'

import DirectorItem from './DirectorItem'
import DirectorList from './DirectorList'

function Directors() {
  const dispatch = useDispatch()
  const {
    directorsList: { directors },
  } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getAllDirectorsAction())
  }, [dispatch])

  const onDelete = (id) => {
    dispatch(deleteDirectorAction(id))
  }

  return (
    <>
      <div>
        <Link to='new'>New</Link>
      </div>
      <Routes>
        <Route path='new' />
        <Route path=':id' element={<DirectorItem directors={directors} />} />
        <Route
          path='/'
          element={<DirectorList directors={directors} onDelete={onDelete} />}
        />
      </Routes>
    </>
  )
}

export default Directors
