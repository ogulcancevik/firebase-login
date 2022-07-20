import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: '',
  currentUser: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_TOKEN: (state, action) => {
      state.token = action.payload
    },
    SET_CURRENT_USER: (state, action) => {
      state.currentUser = action.payload
    }
  }
})

export const auth = authSlice.reducer
export const { SET_TOKEN, SET_CURRENT_USER } = authSlice.actions
