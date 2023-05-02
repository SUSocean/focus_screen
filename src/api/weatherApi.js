import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weatherApi = createApi({
    name: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: `https://api.openweathermap.org/data/2.5/` }),
    endpoints: (builder) => ({
        getWeather: builder.query({
            query: ({ latitude, longitude }) => `weather?lat=${latitude}&lon=${longitude}&appid=eb31762f42e8cee24453dc3428978512&units=metric`
        })
    })
})

export const { useGetWeatherQuery } = weatherApi

// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=eb31762f42e8cee24453dc3428978512&units=metric