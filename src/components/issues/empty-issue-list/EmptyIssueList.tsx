import { Chip } from "@nextui-org/chip";
import "./styles.scss";
import ExampleQueryIssues from "@/components/issues/example-quey-issues/ExampleQueryIssues.tsx";

function EmptyIssueList() {
  return <div className="empty-issues-list">
    <h3>Найти issues</h3>
    <p>Вот несколько примеров для запросов</p>
    <div className="recommends-query">
      <ExampleQueryIssues queryData={{ repo: "react", owner: "facebook" }} />
      <ExampleQueryIssues queryData={{ repo: "angular", owner: "angular" }} />
    </div>
  </div>;
}

export default EmptyIssueList;