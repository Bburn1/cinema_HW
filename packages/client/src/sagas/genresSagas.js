import { put } from 'redux-saga/effects'

import cinemaService from '../cinema-service'
import {
  createGenreError,
  createGenreRequest,
  createGenreSuccess,
  deleteGenreError,
  deleteGenreRequest,
  deleteGenreSuccess,
  getAllGenresError,
  getAllGenresRequest,
  getAllGenresSuccess,
  updateGenreError,
  updateGenreRequest,
  updateGenreSuccess,
} from '../store/actions/genreAction'

export function* getAllGenresSaga() {
  yield put(getAllGenresRequest())
  try {
    const genres = yield cinemaService.get('/genres').then(({ data }) => data)
    yield put(getAllGenresSuccess(genres))
  } catch (error) {
    yield put(getAllGenresError(error))
  }
}

export function* updateGenreSaga({ payload }) {
  yield put(updateGenreRequest())
  try {
    const updateGenre = yield cinemaService
      .put(`/genres/${payload.id}`, payload)
      .then(({ data }) => data)
    yield put(updateGenreSuccess(updateGenre))
  } catch (error) {
    yield put(updateGenreError(error))
  }
}

export function* deleteGenreSaga({ payload }) {
  yield put(deleteGenreRequest())
  try {
    yield cinemaService.delete(`/genres/${payload}`)
    yield put(deleteGenreSuccess(payload))
  } catch (error) {
    yield put(deleteGenreError(error))
  }
}

export function* createGenreSaga({ payload }) {
  yield put(createGenreRequest())
  try {
    const newGenre = yield cinemaService
      .post('/genres', payload)
      .then(({ data }) => data)
    yield put(createGenreSuccess(newGenre))
  } catch (error) {
    yield put(createGenreError(error))
  }
}

// getMoviesByGenreSaga
