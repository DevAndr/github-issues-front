import { Chip } from "@nextui-org/chip";
import { QueryIssues } from "@/types/github.types.ts";
import { useDispatch } from "react-redux";
import { githubIssuesSlice } from "@/redux/slices/githubIssuesSlice.ts";
import { useSearchParams } from "react-router-dom";

interface ExampleQueryIssuesProps {
  queryData: QueryIssues;
}

function ExampleQueryIssues({ queryData }: ExampleQueryIssuesProps) {
  const dispatch = useDispatch();
  const [_, setSearchParams] = useSearchParams();

  const onClickHandler = () => {
    setSearchParams({ ...queryData });
    dispatch(githubIssuesSlice.actions.setQueryDataForIssues(queryData));
  };

  return <Chip className="cursor-pointer" color="primary" size="lg" variant="shadow" onClick={onClickHandler}>
    <div className="flex gap-1">
      <span>Посмотреть репозиторий</span><b>{queryData.repo}</b>
    </div>
  </Chip>;
}

export default ExampleQueryIssues;