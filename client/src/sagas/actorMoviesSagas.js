import { put } from 'redux-saga/effects'

import cinemaService from '../cinema-service'

import {
  createMovieByActorError,
  createMovieByActorRequest,
  createMovieByActorSuccess,
  deleteMovieByActorError,
  deleteMovieByActorRequest,
  deleteMovieByActorSuccess,
  getMoviesByActorError,
  getMoviesByActorRequest,
  getMoviesByActorSuccess,
} from '../store/actions/actorMoviesAction'

export function* getMoviesByActorSaga({ payload }) {
  yield put(getMoviesByActorRequest())
  try {
    const actors = yield cinemaService
      .get(`/actors/${payload}/movies`, payload)
      .then(({ data }) => data)
    yield put(getMoviesByActorSuccess(actors))
  } catch (error) {
    yield put(getMoviesByActorError(error))
  }
}

// export function* updateMovieByActorSaga({ payload }) {
//   yield put(updateMovieByActorRequest())
//   try {
//     const updateMovieByActor = yield cinemaService
//       .put(`/actors/${payload.id}`, payload)
//       .then(({ data }) => data)
//     yield put(updateMovieByActorSuccess(updateMovieByActor))
//   } catch (error) {
//     yield put(updateMovieByActorError(error))
//   }
// }

export function* deleteMovieByActorSaga({ payload }) {
  yield put(deleteMovieByActorRequest())
  try {
    yield cinemaService.delete(`/actors/${payload}/movies`, payload)
    yield put(deleteMovieByActorSuccess(payload))
  } catch (error) {
    yield put(deleteMovieByActorError(error))
  }
}

export function* createMovieByActorSaga({ payload }) {
  yield put(createMovieByActorRequest())
  try {
    const newMovieByActor = yield cinemaService
      .post(`/actors/${payload}/movies`, payload)
      .then(({ data }) => data)
    yield put(createMovieByActorSuccess(newMovieByActor))
  } catch (error) {
    yield put(createMovieByActorError(error))
  }
}

// getMoviesByMovieByActorSaga
