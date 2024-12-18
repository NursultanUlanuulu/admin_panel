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
import { ListService } from "./listService"
import { Row } from "./row"
import { DocumentCreate } from "../create"
import { DocumentInfo } from "../info"
import { FullScreenModal, PromptModal, TableHeader } from "@/shared/ui"
import { HOCList } from "@/widgets"
import { StatusResponse } from "@/shared/enums"
import { tokensDark } from "@/app/providers/ThemeProvider"

export const DocumentList = () => {
  const {
    headerLinks,
    modal,
    document,
    getDocumentStatus,
    handleModal,
    handleChangeActiveDocument,
    handleDeleteDocument,
    detail,
  } = ListService()

  // Ensure that document is always an array
  const isDocArray = Array.isArray(document) && document.length > 0

  return (
    <Box>
      <FullScreenModal
        open={modal.create ?? false}
        handleClose={() => handleModal("create")}
      >
        <DocumentCreate />
      </FullScreenModal>
      <FullScreenModal
        open={modal.info ?? false}
        handleClose={() => handleModal("info")}
      >
        <DocumentInfo document={detail ?? null} />
      </FullScreenModal>
      <PromptModal
        open={modal.delete ?? false}
        agreeCallback={handleDeleteDocument}
        text="Вы действительно хотите удалить документ ?"
        handleClose={() => handleModal("delete")}
      />
      <TableHeader
        title="Документы"
        addHandler={() => {
          handleModal("create")
        }}
        showCreateButton
        buttonText="Добавить документ"
      />
      <HOCList
        isError={getDocumentStatus === StatusResponse.ERROR}
        isLoading={getDocumentStatus === StatusResponse.LOADING}
        isSuccess={getDocumentStatus === StatusResponse.SUCCESS}
        length={isDocArray ? document.length : 0}
        noLengthMessage="Больше нет документов"
      >
        <TableContainer
          sx={{ background: tokensDark.primary[500] }}
          component={Paper}
        >
          <Table>
            <TableHead>
              <TableRow>
                {headerLinks.map((tableHeader, index) => (
                  <TableCell
                    key={index} // Consider using a more unique key if possible
                    sx={{
                      textTransform: "uppercase",
                      fontWeight: 700,
                      fontSize: "18px",
                    }}
                  >
                    {tableHeader}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {isDocArray ? (
                document.map((row) => (
                  <Row
                    key={row.id} // Assuming `row.id` is unique
                    row={row}
                    infoCallback={() => {
                      handleChangeActiveDocument(row)
                      handleModal("info")
                    }}
                    deleteCallback={() => {
                      handleChangeActiveDocument(row)
                      handleModal("delete")
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
    </Box>
  )
}
