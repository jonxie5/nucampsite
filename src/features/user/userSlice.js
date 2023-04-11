import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            const newUser = {
                ...state, currentUser: action.payload
            };
            return newUser
        }
    }
})

export const userReducer = userSlice.reducer
export const { setCurrentUser } = userSlice.actions

export const selectCurrentUser = (state) => {
    console.log(state.user.currentUser)
    return state.user.currentUser
}