import { format } from "date-fns"
import { ru } from "date-fns/locale"
import { LoanApplicationResult } from "../../type"
import { TableCell } from "@mui/material"
import { MyInfoButton, TableRowStyle } from "../../../../shared/ui/style/style"
import { Info as InfoIcon } from "@mui/icons-material"

export const statusMap: { [key: number]: string } = {
  6: "Закрыт",
  5: "Выдан",
  4: "Отказан",
  3: "На выдаче",
}

export function Row({
  row,
  infoCallback,
}: {
  row: LoanApplicationResult
  infoCallback: () => void
}) {
  const actual = format(new Date(row.request_date), "d MMMM yyyy 'г.' ", {
    locale: ru,
  })
  const created = format(new Date(row.created_at), "d MMMM yyyy 'г.' HH:mm", {
    locale: ru,
  })
  const status = statusMap[row.status] || "UNKNOWN"

  return (
    <TableRowStyle key={row.id}>
      <TableCell>{row.id}</TableCell>
      <TableCell>{row.user}</TableCell>
      <TableCell>{row.request_sum} сом</TableCell>
      <TableCell>{actual}</TableCell>
      <TableCell>{created}</TableCell>
      <TableCell>{status}</TableCell>
      <TableCell>
        <MyInfoButton
          variant="contained"
          onClick={() => {
            infoCallback()
          }}
        >
          <InfoIcon />
        </MyInfoButton>
      </TableCell>
    </TableRowStyle>
  )
}
