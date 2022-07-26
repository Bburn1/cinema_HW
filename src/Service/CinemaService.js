import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ActorForm from '../components/Actors/ActorForm'
import DirectorForm from '../components/Directors/DirectorForm'
import MovieForm from '../components/Movies/MovieForm'
import StudioForm from '../components/Studios/StudioForm'

const styles = {
  backgroundColor: 'rgb(25, 118, 210)',
  border: '1px solid',
}

function CinemaService() {
  return (
    <>
      <div style={styles}></div>
      <Routes>
        {/* <Route path='*' element={<Navigate />} /> */}

        <Route path='/movies/new' element={<MovieForm />} />
        <Route path='/movies/new/:id' element={<MovieForm />} />
        <Route path='/movies/new' element={<Navigate to='movies/new/:id' />} />

        <Route path='/actors/new' element={<ActorForm />} />
        <Route path='/actors/new/:id' element={<ActorForm />} />
        <Route path='/actors/new' element={<Navigate to='actors/new/:id' />} />

        <Route path='/directors/new' element={<DirectorForm />} />
        <Route path='/directors/new/:id' element={<DirectorForm />} />
        <Route
          path='/directors/new'
          element={<Navigate to='directors/new/:id' />}
        />
        <Route path='/studios/new' element={<StudioForm />} />
        <Route path='/studios/new/:id' element={<StudioForm />} />
        <Route
          path='/studios/new'
          element={<Navigate to='studios/new/:id' />}
        />
      </Routes>
    </>
  )
}

export default CinemaService
