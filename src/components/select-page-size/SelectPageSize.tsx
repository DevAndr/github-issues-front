import { Select, SelectItem } from "@nextui-org/select";
import { useSearchParams } from "react-router-dom";
import { LIMIT_QUERY_IN_PAGE } from "@/constants/common.constants.ts";
import './styles.scss'

const VARIANTS_PAGE_SIZE = [
  { key: "1", label: "1" },
  { key: "5", label: "5" },
  { key: "10", label: "10" },
  { key: "15", label: "15" },
  { key: "20", label: "20" },
  { key: "30", label: "30" },
  { key: "50", label: "50" },
  { key: "100", label: "100" }
] as const;

function SelectPageSize() {
  const [searchParams, setSearchParams] = useSearchParams();

  const onSelectChangeOptionHandler = (option) => {
    setSearchParams({limit: option.currentKey})
  }

  return <Select className='select-page-size' defaultSelectedKeys={[searchParams.get('limit') || LIMIT_QUERY_IN_PAGE]}
                 onSelectionChange={onSelectChangeOptionHandler}>
    {VARIANTS_PAGE_SIZE.map((size) => (
      <SelectItem key={size.key}>{size.label}</SelectItem>
    ))}
  </Select>;
}

export default SelectPageSize;