// import { Grid, Stack } from '@mui/material'
// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { emptyNationalities } from '../../constants'

// function NationalityItem({ nationalities }) {
//   const { id } = useParams()

//   const nt = nationalities.find((item) => item.id === parseInt(id))

//   const nationality = nt ? nt : emptyNationalities

//   return (
//     <Grid item lg={12} md={12} xl={12} sm={12} xs={12} className='movie-header'>
//       <Stack>
//         <h1>About nationality {nationality.title} </h1>
//         <h3>Description:</h3>
//         <p>{nationality.description}</p>

//         {/* <h3>Movies:</h3>

//           {nationality.movies.map((movie, index) => (
//             <p key={index}>{movie}</p>
//           ))} */}
//       </Stack>
//     </Grid>
//   )
// }

// export default NationalityItem
