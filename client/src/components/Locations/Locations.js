import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import LocationItems from './LocationItems'
// import { getAllLocationsAction } from '../../store/actions/locationAction'
import LocationList from './LocationList'

function Locations() {
  // const {
  //   locationsList: { locations },
  // } = useSelector((state) => state)

  // console.log(locations)
  return (
    <>
      <div>
        <Link to='new' className='new-btn'>
          New
        </Link>
      </div>
      <Routes>
        <Route path='/' element={<LocationItems />} />

        <Route path='/cities' element={<LocationList />} />
        <Route
          path='new'
          element={<Navigate to='/locations/cities/new/:id' />}
        />
      </Routes>
    </>
  )
}

export default Locations
