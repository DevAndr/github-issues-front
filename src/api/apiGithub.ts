import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@/api/index.ts";
import { Issue, QueryIssues } from "@/types/github.types.ts";

export const githubApi = createApi({
  reducerPath: "githubReducer/Issues",
  refetchOnReconnect: true,
  baseQuery: baseQuery,
  endpoints: (build) => ({
    getIssues: build.query<
      Issue[],
      { limit: number | string; page: number; queryData: QueryIssues }
    >({
      query: ({ limit, page, queryData }) => ({
        url: "/github/issues",
        method: "POST",
        params: {
          limit,
          page,
        },
        body: queryData,
      }),
      extraOptions: {
        cancelPrevious: true,
      },
      serializeQueryArgs: ({ queryArgs }) => {
        return queryArgs.queryData;
      },
      merge: (currentCache, newItems) => {
        return [...currentCache, ...newItems];
      },
    }),
    getIssue: build.query<Issue, { owner: string; repo: string; id: string }>({
      query: ({ owner, repo, id }) => {
        return {
          url: `/github/issue/${owner}/${repo}/${id}`,
          method: "GET",
        };
      },
      extraOptions: {
        cancelPrevious: true,
      },
    }),
    getIssueComments: build.query<Issue, { owner: string; repo: string; id: string }>({
      query: ({ owner, repo, id }) => {
        return {
          url: `/github/issue/${owner}/${repo}/${id}/comments`,
          method: "GET",
        };
      },
      extraOptions: {
        cancelPrevious: true,
      },
    }),
  }),
});
