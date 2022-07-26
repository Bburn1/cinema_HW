import { takeLatest } from 'redux-saga/effects'

import ACTIONS_TYPES from '../store/actions/actionsTypes'
import {
  createActorSaga,
  deleteActorSaga,
  getAllActorsSaga,
  updateActorSaga,
} from './actorsSagas'
import {
  createDirectorSaga,
  deleteDirectorSaga,
  getAllDirectorsSaga,
  updateDirectorSaga,
} from './directorsSagas'
import {
  createMovieSaga,
  deleteMovieSaga,
  getAllMoviesSaga,
  updateMovieSaga,
} from './moviesSagas'
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

  yield takeLatest(ACTIONS_TYPES.POST_MOVIE_ACTION, createMovieSaga)
  yield takeLatest(ACTIONS_TYPES.POST_DIRECTOR_ACTION, createDirectorSaga)
  yield takeLatest(ACTIONS_TYPES.POST_ACTOR_ACTION, createActorSaga)
  yield takeLatest(ACTIONS_TYPES.POST_STUDIO_ACTION, createStudioSaga)

  yield takeLatest(ACTIONS_TYPES.PUT_DIRECTOR_ACTION, updateDirectorSaga)
  yield takeLatest(ACTIONS_TYPES.PUT_MOVIE_ACTION, updateMovieSaga)
  yield takeLatest(ACTIONS_TYPES.PUT_ACTOR_ACTION, updateActorSaga)
  yield takeLatest(ACTIONS_TYPES.PUT_STUDIO_ACTION, updateStudioSaga)

  yield takeLatest(ACTIONS_TYPES.DELETE_DIRECTOR_ACTION, deleteDirectorSaga)
  yield takeLatest(ACTIONS_TYPES.DELETE_MOVIE_ACTION, deleteMovieSaga)
  yield takeLatest(ACTIONS_TYPES.DELETE_ACTOR_ACTION, deleteActorSaga)
  yield takeLatest(ACTIONS_TYPES.DELETE_STUDIO_ACTION, deleteStudioSaga)
}

export default rootSaga
