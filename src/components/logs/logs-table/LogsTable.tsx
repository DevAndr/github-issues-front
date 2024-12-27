import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table";
import { Pagination } from "@nextui-org/pagination";
import { apiLogs } from "@/api/apiLogs.ts";
import ErrorInfo from "@/components/error/ErrorInfo.tsx";
import useGetQueryParams from "@/hooks/use-get-query-params.ts";
import { Spinner } from "@nextui-org/spinner";
import LogCellRender from "@/components/logs/logs-table/LogCellRender.tsx";

function LogsTable() {
  const [page, setPage] = useState(1);
  const { limit } = useGetQueryParams();
  const [fetchLogs, { data: logs, isFetching, isLoading, error }] = apiLogs.useLazyGetLogsQuery();

  useEffect(() => {
    fetchLogs({ page, limit });
  }, [page, limit]);

  if (error) {
    return <div className="full flex justify-center items-center">
      <ErrorInfo error={error?.data?.message || error?.error} />
    </div>;
  }

  const changePageHandler = (page: number) => {
    setPage(page);
  };

  return <Table
    aria-label="Logs table"
    bottomContent={
      logs?.pagination.totalPages ?
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="primary"
            page={page}
            total={logs?.pagination.totalPages}
            onChange={changePageHandler}
          />
        </div> : null
    }
  >
    <TableHeader>
      <TableColumn key="datetime">DateTime</TableColumn>
      <TableColumn key="ip">Ip</TableColumn>
      <TableColumn key="method">Method</TableColumn>
      <TableColumn key="statusCode">StatusCode</TableColumn>
      <TableColumn key="path">Path</TableColumn>
      <TableColumn key="body">Body</TableColumn>
      <TableColumn key="error">Error</TableColumn>
    </TableHeader>
    <TableBody items={logs?.data ?? []}
               loadingContent={<Spinner />}
               isLoading={isFetching || isLoading}
    >
      {(item) => (
        <TableRow key={item._id}>
          {(columnKey) => <TableCell>
            <LogCellRender log={item} columnKey={columnKey} />
          </TableCell>}
        </TableRow>
      )}
    </TableBody>
  </Table>;
}

export default LogsTable;