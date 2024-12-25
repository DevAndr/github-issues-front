import { githubApi } from "@/api/apiGithub";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "@/components/page-title/PageTitle.tsx";
import IssueContent from "@/components/issues/issue-content/IssueContent.tsx";
import IssueStatus from "@/components/issues/issue-status/IssueStatus.tsx";
import CommentList from "@/components/comment/CommentList.tsx";
import { Spinner } from "@nextui-org/spinner";

import ErrorInfo from "@/components/error/ErrorInfo.tsx";

function IssueDetailsPage() {
  const { owner, repo, idIssue } = useParams();
  const [fetchIssue, { data: issue, isFetching, error }] =
    githubApi.useLazyGetIssueQuery();

  useEffect(() => {
    if (owner && repo && idIssue) {
      fetchIssue({ owner, repo, id: idIssue });
    }
  }, [repo, owner, idIssue]);

  if (!owner && !repo && !idIssue) {
    return <div>Страница не найдена</div>;
  }

  if (error) {
    return <div className="full flex justify-center items-center">
      <ErrorInfo error={error?.data?.message} />
    </div>;
  }

  if (isFetching || !issue) {
    return <div className="full flex justify-center">
      <Spinner />
    </div>;
  }

  return (
    <div className="page flex flex-col gap-4">
      <PageTitle title={issue.title} />
      <IssueStatus issue={issue} />
      <IssueContent content={issue.body} />
      <CommentList idIssue={idIssue} repo={repo} owner={owner} count={issue.comments} />
    </div>
  );
}

export default IssueDetailsPage;
