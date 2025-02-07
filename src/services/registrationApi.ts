import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const registrationApi = createApi({
  reducerPath: 'registrationApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    postUserRegistration: builder.mutation({
      query: (user) => ({
        url: '/wynnresorts/register',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: user,
      }),
    }),
  }),
});

export const { usePostUserRegistrationMutation } = registrationApi;