import { configureStore } from '@reduxjs/toolkit'
import { profileReducer } from '../reducers/profileReducer'
import { homePageReducer } from "../reducers/homePageReducer"
import { addImageReducer } from "../reducers/addImageReducer"

const store = configureStore({
  reducer: {
    profiles: profileReducer,
    articoli: homePageReducer,
    image: addImageReducer,
  },
})

export default store
