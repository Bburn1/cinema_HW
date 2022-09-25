import { combineReducers } from 'redux'

import moviesReducer from './moviesReducer'
import actorsReducer from './actorsReducer'
import studiosReducer from './studiosReducer'
import directorsReducer from './directorsReducer'
import genresReducer from './genreReducer'
import nationalitiesReducer from './nationalityReducer'
import locationsReducer from './locationReducer'
import actorsMovieReducer from './actorsMovieReducer'
import directorsMovieReducer from './directorsMovieReducer'
import movieDirectorsActorsReducer from './movieDirectorsActorsReducer'

export default combineReducers({
  moviesList: moviesReducer,
  actorsList: actorsReducer,
  directorsList: directorsReducer,
  studiosList: studiosReducer,
  genresList: genresReducer,
  nationalitiesList: nationalitiesReducer,
  locationList: locationsReducer,
  actorMoviesList: actorsMovieReducer,
  directorMoviesList: directorsMovieReducer,
  movieActorsDirectorsList: movieDirectorsActorsReducer,
})
