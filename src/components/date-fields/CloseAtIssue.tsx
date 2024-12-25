import moment from "moment";
import "./styles.scss";
import { CalendarCheck2 } from "lucide-react";
import { Tooltip } from "@nextui-org/tooltip";

interface CloseAtIssueProps {
  date?: string;
}

function CloseAtIssue({ date }: CloseAtIssueProps) {
  if (!date) {
    return null;
  }

  return (
    <Tooltip content="Закрыто" className="capitalize" placement="bottom">
      <div className="date-field">
        <CalendarCheck2 size={16} />
        <span>{moment(date).format("YY.MM.DD HH:mm:ss")}</span>
      </div>
    </Tooltip>
  );
}

export default CloseAtIssue;
