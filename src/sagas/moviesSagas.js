import { put } from 'redux-saga/effects'
import {
  getAllMoviesError,
  getAllMoviesRequest,
  getAllMoviesSuccess,
  getMovieSuccess,
  getMovieError,
  getMovieRequest,
} from '../store/actions/movieActions'
import cinemaService from '../cinema-service'

export function* getAllMoviesSaga() {
  yield put(getAllMoviesRequest())
  try {
    const movies = yield cinemaService.get('/movies').then(({ data }) => data)
    yield put(getAllMoviesSuccess(movies))
  } catch (error) {
    yield put(getAllMoviesError(error))
  }
}

export function* getOneMovieSaga({ payload }) {
  yield put(getMovieRequest())
  try {
    const onemovie = yield cinemaService
      .get(`/movies/${payload}`, payload)
      .then(({ data }) => data)
    yield put(getMovieSuccess(onemovie))
  } catch (error) {
    yield put(getMovieError(error))
  }
}
