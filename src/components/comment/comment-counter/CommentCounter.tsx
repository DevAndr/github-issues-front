import { Tooltip } from "@nextui-org/tooltip";
import { MessageSquareText } from "lucide-react";
import './styles.scss'

interface CommentCounterProps {
  count: number | null;
}

function CommentCounter({ count }: CommentCounterProps) {
  if (!count) return null;

  return <Tooltip content="Комментарии" className="capitalize" placement="bottom">
    <div className='counter-comments'>
      <MessageSquareText size={16} />
      <span>{count}</span>
    </div>
  </Tooltip>;
}

export default CommentCounter;