import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'
import { getAllActorsAction } from '../../store/actions/actorAction'

import ActorItem from './ActorItem'

function ActorsList() {
  const dispatch = useDispatch()
  const {
    actorsList: { actors },
  } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getAllActorsAction())
  }, [dispatch])

  // const getMovie = ({ id }) => {
  //   dispatch(getMovieAction(id))
  //   console.log(id)
  // }

  return (
    <div>
      <ul>
        {actors.map((actor) => {
          return (
            <li key={actor.id}>
              <Link
                element={<ActorItem actor={actor} />}
                key={actor.id}
                to={`${actor.id}`}
              >
                <p>{actor.fullName}</p>
              </Link>
              <Link to={`new/${actor.id}`}>
                <p>Edit</p>
              </Link>
            </li>
          )
        })}
        {/* <Routes>
          <Route path=':id' element={<ActorItem />} />
        </Routes> */}
      </ul>
    </div>
  )
}

export default ActorsList
