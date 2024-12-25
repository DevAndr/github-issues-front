import { githubApi } from "@/api/apiGithub";
import { getQueryDataForIssues } from "@/redux/selectors/github.selectors";
import { ListboxItem } from "@nextui-org/listbox";
import { Spinner } from "@nextui-org/spinner";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import AutoSizer from "react-virtualized-auto-sizer";
import {
  FixedSizeList as List,
  ListChildComponentProps,
  ListOnItemsRenderedProps,
} from "react-window";
import "../styles.scss";
import IssueState from "../issue-state/IssueState";
import CreateAtIssue from "@/components/date-fields/CreateAtIssue";
import CloseAtIssue from "@/components/date-fields/CloseAtIssue";
import AvatarUser from "@/components/avatar-user/AvatarUser.tsx";
import CommentCounter from "@/components/comment/comment-counter/CommentCounter.tsx";
import { Link } from "@nextui-org/link";
import LoaderCircularLoader from "@/components/loader/LoaderCircular.tsx";
import EmptyIssueList from "@/components/issues/empty-issue-list/EmptyIssueList.tsx";
import useGetQueryParams from "@/hooks/use-get-query-params";
import getIssueLink from "@/utility/get-issue-link.ts";

function IssuesList() {
  const [page, setPage] = useState(1);
  const { limit } = useGetQueryParams();
  const abortControllerRef = useRef<AbortController | null>(null);
  const queryDataIssues = useSelector(getQueryDataForIssues);
  const [fetchIssues, { data = [], isFetching, error }] =
    githubApi.useLazyGetIssuesQuery();

  useEffect(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current();
    }

    if (queryDataIssues) {
      const { abort } = fetchIssues({
        limit,
        page,
        queryData: {
          ...queryDataIssues,
        },
      });

      abortControllerRef.current = abort;
    }

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current();
      }
    };
  }, [page, queryDataIssues, limit]);

  const hasMoreLoad = useMemo(() => {
    return data.length === 0;
  }, [data]);

  const loadMore = useCallback(
    ({ visibleStopIndex }: ListOnItemsRenderedProps) => {
      const lastIndexInData = data.length ? data.length - 1 : 0;

      if (
        lastIndexInData === visibleStopIndex &&
        !isFetching &&
        !hasMoreLoad
      ) {
        setPage((prev) => prev + 1);
      }
    },
    [setPage, hasMoreLoad, isFetching]
  );

  if (!queryDataIssues?.owner && !queryDataIssues?.repo) {
    return <EmptyIssueList />;
  }

  const Row = ({ index, style }: ListChildComponentProps) => {
    const issue = data[index];

    if (!issue) return null;

    const linkToDetailsIssue = getIssueLink(issue.url, queryDataIssues);

    return (
      <Link
        className="issue"
        style={{
          ...style,
        }}
        href={linkToDetailsIssue}
      >
        <IssueState state={issue.state} />
        <AvatarUser user={issue.user} />
        <div className="content">
          <div className="title truncate-extend">{issue.title}</div>
          <div className="details">
            <div className="dates">
              <CreateAtIssue date={issue.created_at} />
              <CloseAtIssue date={issue.closed_at} />
            </div>
            <CommentCounter count={issue.comments} />
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="full">
      <AutoSizer>
        {({ height, width }) => (
          <List
            className="issues scrollbar"
            height={height}
            itemCount={data.length}
            itemSize={68}
            width={width}
            onItemsRendered={loadMore}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
      {isFetching && <LoaderCircularLoader />}
    </div>
  );
}

export default IssuesList;
