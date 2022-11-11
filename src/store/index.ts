import { GitHubReducer } from './gitHub.slice';
import { jsonPhAPI } from './jsonPh.api';
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { gitHubAPI } from "./gitHub.api"

const rootReducer = combineReducers({
    [gitHubAPI.reducerPath]: gitHubAPI.reducer,
    [jsonPhAPI.reducerPath]: jsonPhAPI.reducer,
    gitHubSlice: GitHubReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(gitHubAPI.middleware, jsonPhAPI.middleware)
    })
}

// export const store = configureStore({
//     reducer: rootReducer,
//     middleware: getDefaultMiddleware => getDefaultMiddleware().concat(gitHubAPI.middleware)
// })

export type RootState = ReturnType<typeof rootReducer>