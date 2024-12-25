import { MethodRequestType } from "@/types/log.types.ts";
import "./styles.scss";

interface TypeRequestProps {
  method: MethodRequestType;
}

function TypeRequest({ method }: TypeRequestProps) {
  return <div className={`method-request-type ${method.toLowerCase()}`}>{method}</div>;
}

export default TypeRequest;