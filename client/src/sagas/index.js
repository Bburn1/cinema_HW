import { takeLatest } from 'redux-saga/effects'

import ACTIONS_TYPES from '../store/actions/actionsTypes'
import { deleteMovieByActorAction } from '../store/actions/actorMoviesAction'
import {
  deleteMovieByActorSaga,
  getMoviesByActorSaga,
} from './actorMoviesSagas'
import {
  createActorSaga,
  deleteActorSaga,
  getAllActorsSaga,
  updateActorSaga,
} from './actorsSagas'
import { getMoviesByDirectorSaga } from './directorMoviesSagas'
import {
  createDirectorSaga,
  deleteDirectorSaga,
  getAllDirectorsSaga,
  updateDirectorSaga,
} from './directorsSagas'
import {
  createGenreSaga,
  deleteGenreSaga,
  getAllGenresSaga,
  updateGenreSaga,
} from './genresSagas'
import {
  createLocationSaga,
  deleteLocationSaga,
  getLocationsSaga,
  updateLocationSaga,
} from './locationsSagas'
import {
  getActorsByMovieSaga,
  getDirectorsByMovieSaga,
} from './movieDirectorsActorsSagas'
import {
  createMovieSaga,
  deleteMovieSaga,
  getAllMoviesSaga,
  updateMovieSaga,
} from './moviesSagas'
import {
  createNationalitySaga,
  deleteNationalitySaga,
  getAllNationalitiesSaga,
  updateNationalitySaga,
} from './nationalitiesSagas'
import {
  createStudioSaga,
  deleteStudioSaga,
  getAllStudiosSaga,
  updateStudioSaga,
} from './studioSagas'

function* rootSaga() {
  yield takeLatest(ACTIONS_TYPES.GET_MOVIES_ACTION, getAllMoviesSaga)
  yield takeLatest(ACTIONS_TYPES.GET_DIRECTORS_ACTION, getAllDirectorsSaga)
  yield takeLatest(ACTIONS_TYPES.GET_ACTORS_ACTION, getAllActorsSaga)
  yield takeLatest(ACTIONS_TYPES.GET_STUDIOS_ACTION, getAllStudiosSaga)
  yield takeLatest(ACTIONS_TYPES.GET_GENRES_ACTION, getAllGenresSaga)
  yield takeLatest(
    ACTIONS_TYPES.GET_NATIONALITIES_ACTION,
    getAllNationalitiesSaga
  )
  yield takeLatest(ACTIONS_TYPES.GET_LOCATIONS_ACTION, getLocationsSaga)
  yield takeLatest(
    ACTIONS_TYPES.GET_MOVIES_BY_ACTOR_ACTION,
    getMoviesByActorSaga
  )
  yield takeLatest(
    ACTIONS_TYPES.GET_MOVIES_BY_DIRECTOR_ACTION,
    getMoviesByDirectorSaga
  )
  yield takeLatest(
    ACTIONS_TYPES.GET_DIRECTORS_BY_MOVIE_ACTION,
    getDirectorsByMovieSaga
  )
  yield takeLatest(
    ACTIONS_TYPES.GET_ACTORS_BY_MOVIE_ACTION,
    getActorsByMovieSaga
  )

  //
  // yield takeLatest(
  //   ACTIONS_TYPES.//GET_MOVIES_BY_ACTOR_ACTION,
  //   getMoviesByActorSaga
  // )

  yield takeLatest(ACTIONS_TYPES.POST_MOVIE_ACTION, createMovieSaga)
  yield takeLatest(ACTIONS_TYPES.POST_DIRECTOR_ACTION, createDirectorSaga)
  yield takeLatest(ACTIONS_TYPES.POST_ACTOR_ACTION, createActorSaga)
  yield takeLatest(ACTIONS_TYPES.POST_STUDIO_ACTION, createStudioSaga)
  yield takeLatest(ACTIONS_TYPES.POST_GENRE_ACTION, createGenreSaga)
  yield takeLatest(ACTIONS_TYPES.POST_NATIONALITY_ACTION, createNationalitySaga)
  yield takeLatest(ACTIONS_TYPES.POST_LOCATION_ACTION, createLocationSaga)

  yield takeLatest(ACTIONS_TYPES.PUT_DIRECTOR_ACTION, updateDirectorSaga)
  yield takeLatest(ACTIONS_TYPES.PUT_MOVIE_ACTION, updateMovieSaga)
  yield takeLatest(ACTIONS_TYPES.PUT_ACTOR_ACTION, updateActorSaga)
  yield takeLatest(ACTIONS_TYPES.PUT_STUDIO_ACTION, updateStudioSaga)
  yield takeLatest(ACTIONS_TYPES.PUT_GENRE_ACTION, updateGenreSaga)
  yield takeLatest(ACTIONS_TYPES.PUT_NATIONALITY_ACTION, updateNationalitySaga)

  yield takeLatest(ACTIONS_TYPES.DELETE_DIRECTOR_ACTION, deleteDirectorSaga)
  yield takeLatest(ACTIONS_TYPES.DELETE_MOVIE_ACTION, deleteMovieSaga)
  yield takeLatest(ACTIONS_TYPES.DELETE_ACTOR_ACTION, deleteActorSaga)
  yield takeLatest(ACTIONS_TYPES.DELETE_STUDIO_ACTION, deleteStudioSaga)
  yield takeLatest(ACTIONS_TYPES.DELETE_GENRE_ACTION, deleteGenreSaga)
  yield takeLatest(
    ACTIONS_TYPES.DELETE_NATIONALITY_ACTION,
    deleteNationalitySaga
  )
  yield takeLatest(ACTIONS_TYPES.DELETE_LOCATION_ACTION, deleteLocationSaga)
  yield takeLatest(
    ACTIONS_TYPES.DELETE_MOVIE_BY_ACTOR_ACTION,
    deleteMovieByActorSaga
  )

  ///
}

export default rootSaga
