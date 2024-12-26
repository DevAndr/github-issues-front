import { QueryIssues } from "@/types/github.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GithubState {
  queryDataForIssues?: QueryIssues;
}

const initialState: GithubState = {
};

export const githubIssuesSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    setQueryDataForIssues: (state, action: PayloadAction<QueryIssues>) => {
      state.queryDataForIssues = action.payload;
    },
  },
});

export default githubIssuesSlice.reducer;
