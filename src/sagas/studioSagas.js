import { put } from 'redux-saga/effects'

import cinemaService from '../cinema-service'
import {
  getAllStudiosError,
  getAllStudiosRequest,
  getAllStudiosSuccess,
  getStudioError,
  getStudioRequest,
  getStudioSuccess,
} from '../store/actions/studioAction'

export function* getAllStudiosSaga() {
  yield put(getAllStudiosRequest())
  try {
    const studios = yield cinemaService.get('/studios').then(({ data }) => data)
    yield put(getAllStudiosSuccess(studios))
  } catch (error) {
    yield put(getAllStudiosError(error))
  }
}

export function* getOneStudioSaga({ payload }) {
  yield put(getStudioRequest())
  try {
    const studio = yield cinemaService
      .get(`/studios/${payload}`, payload)
      .then(({ data }) => data)
    yield put(getStudioSuccess(studio))
  } catch (error) {
    yield put(getStudioError(error))
  }
}
