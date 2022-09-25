import ACTIONS_TYPES from './actionsTypes'
// Get all
export const getMoviesByDirectorsAction = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_MOVIES_BY_DIRECTOR_ACTION,
    payload,
  }
}
export const getMoviesByDirectorRequest = () => {
  return {
    type: ACTIONS_TYPES.GET_MOVIES_BY_DIRECTOR_REQUEST,
  }
}
export const getMoviesByDirectorSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_MOVIES_BY_DIRECTOR_SUCCESS,
    payload,
  }
}

export const getMoviesByDirectorError = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_MOVIES_BY_DIRECTOR_ERROR,
    payload,
  }
}

// Create
export const createMovieByDirectorAction = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_MOVIE_BY_DIRECTOR_ACTION,
    payload,
  }
}
export const createMovieByDirectorRequest = () => {
  return {
    type: ACTIONS_TYPES.POST_MOVIE_BY_DIRECTOR_REQUEST,
  }
}
export const createMovieByDirectorSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_MOVIE_BY_DIRECTOR_SUCCESS,
    payload,
  }
}
export const createMovieByDirectorError = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_MOVIE_BY_DIRECTOR_ERROR,
    payload,
  }
}

// Delete
export const deleteMovieByDirectorAction = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_MOVIE_BY_DIRECTOR_ACTION,
    payload,
  }
}
export const deleteMovieByDirectorRequest = () => {
  return {
    type: ACTIONS_TYPES.DELETE_MOVIE_BY_DIRECTOR_REQUEST,
  }
}
export const deleteMovieByDirectorSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_MOVIE_BY_DIRECTOR_SUCCESS,
    payload,
  }
}
export const deleteMovieByDirectorError = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_MOVIE_BY_DIRECTOR_ERROR,
    payload,
  }
}
