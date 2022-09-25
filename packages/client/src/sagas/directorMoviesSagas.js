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

export function* deleteMovieByDirectorSaga({ payload }) {
  yield put(deleteMovieByDirectorRequest())
  try {
    yield cinemaService.delete(
      `/directors/${payload[0]}}/movies?director_id=${payload[0]}&movie_id=${payload[1]}`,
      payload
    )
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
