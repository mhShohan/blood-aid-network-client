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

    sendBloodRequestToDonor: builder.mutation({
      query: ({ id, payload }) => ({
        url: "/blood-requests/" + id,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [tagTypes.request],
    }),

    getAllBloodRequest: builder.query({
      query: (query) => ({
        url: "/blood-requests",
        method: "GET",
        params: query,
      }),
      providesTags: [tagTypes.request],
    }),


  }),
});

export const {
  useCreateBloodRequestMutation,
  useSendBloodRequestToDonorMutation,
  useGetAllBloodRequestQuery
} = bloodRequestsApi;