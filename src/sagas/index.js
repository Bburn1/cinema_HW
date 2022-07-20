import { takeLatest } from 'redux-saga/effects'

import ACTIONS_TYPES from '../store/actions/actionsTypes'
import { getAllActorsSaga, getOneActorSaga } from './actorsSagas'
import { getAllDirectorsSaga, getOneDirectorSaga } from './directorsSagas'
import { getAllMoviesSaga, getOneMovieSaga } from './moviesSagas'
import { getAllStudiosSaga, getOneStudioSaga } from './studioSagas'

function* rootSaga() {
  yield takeLatest(ACTIONS_TYPES.GET_MOVIES_ACTION, getAllMoviesSaga)
  yield takeLatest(ACTIONS_TYPES.GET_MOVIE_ACTION, getOneMovieSaga)
  yield takeLatest(ACTIONS_TYPES.GET_DIRECTORS_ACTION, getAllDirectorsSaga)
  yield takeLatest(ACTIONS_TYPES.GET_DIRECTOR_ACTION, getOneDirectorSaga)
  yield takeLatest(ACTIONS_TYPES.GET_ACTORS_ACTION, getAllActorsSaga)
  yield takeLatest(ACTIONS_TYPES.GET_ACTOR_ACTION, getOneActorSaga)
  yield takeLatest(ACTIONS_TYPES.GET_STUDIOS_ACTION, getAllStudiosSaga)
  yield takeLatest(ACTIONS_TYPES.GET_STUDIO_ACTION, getOneStudioSaga)
}

export default rootSaga
