import IssuesList from "@/components/issues/issues-list/IssuesList";
import QueryRepositoriesForm from "@/components/query-repositories/QueryRepositoriesForm";

export default function HomePage() {
  return (
    <div className="page full flex flex-col gap-2">
      <QueryRepositoriesForm />
      <IssuesList />
    </div>
  );
}
