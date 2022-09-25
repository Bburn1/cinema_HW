import ACTIONS_TYPES from '../actions/actionsTypes'
const initialState = {
  directors: [],
  error: null,
  isFetching: false,
}

export default function directorsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    // Get all
    case ACTIONS_TYPES.GET_DIRECTORS_SUCCESS:
      return { ...state, directors: [...payload], isFetching: false }
    case ACTIONS_TYPES.POST_DIRECTOR_SUCCESS:
      return {
        ...state,
        directors: [...state.directors, payload],
        isFetching: false,
      }
    case ACTIONS_TYPES.PUT_DIRECTOR_SUCCESS:
      return {
        ...state,
        directors: state.directors.map((director) => {
          return director.id !== payload.id ? director : payload
        }),
        isFetching: false,
      }
    case ACTIONS_TYPES.DELETE_DIRECTOR_SUCCESS:
      return {
        ...state,
        directors: state.directors.filter(
          (director) => director.id !== payload[1]
        ),
        isFetching: false,
      }

    case ACTIONS_TYPES.DELETE_DIRECTOR_REQUEST:
    case ACTIONS_TYPES.PUT_DIRECTOR_REQUEST:
    case ACTIONS_TYPES.POST_DIRECTOR_REQUEST:
    case ACTIONS_TYPES.GET_DIRECTORS_REQUEST:
      return { ...state, isFetching: true }

    case ACTIONS_TYPES.DELETE_DIRECTOR_ERROR:
    case ACTIONS_TYPES.PUT_DIRECTOR_ERROR:
    case ACTIONS_TYPES.POST_DIRECTOR_ERROR:
    case ACTIONS_TYPES.GET_DIRECTORS_ERROR:
      return { ...state, isFetching: false, error: payload }

    default:
      return state
  }
}
