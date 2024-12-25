import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const moduleSelector = (state: RootState) => state.githubReducer;

export const getQueryDataForIssues = createSelector(moduleSelector, state => state.queryDataForIssues);