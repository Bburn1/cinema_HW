import { put } from 'redux-saga/effects'

import cinemaService from '../cinema-service'
import {
  createNationalityError,
  createNationalityRequest,
  createNationalitySuccess,
  deleteNationalityError,
  deleteNationalityRequest,
  deleteNationalitySuccess,
  getAllNationalitiesError,
  getAllNationalitiesRequest,
  getAllNationalitiesSuccess,
  updateNationalityError,
  updateNationalityRequest,
  updateNationalitySuccess,
} from '../store/actions/nationalityAction'

export function* getAllNationalitiesSaga() {
  yield put(getAllNationalitiesRequest())
  try {
    const nationalities = yield cinemaService
      .get('/nationalities')
      .then(({ data }) => data)
    yield put(getAllNationalitiesSuccess(nationalities))
  } catch (error) {
    yield put(getAllNationalitiesError(error))
  }
}

export function* updateNationalitySaga({ payload }) {
  yield put(updateNationalityRequest())
  try {
    const updateNationality = yield cinemaService
      .put(`/nationalities/${payload.id}`, payload)
      .then(({ data }) => data)
    yield put(updateNationalitySuccess(updateNationality))
  } catch (error) {
    yield put(updateNationalityError(error))
  }
}

export function* deleteNationalitySaga({ payload }) {
  yield put(deleteNationalityRequest())
  try {
    yield cinemaService.delete(`/nationalities/${payload}`)
    yield put(deleteNationalitySuccess(payload))
  } catch (error) {
    yield put(deleteNationalityError(error))
  }
}

export function* createNationalitySaga({ payload }) {
  yield put(createNationalityRequest())
  try {
    const newNationality = yield cinemaService
      .post('/nationalities', payload)
      .then(({ data }) => data)
    yield put(createNationalitySuccess(newNationality))
  } catch (error) {
    yield put(createNationalityError(error))
  }
}

// getMoviesByNationalitySaga
