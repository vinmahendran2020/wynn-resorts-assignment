import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const registrationApi = createApi({
  reducerPath: 'registrationApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    postUserRegistration: builder.mutation({
      query: (user) => ({
        url: '/registration',
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