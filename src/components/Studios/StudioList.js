import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'
import { getAllStudiosAction } from '../../store/actions/studioAction'
import StudioItem from './StudioItem'

function StudioList() {
  const dispatch = useDispatch()
  const {
    studiosList: { studios },
  } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getAllStudiosAction())
  }, [dispatch])

  // const getMovie = ({ id }) => {
  //   dispatch(getMovieAction(id))
  //   console.log(id)
  // }

  return (
    <div>
      <ul>
        {studios.map((studio) => {
          return (
            <li key={studio.id}>
              <Link
                element={<StudioItem studio={studio} />}
                key={studio.id}
                to={`${studio.id}`}
              >
                <p>{studio.title}</p>
              </Link>
              <Link to={`new/${studio.id}`}>
                <p>Edit</p>
              </Link>
            </li>
          )
        })}
        {/* <Routes>
          <Route path=':id' element={<StudioItem />} />
        </Routes> */}
      </ul>
    </div>
  )
}

export default StudioList
