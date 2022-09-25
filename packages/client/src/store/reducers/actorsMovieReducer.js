import ACTIONS_TYPES from '../actions/actionsTypes'

const initialState = {
  actorsMovie: [],
  error: null,
  isFetching: false,
}

export default function actorsMovieReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    // Get all
    case ACTIONS_TYPES.GET_MOVIES_BY_ACTOR_SUCCESS:
      return { ...state, actorsMovie: payload, isFetching: false }
    case ACTIONS_TYPES.POST_MOVIE_BY_ACTOR_SUCCESS:
      return {
        ...state,
        actorsMovie: [...state.actorsMovie, payload],
        isFetching: false,
      }

    case ACTIONS_TYPES.DELETE_MOVIE_BY_ACTOR_SUCCESS:
      return {
        ...state,
        actorsMovie: state.actorsMovie.filter(
          (actorMovie) => actorMovie.id !== payload[1]
        ),
        isFetching: false,
      }

    case ACTIONS_TYPES.DELETE_MOVIE_BY_ACTOR_REQUEST:
    case ACTIONS_TYPES.POST_MOVIE_BY_ACTOR_REQUEST:
    case ACTIONS_TYPES.GET_MOVIES_BY_ACTOR_REQUEST:
      return { ...state, isFetching: true }

    case ACTIONS_TYPES.DELETE_MOVIE_BY_ACTOR_ERROR:
    case ACTIONS_TYPES.POST_MOVIE_BY_ACTOR_ERROR:
    case ACTIONS_TYPES.GET_MOVIES_BY_ACTOR_ERROR:
      return { ...state, isFetching: false, error: payload }

    default:
      return state
  }
}
