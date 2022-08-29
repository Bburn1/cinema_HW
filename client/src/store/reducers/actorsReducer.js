import ACTIONS_TYPES from '../actions/actionsTypes'

const initialState = {
  actors: [],
  error: null,
  isFetching: false,
}

export default function actorsReducer(state = initialState, { type, payload }) {
  switch (type) {
    // Get all
    case ACTIONS_TYPES.GET_ACTORS_SUCCESS:
      return { ...state, actors: payload, isFetching: false }
    case ACTIONS_TYPES.POST_ACTOR_SUCCESS:
      return {
        ...state,
        actors: [...state.actors, payload],
        isFetching: false,
      }

    case ACTIONS_TYPES.PUT_ACTOR_SUCCESS:
      return {
        ...state,
        actors: state.actors.map((actor) => {
          return actor.id !== payload.id ? actor : payload
        }),
        isFetching: false,
      }
    case ACTIONS_TYPES.DELETE_ACTOR_SUCCESS:
      return {
        ...state,
        actors: state.actors.filter((actor) => actor.id !== payload),
        isFetching: false,
      }

    case ACTIONS_TYPES.DELETE_ACTOR_REQUEST:
    case ACTIONS_TYPES.PUT_ACTOR_REQUEST:
    case ACTIONS_TYPES.POST_ACTOR_REQUEST:
    case ACTIONS_TYPES.GET_ACTORS_REQUEST:
      return { ...state, isFetching: true }

    case ACTIONS_TYPES.DELETE_ACTOR_ERROR:
    case ACTIONS_TYPES.PUT_ACTOR_ERROR:
    case ACTIONS_TYPES.POST_ACTOR_ERROR:
    case ACTIONS_TYPES.GET_ACTORS_ERROR:
      return { ...state, isFetching: false, error: payload }

    default:
      return state
  }
}
