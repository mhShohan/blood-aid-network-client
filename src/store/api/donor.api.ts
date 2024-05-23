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
        url: "/my-profile",
        method: "GET",
        params: query,
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetAllDonorsQuery, useGetMyProfileQuery } = donorApi;