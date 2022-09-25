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

export function* deleteMovieByActorSaga({ payload }) {
  yield put(deleteMovieByActorRequest())
  try {
    yield cinemaService.delete(
      `/actors/${payload[0]}}/movies?actor_id=${payload[0]}&movie_id=${payload[1]}`
    )
    yield put(deleteMovieByActorSuccess())
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
