import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
// import { getAllGenresAction } from '../../store/actions/genreAction'
import GenreItem from './GenreItem'
import GenreList from './GenreList'

function Genres() {
  const {
    genresList: { genres },
  } = useSelector((state) => state)

  // console.log(genres)
  return (
    <>
      <div>
        <Link to='new' className='new-btn'>
          New
        </Link>
      </div>
      <Routes>
        <Route path=':id' element={<GenreItem genres={genres} />} />
        <Route path='/' element={<GenreList genres={genres} />} />
        <Route path='new' element={<Navigate to='/genres/new/:id' />} />
      </Routes>
    </>
  )
}

export default Genres
