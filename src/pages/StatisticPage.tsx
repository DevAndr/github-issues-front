import LogsTable from "@/components/logs/logs-table/LogsTable.tsx";
import PageTitle from "@/components/page-title/PageTitle.tsx";
import SelectPageSize from "@/components/select-page-size/SelectPageSize.tsx";

function StatisticPage() {
  return (
    <div className="page full">
      <div className="flex justify-between items-center flex-wrap gap-2 mb-4">
        <PageTitle title="Statistic logs" />
        <SelectPageSize />
      </div>
      <LogsTable />
    </div>
  );
}

export default StatisticPage;
