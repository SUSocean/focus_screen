import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pickApi = createApi({
    name: 'pickApi',
    reducerPath: 'pickApi',
    baseQuery: fetchBaseQuery({ baseUrl: `https://api.unsplash.com/photos/` }),
    endpoints: (builder) => ({
        getPick: builder.query({
            query: () => 'random?&query=nature&nt=1&client_id=Aa4kyolAtHfU5RSmI6ttF9F-KYV7JpF4pjX74OwEhHk'
        })
    })
})

export const { useGetPickQuery } = pickApi