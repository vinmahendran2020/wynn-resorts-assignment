import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const registrationApi = createApi({
  reducerPath: 'registrationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://demo5231182.mockable.io' }),
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