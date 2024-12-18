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
// import DocumentFolderService from "./listSevice";
import FullScreenModal from "../../../../shared/ui/FullScreenModal"
import TableHeader from "../../../../shared/ui/TableHeader"
import HOCList from "../../../../widgets/HOCList"
import { StatusResponse } from "../../../../shared/enums"
import { tokensDark } from "../../../../app/providers/ThemeProvider"
import ListServise from "./listService"
import { Row } from "./row"
import CreateMainStoryForm from "../create"
import MainStoryEdit from "../edit/EditForm"
import { PromptModal } from "@/shared/ui"
// import { Row } from "./row";
// import DocumentCreate from "../create";
// import DocumentEdit from "../edit";

const MainStory = () => {
  const {
    headerLinks,
    modal,
    mainStory,
    activeMainStory,
    getMainStoryStatus,
    handleModal,
    handleChangeActiveMainStory,
    handleDeleteMainStory,
  } = ListServise()

  return (
    <Box>
      <FullScreenModal
        open={modal.create}
        handleClose={() => handleModal("create")}
      >
        <CreateMainStoryForm />
      </FullScreenModal>
      <FullScreenModal
        open={modal.edit}
        handleClose={() => handleModal("edit")}
      >
        <MainStoryEdit mainStory={activeMainStory} />
      </FullScreenModal>
      <PromptModal
        open={modal.delete}
        agreeCallback={handleDeleteMainStory}
        text="Вы действительно хотите удалить сторис ?"
        handleClose={() => handleModal("delete")}
      />
      <TableHeader
        title="Главные сторисы"
        addHandler={() => {
          handleModal("create")
        }}
        showCreateButton
        buttonText="Добавить сторис"
      />
      <HOCList
        isError={getMainStoryStatus === StatusResponse.ERROR}
        isLoading={getMainStoryStatus === StatusResponse.LOADING}
        isSuccess={getMainStoryStatus === StatusResponse.SUCCESS}
        length={mainStory.length}
        noLengthMessage="Больше нет сторисов"
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
              {mainStory.map((row, index) => (
                <Row
                  key={index}
                  row={row}
                  editCallback={() => {
                    handleModal("edit")
                    handleChangeActiveMainStory(row)
                  }}
                  deleteCallback={() => {
                    handleModal("delete")
                    handleChangeActiveMainStory(row)
                  }}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </HOCList>
    </Box>
  )
}

export default MainStory
