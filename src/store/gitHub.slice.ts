import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const LS_FAV_KEY = 'rfk'

interface gitHubState {
    favourites: string[]
}

const initialState: gitHubState = {
    favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

export const gitHubSlice = createSlice({
    name: 'github/Slice',
    initialState,
    reducers: {
        addFav: (state, action: PayloadAction<string>) => {
            state.favourites.push(action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        },
        removeFav: (state, action: PayloadAction<string>) => {
            state.favourites = state.favourites.filter(f => f != action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        }
    }
})

export const GitHubActions = gitHubSlice.actions
export const GitHubReducer = gitHubSlice.reducer