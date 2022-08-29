import { put } from 'redux-saga/effects'

import cinemaService from '../cinema-service'
import {
  createActorByMovieError,
  createActorByMovieRequest,
  createActorByMovieSuccess,
  createDirectorByMovieError,
  createDirectorByMovieRequest,
  createDirectorByMovieSuccess,
  deleteActorByMovieError,
  deleteActorByMovieRequest,
  deleteActorByMovieSuccess,
  deleteDirectorByMovieError,
  deleteDirectorByMovieRequest,
  deleteDirectorByMovieSuccess,
  getActorsByMovieError,
  getActorsByMovieRequest,
  getActorsByMovieSuccess,
  getDirectorsByMovieError,
  getDirectorsByMovieRequest,
  getDirectorsByMovieSuccess,
} from '../store/actions/movieDirectorsActorsAction'

export function* getDirectorsByMovieSaga({ payload }) {
  yield put(getDirectorsByMovieRequest())
  try {
    const movies = yield cinemaService
      .get(`/movies/${payload}/directors`, payload)
      .then(({ data }) => data)
    yield put(getDirectorsByMovieSuccess(movies))
  } catch (error) {
    yield put(getDirectorsByMovieError(error))
  }
}
export function* getActorsByMovieSaga({ payload }) {
  yield put(getActorsByMovieRequest())
  try {
    const movies = yield cinemaService
      .get(`/movies/${payload}/actors`, payload)
      .then(({ data }) => data)
    yield put(getActorsByMovieSuccess(movies))
  } catch (error) {
    yield put(getActorsByMovieError(error))
  }
}

//================================================================

export function* deleteDirectorByMovieSaga({ payload }) {
  yield put(deleteDirectorByMovieRequest())
  try {
    yield cinemaService.delete(`/movies/${payload}/directors`, payload)
    yield put(deleteDirectorByMovieSuccess(payload))
  } catch (error) {
    yield put(deleteDirectorByMovieError(error))
  }
}

export function* deleteActorByMovieSaga({ payload }) {
  yield put(deleteActorByMovieRequest())
  try {
    yield cinemaService.delete(`/movies/${payload}/actors`, payload)
    yield put(deleteActorByMovieSuccess(payload))
  } catch (error) {
    yield put(deleteActorByMovieError(error))
  }
}

//================================================================

export function* createDirectorByMovieSaga({ payload }) {
  yield put(createDirectorByMovieRequest())
  try {
    const newDirectorByMovie = yield cinemaService
      .post(`/directors/${payload}/directors`, payload)
      .then(({ data }) => data)
    yield put(createDirectorByMovieSuccess(newDirectorByMovie))
  } catch (error) {
    yield put(createDirectorByMovieError(error))
  }
}

export function* createActorByMovieSaga({ payload }) {
  yield put(createActorByMovieRequest())
  try {
    const newActorByMovie = yield cinemaService
      .post(`/movies/${payload}/actors`, payload)
      .then(({ data }) => data)
    yield put(createActorByMovieSuccess(newActorByMovie))
  } catch (error) {
    yield put(createActorByMovieError(error))
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////
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

// getMoviesByMovieByDirectorSaga
