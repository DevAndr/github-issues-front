import { QueryIssues } from "@/types/github.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GithubState {
  selectedRepository?: string | null;
  queryDataForIssues?: QueryIssues;
}

const initialState: GithubState = {
  selectedRepository: null,
};

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    setQueryDataForIssues: (state, action: PayloadAction<QueryIssues>) => {
      state.queryDataForIssues = action.payload;
    },
  },
});

export default githubSlice.reducer;
