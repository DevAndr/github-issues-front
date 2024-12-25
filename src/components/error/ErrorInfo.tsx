import "./styles.scss";
import { Button } from "@nextui-org/button";
import { RotateCcw } from "lucide-react";

interface ErrorInfoProps {
  error: string;
  onRetry?: () => void;
}

function ErrorInfo(props: ErrorInfoProps) {
  const { error, onRetry } = props;

  return <div className="error-info">
    <div className="message">{error}</div>
    {
      onRetry && <Button color="primary" startContent={<RotateCcw size={16}/>} onClick={onRetry}>Повторить</Button>
    }
  </div>;
}

export default ErrorInfo;
