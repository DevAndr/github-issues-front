import "./styles.scss";
import { useMemo } from "react";

interface RequestStatusCodeProps {
  statusCode: number
}

function RequestStatusCode({statusCode}: RequestStatusCodeProps) {

  const classNameByStatusCode = useMemo(() => {
    if (statusCode >= 200 && statusCode < 300) {
      return "success";
    } else if (statusCode >= 300 && statusCode < 400) {
      return "redirect";
    } else if (statusCode >= 400 && statusCode < 500) {
      return "client-error";
    } else if (statusCode >= 500 && statusCode < 600) {
      return "server-error";
    } else {
      return "";
    }
  }, [statusCode]);

  return <div className={`request-status-code ${classNameByStatusCode}`}>
    {statusCode}
  </div>;
}

export default RequestStatusCode;