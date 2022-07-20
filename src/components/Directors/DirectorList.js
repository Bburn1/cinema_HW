import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'
import { getAllDirectorsAction } from '../../store/actions/directorAction'

import DirectorItem from './DirectorItem'

function DirectorList() {
  const dispatch = useDispatch()
  const {
    directorsList: { directors },
  } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getAllDirectorsAction())
  }, [dispatch])

  // const getMovie = ({ id }) => {
  //   dispatch(getMovieAction(id))
  //   console.log(id)
  // }

  return (
    <div>
      <ul>
        {directors.map((director) => {
          return (
            <li key={director.id}>
              <Link
                element={<DirectorItem director={director} />}
                key={director.id}
                to={`${director.id}`}
              >
                <p>{director.fullName}</p>
              </Link>
              <Link to={`new/${director.id}`}>
                <p>Edit</p>
              </Link>
            </li>
          )
        })}
        {/* <Routes>
          <Route path=':id' element={<DirectorItem />} />
        </Routes> */}
      </ul>
    </div>
  )
}

export default DirectorList
