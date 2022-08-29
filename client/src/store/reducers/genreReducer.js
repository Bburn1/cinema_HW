import ACTIONS_TYPES from '../actions/actionsTypes'

const initialState = {
  genres: [],
  error: null,
  isFetching: false,
}

export default function genresReducer(state = initialState, { type, payload }) {
  switch (type) {
    // Get all
    case ACTIONS_TYPES.GET_GENRES_SUCCESS:
      return { ...state, genres: payload, isFetching: false }
    case ACTIONS_TYPES.POST_GENRE_SUCCESS:
      return {
        ...state,
        genres: [...state.genres, payload],
        isFetching: false,
      }

    case ACTIONS_TYPES.PUT_GENRE_SUCCESS:
      return {
        ...state,
        genres: state.genres.map((genre) => {
          return genre.id !== payload.id ? genre : payload
        }),
        isFetching: false,
      }
    case ACTIONS_TYPES.DELETE_GENRE_SUCCESS:
      return {
        ...state,
        genres: state.genres.filter((genre) => genre.id !== payload),
        isFetching: false,
      }

    case ACTIONS_TYPES.DELETE_GENRE_REQUEST:
    case ACTIONS_TYPES.PUT_GENRE_REQUEST:
    case ACTIONS_TYPES.POST_GENRE_REQUEST:
    case ACTIONS_TYPES.GET_GENRES_REQUEST:
      return { ...state, isFetching: true }

    case ACTIONS_TYPES.DELETE_GENRE_ERROR:
    case ACTIONS_TYPES.PUT_GENRE_ERROR:
    case ACTIONS_TYPES.POST_GENRE_ERROR:
    case ACTIONS_TYPES.GET_GENRES_ERROR:
      return { ...state, isFetching: false, error: payload }

    default:
      return state
  }
}
