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
import { DocumentCreate } from "../create"
import { DocumentFolderService } from "./listSevice"
import { Row } from "./row"
import { DocumentFolderInfo } from "../detail"
import { FullScreenModal, PromptModal, TableHeader } from "@/shared/ui"
import { tokensDark } from "@/app/providers/ThemeProvider"
import { StatusResponse } from "@/shared/enums"
import { HOCList } from "@/widgets"

export const DocumentFolder = () => {
  const {
    headerLinks,
    modal,
    documentFolfers,
    documentFolferInfo,
    getDocumentFolderStatus,
    handleModal,
    handleChangeActiveDocument,
    handleDeleteDocumentFolder,
  } = DocumentFolderService()

  const isdocumentFoldersArray =
    Array.isArray(documentFolfers) && documentFolfers.length > 0

  return (
    <Box>
      <FullScreenModal
        open={modal.create ?? false}
        handleClose={() => handleModal("create")}
      >
        <DocumentCreate />
      </FullScreenModal>
      <FullScreenModal
        open={modal.detail ?? false}
        handleClose={() => handleModal("detail")}
      >
        <DocumentFolderInfo folder={documentFolferInfo} />
      </FullScreenModal>
      <PromptModal
        open={modal.delete ?? false}
        agreeCallback={handleDeleteDocumentFolder}
        text="Вы действительно хотите удалить папку ?"
        handleClose={() => handleModal("delete")}
      />
      <TableHeader
        title="Папки документов и лицензий"
        addHandler={() => {
          handleModal("create")
        }}
        showCreateButton
        buttonText="Добавить папку"
      />
      <HOCList
        isError={getDocumentFolderStatus === StatusResponse.ERROR}
        isLoading={getDocumentFolderStatus === StatusResponse.LOADING}
        isSuccess={getDocumentFolderStatus === StatusResponse.SUCCESS}
        length={isdocumentFoldersArray ? documentFolfers.length : 0}
        noLengthMessage="Больше нет документов"
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
              {isdocumentFoldersArray ? (
                documentFolfers.map((row, index) => (
                  <Row
                    key={index}
                    row={row}
                    infoCallback={() => {
                      handleChangeActiveDocument(row)
                      handleModal("detail")
                    }}
                    deleteCallback={() => {
                      handleChangeActiveDocument(row)
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
