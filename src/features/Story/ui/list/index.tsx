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
import CreateStory from "../create"
import ListService from "./listServise"
import { Row } from "./row"
import { PromptModal } from "@/shared/ui"

const Story = () => {
  const {
    headerLinks,
    modal,
    story,
    activeStory,
    getStoryStatus,
    handleModal,
    handleChangeActiveStory,
    handleDeleteStory,
  } = ListService()
  return (
    <Box>
      <FullScreenModal
        open={modal.create}
        handleClose={() => handleModal("create")}
      >
        <CreateStory />
      </FullScreenModal>
      <FullScreenModal
        open={modal.edit}
        handleClose={() => handleModal("edit")}
      >
        {/* <EditNotification notification={activeNotification} /> */}
        edit
      </FullScreenModal>
      <PromptModal
        open={modal.delete}
        agreeCallback={handleDeleteStory}
        text="Вы действительно хотите удалить сторис ?"
        handleClose={() => handleModal("delete")}
      />
      <TableHeader
        title="Сторис"
        addHandler={() => {
          handleModal("create")
        }}
        showCreateButton
        buttonText="Добавить сторис"
      />
      <HOCList
        isError={getStoryStatus === StatusResponse.ERROR}
        isLoading={getStoryStatus === StatusResponse.LOADING}
        isSuccess={getStoryStatus === StatusResponse.SUCCESS}
        length={story.length}
        noLengthMessage="Больше нет стоирзов"
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
              {story.map((row, index) => (
                <Row
                  key={index}
                  row={row}
                  editCallback={() => {
                    handleModal("edit")
                    handleChangeActiveStory(row)
                  }}
                  deleteCallback={() => {
                    handleModal("delete")
                    handleChangeActiveStory(row)
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

export default Story
