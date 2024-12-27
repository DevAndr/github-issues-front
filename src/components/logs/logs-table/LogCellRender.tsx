import { Log } from "@/types/log.types.ts";
import React, { memo } from "react";
import DatetimeField from "@/components/logs/fields/datetime-field/DatetimeField.tsx";
import RequestBody from "@/components/logs/fields/request-body-field/RequestBody.tsx";
import TypeRequest from "@/components/logs/fields/type-request/TypeRequest.tsx";
import RequestStatusCode from "@/components/logs/fields/request-status-code-field/RequestStatusCode.tsx";

interface LogCellRenderProps {
  log: Log;
  columnKey: React.Key;
}

function LogCellRender(props: LogCellRenderProps) {
  const { columnKey, log } = props;
  const cellValue = log[columnKey as keyof Log];

  switch (columnKey) {
    case 'datetime':
      return <DatetimeField datetime={cellValue}/>

    case 'body':
      return <RequestBody body={cellValue}/>

    case 'statusCode':
      return <RequestStatusCode statusCode={cellValue}/>

    case 'method':
      return <TypeRequest method={cellValue}/>

    default:
      return <div>
        {cellValue}
      </div>;
  }
}

export default memo(LogCellRender);