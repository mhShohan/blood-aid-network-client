import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const donorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDonors: builder.query({
      query: (query) => ({
        url: "/donor-list",
        method: "GET",
        params: query,
      }),
      providesTags: [tagTypes.donor],
    }),

    getMyProfile: builder.query({
      query: (query) => ({
        url: "/profile/self",
        method: "GET",
        params: query,
      }),
      providesTags: [tagTypes.user],
    }),

    updateMyProfile: builder.mutation({
      query: ({ id, payload }) => ({
        url: "/profile/" + id,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    changePassword: builder.mutation({
      query: (payload) => ({
        url: "/profile/change-password",
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: [tagTypes.user],
    }),

  }),
});

export const {
  useGetAllDonorsQuery,
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
  useChangePasswordMutation
} = donorApi;