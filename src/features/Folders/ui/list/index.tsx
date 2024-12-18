// import {
//   Box,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from "@mui/material"
// import { tokensDark } from "../../../../app/providers/ThemeProvider"
// import { StatusResponse } from "../../../../shared/enums"
// import TableHeader from "../../../../shared/ui/TableHeader"
// import HOCList from "../../../../widgets/HOCList"
// // import { Row } from './row'
// import Service from "./service"
// import { Row } from "./row"
// import FullScreenModal from "../../../../shared/ui/FullScreenModal"
// import LoanApplicationInfo from "../info"

// export const LoanApplicationList = () => {
//   const {
//     headerLinks,
//     loanApplication,
//     modal,
//     activeLoan,
//     getLoanApplicationStatus,
//     handleModal,
//     handleChangeActiveLoan,
//   } = Service()

//   const isLoanApplicationArray = Array.isArray(loanApplication)

//   return (
//     <Box>
//       <TableHeader title="Заявки на кредит" />
//       <FullScreenModal
//         open={modal.info}
//         handleClose={() => handleModal("info")}
//       >
//         <LoanApplicationInfo loan={activeLoan} />
//       </FullScreenModal>
//       <HOCList
//         isError={getLoanApplicationStatus === StatusResponse.ERROR}
//         isLoading={getLoanApplicationStatus === StatusResponse.LOADING}
//         isSuccess={getLoanApplicationStatus === StatusResponse.SUCCESS}
//         length={loanApplication.length}
//         noLengthMessage="Больше нет заявок на кредит"
//       >
//         <TableContainer
//           sx={{ background: tokensDark.primary[500] }}
//           component={Paper}
//         >
//           <Table>
//             <TableHead>
//               <TableRow>
//                 {headerLinks.map((tableHeaders: string) => (
//                   <TableCell
//                     key={tableHeaders}
//                     sx={{
//                       textTransform: "uppercase",
//                       fontWeight: 700,
//                       fontSize: "18px",
//                     }}
//                   >
//                     {tableHeaders}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {/* {isLoanApplicationArray ? (
//                 loanApplication.map((row, index) => (
//                   <Row
//                     key={index}
//                     row={row}
//                     infoCallback={() => {
//                       handleChangeActiveLoan(row)
//                       handleModal("info")
//                     }}
//                   />
//                 ))
//               ) : (
//                 <TableRow>
//                   <TableCell colSpan={3} align="center">
//                     Нет данных для отображения
//                   </TableCell>
//                 </TableRow>
//               )} */}
//               {loanApplication?.map((row, index) => (
//                 <Row
//                   key={index}
//                   row={row}
//                   infoCallback={() => {
//                     handleChangeActiveLoan(row)
//                     handleModal("info")
//                   }}
//                 />
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </HOCList>
//     </Box>
//   )
// }
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { tokensDark } from "../../../../app/providers/ThemeProvider"
import { StatusResponse } from "../../../../shared/enums"
import TableHeader from "../../../../shared/ui/TableHeader"
import HOCList from "../../../../widgets/HOCList"
import Service from "./service"
import { Row } from "./row"
import FullScreenModal from "../../../../shared/ui/FullScreenModal"
import LoanApplicationInfo from "../info"

export const LoanApplicationList = () => {
  const {
    headerLinks,
    loanApplications,
    modal,
    activeLoan,
    getLoanApplicationStatus,
    handleModal,
    handleChangeActiveLoan,
    loadPage,
    pagination,
  } = Service()

  const isLoanApplicationsArray = Array.isArray(loanApplications)

  return (
    <Box>
      <TableHeader title="Заявки на кредит" />
      <FullScreenModal
        open={modal.info}
        handleClose={() => handleModal("info")}
      >
        <LoanApplicationInfo loan={activeLoan} />
      </FullScreenModal>
      <HOCList
        isError={getLoanApplicationStatus === StatusResponse.ERROR}
        isLoading={getLoanApplicationStatus === StatusResponse.LOADING}
        isSuccess={getLoanApplicationStatus === StatusResponse.SUCCESS}
        length={loanApplications.length}
        noLengthMessage="Больше нет заявок на кредит"
      >
        <TableContainer
          sx={{ background: tokensDark.primary[500] }}
          component={Paper}
        >
          <Table>
            <TableHead>
              <TableRow>
                {headerLinks.map((tableHeaders: string) => (
                  <TableCell
                    key={tableHeaders}
                    sx={{
                      textTransform: "uppercase",
                      fontWeight: 700,
                      fontSize: "18px",
                    }}
                  >
                    {tableHeaders}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoanApplicationsArray ? (
                loanApplications.map((row, index) => (
                  <Row
                    key={index}
                    row={row}
                    infoCallback={() => {
                      handleChangeActiveLoan(row)
                      handleModal("info")
                    }}
                  />
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={headerLinks.length} align="center">
                    Нет данных для отображения
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </HOCList>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}
      >
        <Button
          disabled={!pagination.previous}
          onClick={() => loadPage(pagination.previous)}
        >
          Previous
        </Button>
        <Button
          disabled={!pagination.next}
          onClick={() => loadPage(pagination.next)}
        >
          Next
        </Button>
      </Box>
    </Box>
  )
}
