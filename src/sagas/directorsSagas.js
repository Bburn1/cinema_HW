import { put } from 'redux-saga/effects'
import {
  getAllDirectorsError,
  getAllDirectorsRequest,
  getAllDirectorsSuccess,
  getDirectorError,
  getDirectorRequest,
  getDirectorSuccess,
} from '../store/actions/directorAction'
import cinemaService from '../cinema-service'

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

export function* getOneDirectorSaga({ payload }) {
  yield put(getDirectorRequest())
  try {
    const director = yield cinemaService
      .get(`/directors/${payload}`, payload)
      .then(({ data }) => data)
    yield put(getDirectorSuccess(director))
  } catch (error) {
    yield put(getDirectorError(error))
  }
}
