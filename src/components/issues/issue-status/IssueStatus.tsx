import { Issue } from "@/types/github.types.ts";
import './styles.scss'
import CreateAtIssue from "@/components/date-fields/CreateAtIssue.tsx";
import IssueState from "@/components/issues/issue-state/IssueState.tsx";
import UserReactions from "@/components/reactions/UserReactions.tsx";

interface IssueStatusProps {
  issue: Issue
}

function IssueStatus(props: IssueStatusProps) {
  const { issue } = props;

  return <div className='issue-status'>
    <IssueState state={issue.state}/>
    <UserReactions reactions={issue.reactions}/>
    <CreateAtIssue date={issue.created_at}/>
  </div>
}

export default IssueStatus;