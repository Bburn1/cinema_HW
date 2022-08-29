import ACTIONS_TYPES from './actionsTypes'
// Get all
export const getAllNationalitiesAction = () => {
  return {
    type: ACTIONS_TYPES.GET_NATIONALITIES_ACTION,
  }
}
export const getAllNationalitiesRequest = () => {
  return {
    type: ACTIONS_TYPES.GET_NATIONALITIES_REQUEST,
  }
}
export const getAllNationalitiesSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_NATIONALITIES_SUCCESS,
    payload,
  }
}

export const getAllNationalitiesError = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_NATIONALITIES_ERROR,
    payload,
  }
}

// Create
export const createNationalityAction = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_NATIONALITY_ACTION,
    payload,
  }
}
export const createNationalityRequest = () => {
  return {
    type: ACTIONS_TYPES.POST_NATIONALITY_REQUEST,
  }
}
export const createNationalitySuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_NATIONALITY_SUCCESS,
    payload,
  }
}
export const createNationalityError = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_NATIONALITY_ERROR,
    payload,
  }
}
// Update
export const updateNationalityAction = (payload) => {
  return {
    type: ACTIONS_TYPES.PUT_NATIONALITY_ACTION,
    payload,
  }
}
export const updateNationalityRequest = () => {
  return {
    type: ACTIONS_TYPES.PUT_NATIONALITY_REQUEST,
  }
}
export const updateNationalitySuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.PUT_NATIONALITY_SUCCESS,
    payload,
  }
}
export const updateNationalityError = (payload) => {
  return {
    type: ACTIONS_TYPES.PUT_NATIONALITY_ERROR,
    payload,
  }
}
// Delete
export const deleteNationalityAction = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_NATIONALITY_ACTION,
    payload,
  }
}
export const deleteNationalityRequest = () => {
  return {
    type: ACTIONS_TYPES.DELETE_NATIONALITY_REQUEST,
  }
}
export const deleteNationalitySuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_NATIONALITY_SUCCESS,
    payload,
  }
}
export const deleteNationalityError = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_NATIONALITY_ERROR,
    payload,
  }
}
