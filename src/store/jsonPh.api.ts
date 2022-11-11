import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IJsonUser } from '../models/jsonPhModels';

interface fetchUsersReq {
    limit: number
    page: number
}

export const jsonPhAPI = createApi({
    reducerPath: 'jsonph/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (build) => ({
        fetchUsers: build.query<IJsonUser[], fetchUsersReq>({
            query: ({limit = 20, page = 1}) => ({
                url: 'users',
                params: {
                    _limit: limit, 
                    _page: page
                }
            })
        })
    })
})