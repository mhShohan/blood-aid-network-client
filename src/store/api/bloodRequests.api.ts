import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const bloodRequestsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBloodRequest: builder.mutation({
      query: (payload) => ({
        url: "/blood-requests",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [tagTypes.request],
    }),


  }),
});

export const { useCreateBloodRequestMutation } = bloodRequestsApi;