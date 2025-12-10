import { GET_PERSONAL_PROFILE, GET_PROFILES } from '../action/index.js'

const initialState = {
  profiloUtente: null,
  profili: [],
}

export const profileReducer = function (currentState = initialState, action) {
  switch (action.type) {
    case GET_PERSONAL_PROFILE:
      return {
        ...currentState,
        profiloUtente: action.payload,
      }
    case GET_PROFILES:
      return {
        ...currentState,
        profili: action.payload,
      }
    default:
      return currentState
  }
}
