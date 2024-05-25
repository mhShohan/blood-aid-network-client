import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const manageUsersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: (query) => ({
        url: "/users",
        method: "GET",
        params: query,
      }),
      providesTags: [tagTypes.users, tagTypes.user],
    }),

    updateUserRole: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/users/${id}/role`,
        method: "PATCH",
        body: payload
      }),
      invalidatesTags: [tagTypes.users, tagTypes.user],
    }),

    updateUserStatus: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/users/${id}/status`,
        method: "PATCH",
        body: payload
      }),
      invalidatesTags: [tagTypes.users, tagTypes.user],
    }),


  }),
});

export const {
  useGetAllUserQuery,
  useUpdateUserRoleMutation,
  useUpdateUserStatusMutation
} = manageUsersApi;