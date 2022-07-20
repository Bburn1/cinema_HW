import ACTIONS_TYPES from '../actions/actionsTypes'
const initialState = {
  movies: [],
  oneMovie: [],
  error: null,
  isFetching: false,
}

export default function moviesReducer(state = initialState, { type, payload }) {
  switch (type) {
    // Get all
    case ACTIONS_TYPES.GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: payload,
        oneMovie: [],
        isFetching: false,
      }
    case ACTIONS_TYPES.GET_MOVIES_REQUEST:
      return { ...state, isFetching: true }
    case ACTIONS_TYPES.GET_MOVIES_ERROR:
      return { ...state, isFetching: false, error: payload }

    //Get one movie for id
    case ACTIONS_TYPES.GET_MOVIE_SUCCESS:
      return {
        ...state,
        oneMovie: payload,

        // movies: state.movies.find((movie) => movie.id === payload),

        // oneMovie: state.movies.filter((movie) =>
        //   movie.id === payload ? movie : payload
        // ),
      }
    case ACTIONS_TYPES.GET_MOVIE_REQUEST:
      return { ...state, isFetching: true }
    case ACTIONS_TYPES.GET_MOVIE_ERROR:
      return { ...state, isFetching: false, error: payload }

    //Create one movie
    case ACTIONS_TYPES.POST_MOVIE_SUCCESS:
      return { ...state, movies: [...state.movies, payload], isFetching: false }
    case ACTIONS_TYPES.POST_MOVIE_REQUEST:
      return { ...state, isFetching: true }
    case ACTIONS_TYPES.POST_MOVIE_ERROR:
      return { ...state, isFetching: false, error: payload }

    //redact
    case ACTIONS_TYPES.PUT_MOVIE_SUCCESS:
      return {
        ...state,
        movies: state.movies.map((movie) => {
          return movie.id === payload.id ? payload : movie
        }),
        isFetching: false,
      }
    case ACTIONS_TYPES.PUT_MOVIE_REQUEST:
      return { ...state, isFetching: true }
    case ACTIONS_TYPES.PUT_MOVIE_ERROR:
      return { ...state, isFetching: false, error: payload }

    //delete
    case ACTIONS_TYPES.DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id === payload),
        isFetching: false,
      }
    case ACTIONS_TYPES.DELETE_MOVIE_REQUEST:
      return { ...state, isFetching: true }
    case ACTIONS_TYPES.DELETE_MOVIE_ERROR:
      return { ...state, isFetching: false, error: payload }

    default:
      return state
  }
}
