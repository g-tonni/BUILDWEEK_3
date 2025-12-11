import { GET_PERSONAL_PROFILE, GET_PROFILES} from '../action/index.js'
const savedProfile = localStorage.getItem("profiloUtente");
const initialState = {
  profiloUtente:savedProfile ? JSON.parse(savedProfile) : null,
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
      case SET_PROFILO_UTENTE:
  localStorage.setItem("profiloUtente", JSON.stringify(action.payload));
  return {
    ...state,
    profiloUtente: action.payload,
  };
    default:
      return currentState
  }
}
