import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { githubApi } from "@/api/apiGithub.ts";
import githubReducer from "./slices/githubIssuesSlice.ts";
import { apiLogs } from "@/api/apiLogs.ts";

const rootReducer = combineReducers({
  githubReducer,
  [githubApi.reducerPath]: githubApi.reducer,
  [apiLogs.reducerPath]: apiLogs.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(githubApi.middleware)
      .concat(apiLogs.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
