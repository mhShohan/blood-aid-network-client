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
      providesTags: [tagTypes.donor, tagTypes.request],
    }),

    getMyProfile: builder.query({
      query: (query) => ({
        url: "/profile/self",
        method: "GET",
        params: query,
      }),
      providesTags: [tagTypes.user],
    }),

    getMyBloodRequests: builder.query({
      query: () => ({
        url: "/donation-request",
        method: "GET",
      }),
      providesTags: [tagTypes.user, tagTypes.request, tagTypes.bloodRequest, tagTypes.donor],
    }),

    getDonateHistory: builder.query({
      query: () => ({
        url: "/donation-history",
        method: "GET",
      }),
      providesTags: [tagTypes.user, tagTypes.request, tagTypes.donor],
    }),

    getMyRequests: builder.query({
      query: () => ({
        url: "/my-requests",
        method: "GET",
      }),
      providesTags: [tagTypes.user, tagTypes.request, tagTypes.donor],
    }),

    updateMyProfile: builder.mutation({
      query: ({ id, payload }) => ({
        url: "/profile/" + id,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: [tagTypes.user, tagTypes.request, tagTypes.donor],
    }),

    changePassword: builder.mutation({
      query: (payload) => ({
        url: "/profile/change-password",
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    getSingleDonor: builder.query({
      query: (id) => ({
        url: `/donor-list/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.donor],
    }),
  }),
});

export const {
  useGetAllDonorsQuery,
  useGetMyProfileQuery,
  useGetMyBloodRequestsQuery,
  useGetDonateHistoryQuery,
  useGetSingleDonorQuery,
  useGetMyRequestsQuery,
  useUpdateMyProfileMutation,
  useChangePasswordMutation
} = donorApi;