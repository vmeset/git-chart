
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IUser, ServerResponse } from '../models/gitHubModels'
import { IRepo } from '../models/repoModels'

interface searchReq {
    search: string,
    limit: number
}

export const gitHubAPI = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    refetchOnFocus: true,
    endpoints: build => ({
        searchUsers: build.query<IUser[], searchReq>({
            query: ({search, limit = 10}) => ({
                url: 'search/users',
                params: {
                    q: search,
                    per_page: limit
                }
            }),
            transformResponse: (response: ServerResponse) => response.items
        }),
        fetchUserRepos: build.query<IRepo[], string>({
            query: (username) => ({
                url: `users/${username}/repos`
            })
        })
    })
})