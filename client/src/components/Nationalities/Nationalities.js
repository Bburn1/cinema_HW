import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import CityList from './CityList'
// import NationalityItem from './NationalityItem'
import NationalityList from './NationalityList'

function Nationalities() {
  const {
    nationalitiesList: { nationalities },
  } = useSelector((state) => state)

  // console.log(nationalities)
  return (
    <>
      <div>
        <Link to='new' className='new-btn'>
          New
        </Link>
      </div>
      <Routes>
        {/* <Route
          path=':id'
          element={<NationalityItem nationalities={nationalities} />}
        /> */}
        <Route
          path='/'
          element={<NationalityList nationalities={nationalities} />}
        />
        <Route path='new' element={<Navigate to='/nationalities/new/:id' />} />
        <Route path=':id/cities' element={<CityList />} />
      </Routes>
    </>
  )
}

export default Nationalities
