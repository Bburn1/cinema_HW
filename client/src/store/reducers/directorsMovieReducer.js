import ACTIONS_TYPES from '../actions/actionsTypes'

const initialState = {
  directorsMovie: [],
  error: null,
  isFetching: false,
}

export default function directorsMovieReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    // Get all
    case ACTIONS_TYPES.GET_MOVIES_BY_DIRECTOR_SUCCESS:
      return { ...state, directorsMovie: payload, isFetching: false }
    case ACTIONS_TYPES.POST_MOVIE_BY_DIRECTOR_SUCCESS:
      return {
        ...state,
        directorsMovie: [...state.directorsMovie, payload],
        isFetching: false,
      }

    case ACTIONS_TYPES.DELETE_MOVIE_BY_DIRECTOR_SUCCESS:
      return {
        ...state,
        directorsMovie: state.directorsMovie.filter(
          (directorsMovie) => directorsMovie.id !== payload
        ),
        isFetching: false,
      }

    case ACTIONS_TYPES.DELETE_MOVIE_BY_DIRECTOR_REQUEST:
    case ACTIONS_TYPES.POST_MOVIE_BY_DIRECTOR_REQUEST:
    case ACTIONS_TYPES.GET_MOVIES_BY_DIRECTOR_REQUEST:
      return { ...state, isFetching: true }

    case ACTIONS_TYPES.DELETE_MOVIE_BY_DIRECTOR_ERROR:
    case ACTIONS_TYPES.POST_MOVIE_BY_DIRECTOR_ERROR:
    case ACTIONS_TYPES.GET_MOVIES_BY_DIRECTOR_ERROR:
      return { ...state, isFetching: false, error: payload }

    default:
      return state
  }
}
