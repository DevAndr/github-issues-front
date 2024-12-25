import moment from "moment";
import "./styles.scss";
import { CalendarPlus2 } from "lucide-react";
import { Tooltip } from "@nextui-org/tooltip";

interface CreateAtIssueProps {
  date: string;
}

function CreateAtIssue({ date }: CreateAtIssueProps) {
  return (
    <Tooltip content="Создано" className="capitalize" placement="bottom">
      <div className="date-field">
        <CalendarPlus2 size={16} />
        <span>{moment(date).format("YY.MM.DD HH:mm:ss")}</span>
      </div>
    </Tooltip>
  );
}

export default CreateAtIssue;
