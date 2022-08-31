import { put } from 'redux-saga/effects'

import cinemaService from '../cinema-service'

import {
  createLocationError,
  createLocationRequest,
  createLocationSuccess,
  deleteLocationError,
  deleteLocationRequest,
  deleteLocationSuccess,
  getLocationsError,
  getLocationsRequest,
  getLocationsSuccess,
  updateLocationError,
  updateLocationRequest,
  updateLocationSuccess,
} from '../store/actions/locationAction'

export function* getLocationsSaga({ payload }) {
  yield put(getLocationsRequest())
  try {
    const locations = yield cinemaService
      .get(`/nationalities/${payload}/cities`, payload)
      .then(({ data }) => data)
    yield put(getLocationsSuccess(locations))
  } catch (error) {
    yield put(getLocationsError(error))
  }
}

export function* updateLocationSaga({ payload }) {
  yield put(updateLocationRequest())
  try {
    const updateLocation = yield cinemaService
      .put(`/locations/${payload.id}`, payload)
      .then(({ data }) => data)
    yield put(updateLocationSuccess(updateLocation))
  } catch (error) {
    yield put(updateLocationError(error))
  }
}

export function* deleteLocationSaga({ payload }) {
  yield put(deleteLocationRequest())
  try {
    yield cinemaService.delete(`/nationalities/:id/cities`, payload)
    yield put(deleteLocationSuccess(payload))
  } catch (error) {
    yield put(deleteLocationError(error))
  }
}

export function* createLocationSaga({ payload }) {
  yield put(createLocationRequest())
  try {
    const newLocation = yield cinemaService
      .post('/locations', payload)
      .then(({ data }) => data)
    yield put(createLocationSuccess(newLocation))
  } catch (error) {
    yield put(createLocationError(error))
  }
}

// getMoviesByLocationSaga
