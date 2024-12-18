import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { CreateBranch } from "../create"
import { BranchInfo } from "../info"
import { useBranchService } from "./service"
import { Row } from "./row"
import { FullScreenModal, PromptModal, TableHeader } from "@/shared/ui"
import { HOCList } from "@/widgets"
import { StatusResponse } from "@/shared/enums"
import { tokensDark } from "@/app/providers/ThemeProvider"

export const BranchList = () => {
  const {
    headerLinks,
    modal,
    branch,
    branchs,
    getBranchStatus,
    handleModal,
    handleChangeActiveBranch,
    handleDeleteBranch,
  } = useBranchService()

  const isBranchArray = Array.isArray(branch)

  return (
    <Box>
      <FullScreenModal
        open={modal.create ?? false}
        handleClose={() => handleModal("create")}
      >
        <CreateBranch />
      </FullScreenModal>
      <FullScreenModal
        open={modal.info ?? false}
        handleClose={() => handleModal("info")}
      >
        <BranchInfo branch={branchs} />
      </FullScreenModal>
      <PromptModal
        open={modal.delete ?? false}
        agreeCallback={handleDeleteBranch}
        text="Вы действительно хотите удалить данный филиал ?"
        handleClose={() => handleModal("delete")}
      />
      <TableHeader
        title="Филиалы"
        addHandler={() => {
          handleModal("create")
        }}
        showCreateButton
        buttonText="Добавить филиал"
      />
      <HOCList
        isError={getBranchStatus === StatusResponse.ERROR}
        isLoading={getBranchStatus === StatusResponse.LOADING}
        isSuccess={getBranchStatus === StatusResponse.SUCCESS}
        length={isBranchArray ? branch.length : 0}
        noLengthMessage="Больше нет филиалов"
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
              {isBranchArray ? (
                branch.map((row, index) => (
                  <Row
                    key={index}
                    row={row}
                    infoCallback={() => {
                      handleChangeActiveBranch(row)
                      handleModal("info")
                    }}
                    deleteCallback={() => {
                      handleChangeActiveBranch(row)
                      handleModal("delete")
                    }}
                  />
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    Нет данных для отображения
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </HOCList>
    </Box>
  )
}
