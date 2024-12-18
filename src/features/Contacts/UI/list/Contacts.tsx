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
import CreateContact from "../create"
import Row from "./row"
import ContactInfo from "../info"
import ContactsService from "./servise"

const Contacts = () => {
  const {
    headerLinks,
    modal,
    contacts,
    getContactsStatus,
    handleModal,
    handleChangeActiveContact,
    detail,
  } = ContactsService()
  const isContactArray = Array.isArray(contacts)
  return (
    <Box>
      <FullScreenModal
        open={modal.create}
        handleClose={() => handleModal("create")}
      >
        <CreateContact />
      </FullScreenModal>
      <FullScreenModal
        open={modal.info}
        handleClose={() => handleModal("info")}
      >
        <ContactInfo contact={detail} />
      </FullScreenModal>
      <TableHeader
        title="Контакты"
        addHandler={() => {
          handleModal("create")
        }}
        showCreateButton
        buttonText="Добавить контакт"
      />
      <HOCList
        isError={getContactsStatus === StatusResponse.ERROR}
        isLoading={getContactsStatus === StatusResponse.LOADING}
        isSuccess={getContactsStatus === StatusResponse.SUCCESS}
        length={isContactArray ? contacts.length : 0}
        noLengthMessage="Больше нет контактов"
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
              {isContactArray ? (
                contacts.map((row, index) => (
                  <Row
                    key={index}
                    row={row}
                    infoCallback={() => {
                      handleChangeActiveContact(row)
                      handleModal("info")
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

export default Contacts
