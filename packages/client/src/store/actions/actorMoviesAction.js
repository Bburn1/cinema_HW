import ACTIONS_TYPES from './actionsTypes'
// Get all
export const getMoviesByActorsAction = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_MOVIES_BY_ACTOR_ACTION,
    payload,
  }
}
export const getMoviesByActorRequest = () => {
  return {
    type: ACTIONS_TYPES.GET_MOVIES_BY_ACTOR_REQUEST,
  }
}
export const getMoviesByActorSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_MOVIES_BY_ACTOR_SUCCESS,
    payload,
  }
}

export const getMoviesByActorError = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_MOVIES_BY_ACTOR_ERROR,
    payload,
  }
}

// Create
export const createMovieByActorAction = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_MOVIE_BY_ACTOR_ACTION,
    payload,
  }
}
export const createMovieByActorRequest = () => {
  return {
    type: ACTIONS_TYPES.POST_MOVIE_BY_ACTOR_REQUEST,
  }
}
export const createMovieByActorSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_MOVIE_BY_ACTOR_SUCCESS,
    payload,
  }
}
export const createMovieByActorError = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_MOVIE_BY_ACTOR_ERROR,
    payload,
  }
}

// Delete
export const deleteMovieByActorAction = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_MOVIE_BY_ACTOR_ACTION,
    payload,
  }
}
export const deleteMovieByActorRequest = () => {
  return {
    type: ACTIONS_TYPES.DELETE_MOVIE_BY_ACTOR_REQUEST,
  }
}
export const deleteMovieByActorSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_MOVIE_BY_ACTOR_SUCCESS,
    payload,
  }
}
export const deleteMovieByActorError = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_MOVIE_BY_ACTOR_ERROR,
    payload,
  }
}
