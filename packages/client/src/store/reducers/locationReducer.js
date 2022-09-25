import ACTIONS_TYPES from '../actions/actionsTypes'

const initialState = {
  locations: [],
  error: null,
  isFetching: false,
}

export default function locationsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    // Get all
    case ACTIONS_TYPES.GET_LOCATIONS_SUCCESS:
      return { ...state, locations: payload, isFetching: false }
    case ACTIONS_TYPES.POST_LOCATION_SUCCESS:
      return {
        ...state,
        locations: [...state.locations, payload],
        isFetching: false,
      }

    case ACTIONS_TYPES.DELETE_LOCATION_SUCCESS:
      return {
        ...state,
        locations: state.locations.filter(
          (location) => location.id !== payload[1]
        ),
        isFetching: false,
      }

    case ACTIONS_TYPES.DELETE_LOCATION_REQUEST:
    case ACTIONS_TYPES.POST_LOCATION_REQUEST:
    case ACTIONS_TYPES.GET_LOCATIONS_REQUEST:
      return { ...state, isFetching: true }

    case ACTIONS_TYPES.DELETE_LOCATION_ERROR:
    case ACTIONS_TYPES.POST_LOCATION_ERROR:
    case ACTIONS_TYPES.GET_LOCATIONS_ERROR:
      return { ...state, isFetching: false, error: payload }

    default:
      return state
  }
}

// case ACTIONS_TYPES.PUT_LOCATION_REQUEST:
// case ACTIONS_TYPES.PUT_LOCATION_ERROR:
// case ACTIONS_TYPES.PUT_LOCATION_SUCCESS:
//   return {
//     ...state,
//     locations: state.locations.map((location) => {
//       return location.id !== payload.id ? location : payload
//     }),
//     isFetching: false,
//   }
