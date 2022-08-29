import ACTIONS_TYPES from './actionsTypes'

//ACTORS
// Get all
export const getActorsByMovieAction = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_ACTORS_BY_MOVIE_ACTION,
    payload,
  }
}
export const getActorsByMovieRequest = () => {
  return {
    type: ACTIONS_TYPES.GET_ACTORS_BY_MOVIE_REQUEST,
  }
}
export const getActorsByMovieSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_ACTORS_BY_MOVIE_SUCCESS,
    payload,
  }
}

export const getActorsByMovieError = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_ACTORS_BY_MOVIE_ERROR,
    payload,
  }
}

// Create
export const createActorByMovieAction = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_ACTOR_BY_MOVIE_ACTION,
    payload,
  }
}
export const createActorByMovieRequest = () => {
  return {
    type: ACTIONS_TYPES.POST_ACTOR_BY_MOVIE_REQUEST,
  }
}
export const createActorByMovieSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_ACTOR_BY_MOVIE_SUCCESS,
    payload,
  }
}
export const createActorByMovieError = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_ACTOR_BY_MOVIE_ERROR,
    payload,
  }
}

// Delete
export const deleteActorByMovieAction = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_ACTOR_BY_MOVIE_ACTION,
    payload,
  }
}
export const deleteActorByMovieRequest = () => {
  return {
    type: ACTIONS_TYPES.DELETE_ACTOR_BY_MOVIE_REQUEST,
  }
}
export const deleteActorByMovieSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_ACTOR_BY_MOVIE_SUCCESS,
    payload,
  }
}
export const deleteActorByMovieError = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_ACTOR_BY_MOVIE_ERROR,
    payload,
  }
}

//DIRECTORS
// Get all
export const getDirectorsByMovieAction = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_DIRECTORS_BY_MOVIE_ACTION,
    payload,
  }
}
export const getDirectorsByMovieRequest = () => {
  return {
    type: ACTIONS_TYPES.GET_DIRECTORS_BY_MOVIE_REQUEST,
  }
}
export const getDirectorsByMovieSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_DIRECTORS_BY_MOVIE_SUCCESS,
    payload,
  }
}

export const getDirectorsByMovieError = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_DIRECTORS_BY_MOVIE_ERROR,
    payload,
  }
}

// Create
export const createDirectorByMovieAction = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_DIRECTOR_BY_MOVIE_ACTION,
    payload,
  }
}
export const createDirectorByMovieRequest = () => {
  return {
    type: ACTIONS_TYPES.POST_DIRECTOR_BY_MOVIE_REQUEST,
  }
}
export const createDirectorByMovieSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_DIRECTOR_BY_MOVIE_SUCCESS,
    payload,
  }
}
export const createDirectorByMovieError = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_DIRECTOR_BY_MOVIE_ERROR,
    payload,
  }
}

// Delete
export const deleteDirectorByMovieAction = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_DIRECTOR_BY_MOVIE_ACTION,
    payload,
  }
}
export const deleteDirectorByMovieRequest = () => {
  return {
    type: ACTIONS_TYPES.DELETE_DIRECTOR_BY_MOVIE_REQUEST,
  }
}
export const deleteDirectorByMovieSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_DIRECTOR_BY_MOVIE_SUCCESS,
    payload,
  }
}
export const deleteDirectorByMovieError = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_DIRECTOR_BY_MOVIE_ERROR,
    payload,
  }
}
