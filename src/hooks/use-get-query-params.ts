import { LIMIT_QUERY_IN_PAGE } from "@/constants/common.constants";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

function useGetQueryParams() {
  const [searchParams, _] = useSearchParams();

  const queryParams = useMemo(() => {
    const owner = searchParams.get("owner");
    const repo = searchParams.get("repo");
    const limit = searchParams.get("limit") || LIMIT_QUERY_IN_PAGE;

    return {
      owner,
      repo,
      limit,
    };
  }, [searchParams]);

  return queryParams;
}

export default useGetQueryParams;
