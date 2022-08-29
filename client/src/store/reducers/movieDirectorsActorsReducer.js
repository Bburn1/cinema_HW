import ACTIONS_TYPES from '../actions/actionsTypes'

const initialState = {
  movieDirectors: [],
  movieActors: [],
  error: null,
  isFetching: false,
}

export default function movieDirectorsActorsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    // Get all
    case ACTIONS_TYPES.GET_DIRECTORS_BY_MOVIE_SUCCESS:
      return { ...state, movieDirectors: payload, isFetching: false }
    case ACTIONS_TYPES.GET_ACTORS_BY_MOVIE_SUCCESS:
      return { ...state, movieActors: payload, isFetching: false }

    //-----------------------

    case ACTIONS_TYPES.POST_DIRECTOR_BY_MOVIE_SUCCESS:
      return {
        ...state,
        movieDirectors: [...state.movieDirectors, payload],
        isFetching: false,
      }
    case ACTIONS_TYPES.POST_ACTOR_BY_MOVIE_SUCCESS:
      return {
        ...state,
        movieActors: [...state.movieActors, payload],
        isFetching: false,
      }

    //-------------------

    case ACTIONS_TYPES.DELETE_DIRECTOR_BY_MOVIE_SUCCESS:
      return {
        ...state,
        movieDirectors: state.movieDirectors.filter(
          (movieDirector) => movieDirector.id !== payload
        ),
        isFetching: false,
      }

    case ACTIONS_TYPES.DELETE_ACTOR_BY_MOVIE_SUCCESS:
      return {
        ...state,
        movieActors: state.movieActors.filter(
          (movieActor) => movieActor.id !== payload
        ),
        isFetching: false,
      }

    //----------------------

    case ACTIONS_TYPES.DELETE_DIRECTOR_BY_MOVIE_REQUEST:
    case ACTIONS_TYPES.POST_DIRECTOR_BY_MOVIE_REQUEST:
    case ACTIONS_TYPES.DELETE_ACTOR_BY_MOVIE_REQUEST:
    case ACTIONS_TYPES.POST_ACTOR_BY_MOVIE_REQUEST:
    case ACTIONS_TYPES.GET_ACTORS_BY_MOVIE_REQUEST:
    case ACTIONS_TYPES.GET_DIRECTORS_BY_MOVIE_REQUEST:
      return { ...state, isFetching: true }

    case ACTIONS_TYPES.DELETE_DIRECTOR_BY_MOVIE_ERROR:
    case ACTIONS_TYPES.POST_DIRECTOR_BY_MOVIE_ERROR:
    case ACTIONS_TYPES.DELETE_ACTOR_BY_MOVIE_ERROR:
    case ACTIONS_TYPES.POST_ACTOR_BY_MOVIE_ERROR:
    case ACTIONS_TYPES.GET_ACTORS_BY_MOVIE_ERROR:
    case ACTIONS_TYPES.GET_DIRECTORS_BY_MOVIE_ERROR:
      return { ...state, isFetching: false, error: payload }

    default:
      return state
  }
}
