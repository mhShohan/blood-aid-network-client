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
  }),
});

export const { useGetAllDonorsQuery } = donorApi;