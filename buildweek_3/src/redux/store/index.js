import { configureStore } from '@reduxjs/toolkit'
import { profileReducer } from '../reducers/profileReducer'

const store = configureStore({
  reducer: {
    profiles: profileReducer,
  },
})

export default store
