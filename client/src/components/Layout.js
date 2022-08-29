import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Link, Outlet } from 'react-router-dom'
import './layout.css'
// =============================================
import AppHeader from './Header/AppHeader'
import CinemaService from '../Service/CinemaService'
import AppFooter from './Footer/AppFooter'

function Layout() {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item lg={12} md={12} xl={12} sm={12} xs={12}>
            <AppHeader />
          </Grid>
          <Grid item lg={2} md={2} xl={2} sm={2} xs={2}>
            <div>
              <ul>
                <li className='item-list'>
                  <Link to='/movies'>Movies</Link>
                </li>
                <li className='item-list'>
                  <Link to='/actors'>Actors</Link>
                </li>
                <li className='item-list'>
                  <Link to='/directors'>Directors</Link>
                </li>
                <li className='item-list'>
                  <Link to='/studios'>Studios</Link>
                </li>
                <li>--------------------------------</li>

                <li className='item-list'>
                  <Link to='/genres'>Genres</Link>
                </li>
                <li className='item-list'>
                  <Link to='/nationalities'>Nationalities</Link>
                </li>
                <li className='item-list'>
                  <Link to='/locations'>Locations</Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item lg={5} md={5} xl={5} sm={5} xs={5}>
            <div className='item-continer'>
              <main>
                <Outlet />
              </main>
            </div>
          </Grid>

          <Grid item lg={5} md={5} xl={5} sm={5} xs={5}>
            <CinemaService />
          </Grid>
          <Grid item lg={12} md={12} xl={12} sm={12} xs={12}>
            <AppFooter />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Layout
