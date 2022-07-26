import { put } from 'redux-saga/effects'
import {
  createDirectorError,
  createDirectorRequest,
  createDirectorSuccess,
  deleteDirectorError,
  deleteDirectorRequest,
  deleteDirectorSuccess,
  getAllDirectorsError,
  getAllDirectorsRequest,
  getAllDirectorsSuccess,
  updateDirectorError,
  updateDirectorRequest,
  updateDirectorSuccess,
} from '../store/actions/directorAction'
import cinemaService from '../cinema-service'

export function* createDirectorSaga({ payload }) {
  yield put(createDirectorRequest())
  try {
    const director = yield cinemaService
      .post('/directors', payload)
      .then(({ data }) => data)
    yield put(createDirectorSuccess(director))
  } catch (error) {
    yield put(createDirectorError(error))
  }
}

export function* getAllDirectorsSaga() {
  yield put(getAllDirectorsRequest())
  try {
    const directors = yield cinemaService
      .get('/directors')
      .then(({ data }) => data)
    yield put(getAllDirectorsSuccess(directors))
  } catch (error) {
    yield put(getAllDirectorsError(error))
  }
}

export function* updateDirectorSaga({ payload }) {
  yield put(updateDirectorRequest())
  try {
    const updateDirector = yield cinemaService
      .put(`/directors/${payload.id}`, payload)
      .then(({ data }) => data)
    yield put(updateDirectorSuccess(updateDirector))
  } catch (error) {
    yield put(updateDirectorError(error))
  }
}

export function* deleteDirectorSaga({ payload }) {
  yield put(deleteDirectorRequest())
  try {
    yield cinemaService.delete(`/directors/${payload}`)
    yield put(deleteDirectorSuccess(payload))
  } catch (error) {
    yield put(deleteDirectorError(error))
  }
}
