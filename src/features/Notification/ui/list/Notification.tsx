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
import { tokensDark } from "../../../../app/providers/ThemeProvider"
import { StatusResponse } from "../../../../shared/enums"
import FullScreenModal from "../../../../shared/ui/FullScreenModal"
import TableHeader from "../../../../shared/ui/TableHeader"
import HOCList from "../../../../widgets/HOCList"
import CreateNotification from "../create"
import EditNotification from "../edit"
import NotificationServise from "./listServise"
import { Row } from "./row"
import { PromptModal } from "@/shared/ui"

const Notification = () => {
  const {
    headerLinks,
    modal,
    notification,
    activeNotification,
    getNotificationStatus,
    handleModal,
    handleChangeActiveNotification,
    handleDeleteNotification,
  } = NotificationServise()
  return (
    <Box>
      <FullScreenModal
        open={modal.create}
        handleClose={() => handleModal("create")}
      >
        <CreateNotification />
      </FullScreenModal>
      <FullScreenModal
        open={modal.edit}
        handleClose={() => handleModal("edit")}
      >
        <EditNotification notification={activeNotification} />
      </FullScreenModal>
      <PromptModal
        open={modal.delete}
        agreeCallback={handleDeleteNotification}
        text="Вы действительно хотите удалить уведомление ?"
        handleClose={() => handleModal("delete")}
      />
      <TableHeader
        title="Уведомления"
        addHandler={() => {
          handleModal("create")
        }}
        showCreateButton
        buttonText="Добавить уведомление"
      />
      <HOCList
        isError={getNotificationStatus === StatusResponse.ERROR}
        isLoading={getNotificationStatus === StatusResponse.LOADING}
        isSuccess={getNotificationStatus === StatusResponse.SUCCESS}
        length={notification.length}
        noLengthMessage="Больше нет уведомлений"
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
              {notification.map((row, index) => (
                <Row
                  key={index}
                  row={row}
                  editCallback={() => {
                    handleModal("edit")
                    handleChangeActiveNotification(row)
                  }}
                  deleteCallback={() => {
                    handleModal("delete")
                    handleChangeActiveNotification(row)
                  }}
                  //   colback={() => {
                  //     handleChangeActiveRegion(row);
                  //     handleModal("info");
                  //   }}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </HOCList>
    </Box>
  )
}

export default Notification
