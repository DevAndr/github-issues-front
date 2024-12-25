import { githubApi } from "@/api/apiGithub.ts";
import "./styles.scss";
import { Button } from "@nextui-org/button";
import { useCallback } from "react";
import CommentCard from "@/components/comment/comment-card/CommentCard.tsx";

interface CommentListProps {
  owner: string;
  repo: string;
  idIssue: string;
  count: number;
}

function CommentList(props: CommentListProps) {
  const { owner, repo, idIssue, count } = props;
  const [fetchIssueComments, { data: comments = [], isFetching, error }] =
    githubApi.useLazyGetIssueCommentsQuery();

  const loadCommentsHandler = useCallback(() => {
    if (owner && repo && idIssue && count) {
      fetchIssueComments({ owner, repo, id: idIssue });
    }
  }, [fetchIssueComments, owner, repo, idIssue, count]);

  if (!owner && !repo && !idIssue || !count) {
    return null;
  }

  return <div className="issue-comments">
    {
      !comments.length ? <Button className="btn-comments" onClick={loadCommentsHandler} isLoading={isFetching}>загрузить
        комментарии</Button> : <div>Комментарии</div>
    }
    <div className="comments">
      {
        comments.map(comment => <CommentCard key={comment.id} comment={comment} />)
      }
    </div>
  </div>;
}

export default CommentList;