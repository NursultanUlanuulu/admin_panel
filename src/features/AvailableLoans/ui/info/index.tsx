import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material"
import { Available_loan } from "../../type"
import { format } from "date-fns"
import { ru } from "date-fns/locale"

const AvailableLoansInfo = ({ loan }: { loan: Available_loan }) => {
  const actual = format(new Date(loan.actual_date), "d MMMM yyyy 'г.'", {
    locale: ru,
  })
  const created = format(new Date(loan.created_at), "d MMMM yyyy 'г.' HH:mm", {
    locale: ru,
  })
  const updated = format(new Date(loan.updated_at), "d MMMM yyyy 'г.' HH:mm", {
    locale: ru,
  })
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>ID:</TableCell>
              <TableCell>{loan.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ID продукта:</TableCell>
              <TableCell>{loan.product_id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Название:</TableCell>
              <TableCell>{loan.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Описание:</TableCell>
              <TableCell>{loan.description}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Дата актуальности:</TableCell>
              <TableCell>{actual}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Тип расчета:</TableCell>
              <TableCell>{loan.calculation_type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Дата создания:</TableCell>
              <TableCell>{created}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Дата обновления:</TableCell>
              <TableCell>{updated}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default AvailableLoansInfo
