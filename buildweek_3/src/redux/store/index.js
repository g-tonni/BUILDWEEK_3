import { configureStore } from '@reduxjs/toolkit'
import { profileReducer } from '../reducers/profileReducer'
import { homePageReducer } from "../reducers/homePageReducer"

const store = configureStore({
  reducer: {
    profiles: profileReducer,
    articoli: homePageReducer,
  },
})

export default store
