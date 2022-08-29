import ACTIONS_TYPES from './actionsTypes'
// Get all
export const getLocationsAction = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_LOCATIONS_ACTION,
    payload,
  }
}
export const getLocationsRequest = () => {
  return {
    type: ACTIONS_TYPES.GET_LOCATIONS_REQUEST,
  }
}
export const getLocationsSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_LOCATIONS_SUCCESS,
    payload,
  }
}

export const getLocationsError = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_LOCATIONS_ERROR,
    payload,
  }
}

// Create
export const createLocationAction = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_LOCATION_ACTION,
    payload,
  }
}
export const createLocationRequest = () => {
  return {
    type: ACTIONS_TYPES.POST_LOCATION_REQUEST,
  }
}
export const createLocationSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_LOCATION_SUCCESS,
    payload,
  }
}
export const createLocationError = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_LOCATION_ERROR,
    payload,
  }
}
// Update
export const updateLocationAction = (payload) => {
  return {
    type: ACTIONS_TYPES.PUT_LOCATION_ACTION,
    payload,
  }
}
export const updateLocationRequest = () => {
  return {
    type: ACTIONS_TYPES.PUT_LOCATION_REQUEST,
  }
}
export const updateLocationSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.PUT_LOCATION_SUCCESS,
    payload,
  }
}
export const updateLocationError = (payload) => {
  return {
    type: ACTIONS_TYPES.PUT_LOCATION_ERROR,
    payload,
  }
}
// Delete
export const deleteLocationAction = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_LOCATION_ACTION,
    payload,
  }
}
export const deleteLocationRequest = () => {
  return {
    type: ACTIONS_TYPES.DELETE_LOCATION_REQUEST,
  }
}
export const deleteLocationSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_LOCATION_SUCCESS,
    payload,
  }
}
export const deleteLocationError = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_LOCATION_ERROR,
    payload,
  }
}
