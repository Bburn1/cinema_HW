import ACTIONS_TYPES from '../actions/actionsTypes'

const initialState = {
  studios: [],
  error: null,
  isFetching: false,
}

export default function studiosReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    // Get all
    case ACTIONS_TYPES.GET_STUDIOS_SUCCESS:
      return { ...state, studios: payload, isFetching: false }
    case ACTIONS_TYPES.POST_STUDIO_SUCCESS:
      return {
        ...state,
        studios: [...state.studios, payload],
        isFetching: false,
      }
    case ACTIONS_TYPES.PUT_STUDIO_SUCCESS:
      return {
        ...state,
        studios: state.studios.map((studio) => {
          return studio.id !== payload.id ? studio : payload
        }),
        isFetching: false,
      }
    case ACTIONS_TYPES.DELETE_STUDIO_SUCCESS:
      return {
        ...state,
        studios: state.studios.filter((studio) => studio.id !== payload),
        isFetching: false,
      }

    case ACTIONS_TYPES.POST_STUDIO_REQUEST:
    case ACTIONS_TYPES.PUT_STUDIO_REQUEST:
    case ACTIONS_TYPES.DELETE_STUDIO_REQUEST:
    case ACTIONS_TYPES.GET_STUDIOS_REQUEST:
      return { ...state, isFetching: true }

    case ACTIONS_TYPES.POST_STUDIO_ERROR:
    case ACTIONS_TYPES.PUT_STUDIO_ERROR:
    case ACTIONS_TYPES.DELETE_STUDIO_ERROR:
    case ACTIONS_TYPES.GET_STUDIOS_ERROR:
      return { ...state, isFetching: false, error: payload }

    default:
      return state
  }
}
