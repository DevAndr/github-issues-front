import { QueryIssues } from "@/types/github.types.ts";

const getIssueLink = (url: string, queryDataIssues: QueryIssues) => {
  const match = url.match(/\/issues\/(\d+)/);
  const issueId = match?.[1];

  if (queryDataIssues && issueId) {
    return `issue/${queryDataIssues.owner}/${queryDataIssues.repo}/${issueId}`;
  }
  return "#";
};

export default getIssueLink;