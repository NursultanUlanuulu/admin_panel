import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  styled,
} from "@mui/material"
import { Contact } from "../../type"
import { useAppDispatch } from "../../../../app/store"
import FullScreenModal from "../../../../shared/ui/FullScreenModal"
import { useState } from "react"
import { deleteContact } from "../../store/actions"
import ContactEdit from "../edit"
import {
  InfoImage,
  MyDelateButton,
  MyEditButton,
  MyStyledButton,
} from "../../../../shared/ui/style/style"
import { Link } from "react-router-dom"
import { PromptModal } from "@/shared/ui"

type State = {
  edit: boolean
  delete: boolean
}

const ContactInfo = ({ contact }: { contact: Contact }) => {
  // const [branch, setBranch] = useState<any>(null);
  const [modal, setModal] = useState<State>({
    edit: false,
    delete: false,
  })

  // console.log(contact, 'contact')

  const dispatch = useAppDispatch()

  const handleDelateContact = () => {
    dispatch(deleteContact(contact.id ?? 0))
  }

  // useEffect(() => {
  //   const fetchBranch = async () => {
  //     const data = await getBranchById(contact.id);
  //     setBranch(data);
  //   };
  //   fetchBranch();
  // }, [contact.id]);
  // console.log(contact.id);

  return (
    <Box>
      <FullScreenModal
        open={modal.edit}
        handleClose={() => setModal({ ...modal, edit: false })}
      >
        <ContactEdit contact={contact} />
      </FullScreenModal>
      <PromptModal
        handleClose={() => {
          setModal({ ...modal, delete: false })
        }}
        open={modal.delete}
        text="Вы действительно хотите удалить данный контакт ?"
        agreeCallback={() => {
          handleDelateContact()
          setModal({ ...modal, delete: false })
        }}
      />
      {/* <table className='info_table'>
				<tbody>
					<tr>
						<td>ID</td>
						<td>{contact.image && <img src={contact.image} width={100} />}</td>
					</tr>
					<tr>
						<td>ФИО</td>
						<td>{contact.name}</td>
					</tr>
					<tr>
						<td>Номер</td>
						<td>{contact.contact}</td>
					</tr>
					<tr>
						<td>Позиция</td>
						<td>{contact.position}</td>
					</tr>
				</tbody>
			</table> */}
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Фото:</TableCell>
              <TableCell>
                {contact.image && <InfoImage src={contact.image} width={200} />}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Пользователь:</TableCell>
              <TableCell>{contact.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Контакт:</TableCell>
              <TableCell>
                <Link to={contact.contact}>{contact.contact}</Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Тип:</TableCell>
              <TableCell>{contact.type}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Позиция:</TableCell>
              <TableCell>{contact.position}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2} direction="row" mt="16px">
        <MyEditButton
          color="success"
          variant="contained"
          onClick={() => setModal({ ...modal, edit: true })}
        >
          Редактировать
        </MyEditButton>

        <MyDelateButton
          color="error"
          variant="contained"
          onClick={() => setModal({ ...modal, delete: true })}
        >
          Удалить
        </MyDelateButton>
      </Stack>
    </Box>
  )
}

export default ContactInfo
