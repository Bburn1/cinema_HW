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
      return { ...state, directors: payload, isFetching: false }
    case ACTIONS_TYPES.GET_DIRECTORS_REQUEST:
      return { ...state, isFetching: true }
    case ACTIONS_TYPES.GET_DIRECTORS_ERROR:
      return { ...state, isFetching: false, error: payload }

    // Get one movie for id
    case ACTIONS_TYPES.GET_DIRECTOR_SUCCESS:
      return {
        ...state,
        directors: state.directors.filter((director) =>
          director.id !== payload ? payload : director
        ),
        // directors: state.contacts.filter((DIRECTOR) => DIRECTOR.id === payload),
        isFetching: false,
      }
    case ACTIONS_TYPES.GET_DIRECTOR_REQUEST:
      return { ...state, isFetching: true }
    case ACTIONS_TYPES.GET_DIRECTOR_ERROR:
      return { ...state, isFetching: false, error: payload }

    //Create one DIRECTOR
    case ACTIONS_TYPES.POST_DIRECTOR_SUCCESS:
      return {
        ...state,
        directors: [...state.directors, payload],
        isFetching: false,
      }
    case ACTIONS_TYPES.POST_DIRECTOR_REQUEST:
      return { ...state, isFetching: true }
    case ACTIONS_TYPES.POST_DIRECTOR_ERROR:
      return { ...state, isFetching: false, error: payload }

    //redact
    case ACTIONS_TYPES.PUT_DIRECTOR_SUCCESS:
      return {
        ...state,
        directors: state.directors.map((director) => {
          return director.id === payload.id ? payload : director
        }),
        isFetching: false,
      }
    case ACTIONS_TYPES.PUT_DIRECTOR_REQUEST:
      return { ...state, isFetching: true }
    case ACTIONS_TYPES.PUT_DIRECTOR_ERROR:
      return { ...state, isFetching: false, error: payload }

    //delete
    case ACTIONS_TYPES.DELETE_DIRECTOR_SUCCESS:
      return {
        ...state,
        directors: state.directors.filter(
          (director) => director.id === payload
        ),
        isFetching: false,
      }
    case ACTIONS_TYPES.DELETE_DIRECTOR_REQUEST:
      return { ...state, isFetching: true }
    case ACTIONS_TYPES.DELETE_DIRECTOR_ERROR:
      return { ...state, isFetching: false, error: payload }

    default:
      return state
  }
}
