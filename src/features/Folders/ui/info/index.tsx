import { LoanApplication, LoanApplicationResult } from "../../type"
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material"
import { Link } from "react-router-dom"
import { statusMap } from "../list/row"

const LoanApplicationInfo = ({ loan }: { loan: LoanApplicationResult }) => {
  const status = statusMap[loan.status] || "UNKNOWN"

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>ID кредита в системе:</TableCell>
              <TableCell>{loan.integration_id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Пользователь:</TableCell>
              <TableCell>{loan.user}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ID кредита:</TableCell>
              <TableCell>{loan.credit_id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Тип ипотеки:</TableCell>
              <TableCell>{loan.mortrage_type_id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Тип подтверждения дохода:</TableCell>
              <TableCell>{loan.income_approve_type_id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Тип валюты заявки:</TableCell>
              <TableCell>{loan.request_currency_id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Сумма заявки:</TableCell>
              <TableCell>{loan.request_sum}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Срок заявки:</TableCell>
              <TableCell>{loan.request_period}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ставка заявки:</TableCell>
              <TableCell>{loan.request_rate}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Статус:</TableCell>
              <TableCell>{loan.status}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Имя офицера:</TableCell>
              <TableCell>{loan.officer_user_name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ID офиса:</TableCell>
              <TableCell>{loan.office_id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Партнер:</TableCell>
              <TableCell>{loan.partner}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Цель кредита:</TableCell>
              <TableCell>{loan.purpose}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Тип цели кредита:</TableCell>
              <TableCell>{loan.purpose_type_id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Фио родственника:</TableCell>
              <TableCell>{loan.relative_full_name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Телефон родственника:</TableCell>
              <TableCell>{loan.relative_phone}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ID провайдера кошелька:</TableCell>
              <TableCell>{loan.wallet_provider_id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ID канала кошелька:</TableCell>
              <TableCell>{loan.wallet_channel_type_id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Результат скоринга</TableCell>
              <TableCell>{loan.scoring_result}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Документ docx:</TableCell>
              <TableCell>
                <Link to={loan.document_docx}>{loan.document_docx}</Link>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Документ pdf:</TableCell>
              <TableCell>
                <Link to={loan.document_pdf}>{loan.document_pdf}</Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Код:</TableCell>
              <TableCell>{loan.code}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Дата кода:</TableCell>
              <TableCell>{loan.code_date}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Номер кошелька:</TableCell>
              <TableCell>{loan.wallet_number}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default LoanApplicationInfo
