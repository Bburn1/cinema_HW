import { put } from 'redux-saga/effects'

import cinemaService from '../cinema-service'
import {
  getActorError,
  getActorRequest,
  getActorSuccess,
  getAllActorsError,
  getAllActorsRequest,
  getAllActorsSuccess,
} from '../store/actions/actorAction'

export function* getAllActorsSaga() {
  yield put(getAllActorsRequest())
  try {
    const actors = yield cinemaService.get('/actors').then(({ data }) => data)
    yield put(getAllActorsSuccess(actors))
  } catch (error) {
    yield put(getAllActorsError(error))
  }
}

export function* getOneActorSaga({ payload }) {
  yield put(getActorRequest())
  try {
    const actor = yield cinemaService
      .get(`/actors/${payload}`, payload)
      .then(({ data }) => data)
    yield put(getActorSuccess(actor))
  } catch (error) {
    yield put(getActorError(error))
  }
}
