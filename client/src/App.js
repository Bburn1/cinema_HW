import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

import './App.css'

import Actors from './components/Actors/Actors'
// import ActorsMovie from './components/Actors/ActorsMovie'
import Directors from './components/Directors/Directors'
import Genres from './components/Genres/Genres'
import Layout from './components/Layout'
import Locations from './components/Locations/Locations'
import Movies from './components/Movies/Movies'
import Nationalities from './components/Nationalities/Nationalities'
import Studios from './components/Studios/Studios'
import { getAllGenresAction } from './store/actions/genreAction'
import { getAllNationalitiesAction } from './store/actions/nationalityAction'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllGenresAction())
    dispatch(getAllNationalitiesAction())
  }, [dispatch])
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path='*' element={<Layout />}>
            <Route path='movies/*' element={<Movies />} />
            <Route path='actors/*' element={<Actors />} />
            <Route path='directors/*' element={<Directors />} />
            <Route path='studios/*' element={<Studios />} />
            <Route path='genres/*' element={<Genres />} />
            <Route path='nationalities/*' element={<Nationalities />} />
            <Route path='locations/*' element={<Locations />} />

            <Route index element={<div>Home</div>} />
            <Route path='*' element={<Navigate to='/movies' />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
