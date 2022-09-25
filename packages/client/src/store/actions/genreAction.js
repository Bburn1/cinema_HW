import ACTIONS_TYPES from './actionsTypes'
// Get all
export const getAllGenresAction = () => {
  return {
    type: ACTIONS_TYPES.GET_GENRES_ACTION,
  }
}
export const getAllGenresRequest = () => {
  return {
    type: ACTIONS_TYPES.GET_GENRES_REQUEST,
  }
}
export const getAllGenresSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_GENRES_SUCCESS,
    payload,
  }
}

export const getAllGenresError = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_GENRES_ERROR,
    payload,
  }
}

// Create
export const createGenreAction = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_GENRE_ACTION,
    payload,
  }
}
export const createGenreRequest = () => {
  return {
    type: ACTIONS_TYPES.POST_GENRE_REQUEST,
  }
}
export const createGenreSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_GENRE_SUCCESS,
    payload,
  }
}
export const createGenreError = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_GENRE_ERROR,
    payload,
  }
}
// Update
export const updateGenreAction = (payload) => {
  return {
    type: ACTIONS_TYPES.PUT_GENRE_ACTION,
    payload,
  }
}
export const updateGenreRequest = () => {
  return {
    type: ACTIONS_TYPES.PUT_GENRE_REQUEST,
  }
}
export const updateGenreSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.PUT_GENRE_SUCCESS,
    payload,
  }
}
export const updateGenreError = (payload) => {
  return {
    type: ACTIONS_TYPES.PUT_GENRE_ERROR,
    payload,
  }
}
// Delete
export const deleteGenreAction = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_GENRE_ACTION,
    payload,
  }
}
export const deleteGenreRequest = () => {
  return {
    type: ACTIONS_TYPES.DELETE_GENRE_REQUEST,
  }
}
export const deleteGenreSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_GENRE_SUCCESS,
    payload,
  }
}
export const deleteGenreError = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_GENRE_ERROR,
    payload,
  }
}
