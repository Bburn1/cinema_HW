import { put } from 'redux-saga/effects'

import cinemaService from '../cinema-service'
import {
  createActorError,
  createActorRequest,
  createActorSuccess,
  deleteActorError,
  deleteActorRequest,
  deleteActorSuccess,
  getAllActorsError,
  getAllActorsRequest,
  getAllActorsSuccess,
  updateActorError,
  updateActorRequest,
  updateActorSuccess,
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

export function* updateActorSaga({ payload }) {
  yield put(updateActorRequest())
  try {
    const updateActor = yield cinemaService
      .put(`/actors/${payload.id}`, payload)
      .then(({ data }) => data)
    yield put(updateActorSuccess(updateActor))
  } catch (error) {
    yield put(updateActorError(error))
  }
}

export function* deleteActorSaga({ payload }) {
  yield put(deleteActorRequest())
  try {
    yield cinemaService.delete(`/actors/${payload}`)
    yield put(deleteActorSuccess(payload))
  } catch (error) {
    yield put(deleteActorError(error))
  }
}

export function* createActorSaga({ payload }) {
  yield put(createActorRequest())
  try {
    const newActor = yield cinemaService
      .post('/', payload)
      .then(({ data }) => data)
    yield put(createActorSuccess(newActor))
  } catch (error) {
    yield put(createActorError(error))
  }
}
