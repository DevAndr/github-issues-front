import { STATE_ISSUE } from "@/constants/github.constants";
import { StateIssue } from "@/types/github.types";
import classNames from "classnames";
import './styles.scss'

interface IssueStateProps {
  state: StateIssue;
}

function IssueState({ state }: IssueStateProps) {
  return <div
    className={classNames("state-issue", {
      open: state === STATE_ISSUE.OPEN,
      closed: state === STATE_ISSUE.CLOSED,
    })}
  >
    {state}
  </div>;
}

export default IssueState;
