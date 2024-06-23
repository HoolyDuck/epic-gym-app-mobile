import { ApiRoutes, AsyncStorageKeys } from "@/common/enums";
import { asyncStorageHelper } from "@/common/helpers";
import { LoginCredentials, LoginResponse, User } from "@/common/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_API_URL,
    prepareHeaders: async (headers) => {
      const token = await asyncStorageHelper.getValue(
        AsyncStorageKeys.ACCESS_TOKEN
      );
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginCredentials>({
      query: (credentials) => ({
        url: ApiRoutes.LOGIN,
        method: "POST",
        body: credentials,
      }),
    }),
    profile: builder.query<User, void>({
      query: () => ({
        url: ApiRoutes.PROFILE,
      }),
    }),
  }),
});

export const { useLoginMutation, useProfileQuery } = authApi;
export { authApi };
