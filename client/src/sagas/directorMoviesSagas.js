import { put } from 'redux-saga/effects'

import cinemaService from '../cinema-service'

import {
  createMovieByDirectorError,
  createMovieByDirectorRequest,
  createMovieByDirectorSuccess,
  deleteMovieByDirectorError,
  deleteMovieByDirectorRequest,
  deleteMovieByDirectorSuccess,
  getMoviesByDirectorError,
  getMoviesByDirectorRequest,
  getMoviesByDirectorSuccess,
} from '../store/actions/directorMoviesAction'

export function* getMoviesByDirectorSaga({ payload }) {
  yield put(getMoviesByDirectorRequest())
  try {
    const directors = yield cinemaService
      .get(`/directors/${payload}/movies`, payload)
      .then(({ data }) => data)
    yield put(getMoviesByDirectorSuccess(directors))
  } catch (error) {
    yield put(getMoviesByDirectorError(error))
  }
}

// export function* updateMovieByDirectorSaga({ payload }) {
//   yield put(updateMovieByDirectorRequest())
//   try {
//     const updateMovieByDirector = yield cinemaService
//       .put(`/directors/${payload.id}`, payload)
//       .then(({ data }) => data)
//     yield put(updateMovieByDirectorSuccess(updateMovieByDirector))
//   } catch (error) {
//     yield put(updateMovieByDirectorError(error))
//   }
// }

export function* deleteMovieByDirectorSaga({ payload }) {
  yield put(deleteMovieByDirectorRequest())
  try {
    yield cinemaService.delete(`/directors/${payload}/movies`, payload)
    yield put(deleteMovieByDirectorSuccess(payload))
  } catch (error) {
    yield put(deleteMovieByDirectorError(error))
  }
}

export function* createMovieByDirectorSaga({ payload }) {
  yield put(createMovieByDirectorRequest())
  try {
    const newMovieByDirector = yield cinemaService
      .post(`/directors/${payload}/movies`, payload)
      .then(({ data }) => data)
    yield put(createMovieByDirectorSuccess(newMovieByDirector))
  } catch (error) {
    yield put(createMovieByDirectorError(error))
  }
}

// getMoviesByMovieByDirectorSaga
