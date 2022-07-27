import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ActorForm from '../components/Actors/ActorForm'
import DirectorForm from '../components/Directors/DirectorForm'
import MovieForm from '../components/Movies/MovieForm'
import StudioForm from '../components/Studios/StudioForm'

const styles = {
  // backgroundColor: 'rgb(28, 129, 212)',
  textAlign: 'center',
  color: 'rgb(28, 129, 212)',
  border: '3px solid rgb(28, 129, 212)',
}

function CinemaService() {
  return (
    <>
      <div style={styles}>
        <h1>CinemaService</h1>
        <Routes>
          <Route path='/movies/new' element={<MovieForm />} />
          <Route path='/movies/new/:id' element={<MovieForm />} />

          <Route path='/actors/new' element={<ActorForm />} />
          <Route path='/actors/new/:id' element={<ActorForm />} />

          <Route path='/directors/new' element={<DirectorForm />} />
          <Route path='/directors/new/:id' element={<DirectorForm />} />

          <Route path='/studios/new/:id' element={<StudioForm />} />
          <Route path='/studios/new' element={<StudioForm />} />
        </Routes>
      </div>
    </>
  )
}

export default CinemaService
