import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from ".";
import { ResponsePaginationLogs } from "@/types/log.types";

export const apiLogs = createApi({
  reducerPath: "logReducer/logs",
  refetchOnReconnect: true,
  baseQuery: baseQuery,
  tagTypes: ['Logs'],
  endpoints: (build) => ({
    getLogs: build.query<ResponsePaginationLogs,{ page: number; limit: number }>({
      query: ({ page, limit }) => ({
        url: "/log/all",
        params: {
          page,
          limit,
        },
      }),
      extraOptions: {
        cancelPrevious: true,
      },
    }),
  }),
});
