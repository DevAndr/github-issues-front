import moment from "moment";

interface DatetimeFieldProps {
  datetime: string
}

function DatetimeField({datetime}: DatetimeFieldProps) {
  return <div>
    {moment(datetime).format('DD.MM.YYYY HH:mm:ss')}
  </div>
}

export default DatetimeField;