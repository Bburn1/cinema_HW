import ACTIONS_TYPES from '../actions/actionsTypes'

const initialState = {
  nationalities: [],
  error: null,
  isFetching: false,
}

export default function nationalitiesReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    // Get all
    case ACTIONS_TYPES.GET_NATIONALITIES_SUCCESS:
      return { ...state, nationalities: payload, isFetching: false }
    case ACTIONS_TYPES.POST_NATIONALITY_SUCCESS:
      return {
        ...state,
        nationalities: [...state.nationalities, payload],
        isFetching: false,
      }

    case ACTIONS_TYPES.PUT_NATIONALITY_SUCCESS:
      return {
        ...state,
        nationalities: state.nationalities.map((nationality) => {
          return nationality.id !== payload.id ? nationality : payload
        }),
        isFetching: false,
      }
    case ACTIONS_TYPES.DELETE_NATIONALITY_SUCCESS:
      return {
        ...state,
        nationalities: state.nationalities.filter(
          (nationality) => nationality.id !== payload
        ),
        isFetching: false,
      }

    case ACTIONS_TYPES.DELETE_NATIONALITY_REQUEST:
    case ACTIONS_TYPES.PUT_NATIONALITY_REQUEST:
    case ACTIONS_TYPES.POST_NATIONALITY_REQUEST:
    case ACTIONS_TYPES.GET_NATIONALITIES_REQUEST:
      return { ...state, isFetching: true }

    case ACTIONS_TYPES.DELETE_NATIONALITY_ERROR:
    case ACTIONS_TYPES.PUT_NATIONALITY_ERROR:
    case ACTIONS_TYPES.POST_NATIONALITY_ERROR:
    case ACTIONS_TYPES.GET_NATIONALITIES_ERROR:
      return { ...state, isFetching: false, error: payload }

    default:
      return state
  }
}
