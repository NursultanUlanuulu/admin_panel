import { Stack, TableCell } from "@mui/material"
import { Document } from "../../type"
import { Delete, Info as InfoIcon } from "@mui/icons-material"
import { getDocumentById } from "../../store/actions"
import { useAppDispatch } from "@/app/store"
import {
  MyDelateButton,
  MyInfoButton,
  TableRowStyle,
} from "@/shared/ui/style/style"

export const Row = ({
  row,
  infoCallback,
  deleteCallback,
}: {
  row: Document
  infoCallback: () => void
  deleteCallback: () => void
}) => {
  const dispatch = useAppDispatch()

  const handleDocumentId = (id: number) => {
    dispatch(getDocumentById(id))
  }

  return (
    <TableRowStyle
      key={row.id}
      onClick={() => {
        handleDocumentId(row.id)
        infoCallback()
      }}
    >
      <TableCell>{row.document_folder}</TableCell>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.text}</TableCell>
      <TableCell>
        <Stack direction="row" spacing={1} sx={{ justifyContent: "flex-end" }}>
          <MyInfoButton
            variant="contained"
            onClick={() => {
              handleDocumentId(row.id)
              infoCallback()
            }}
          >
            <InfoIcon />
          </MyInfoButton>
          <MyDelateButton variant="contained" onClick={deleteCallback}>
            <Delete />
          </MyDelateButton>
        </Stack>
      </TableCell>
    </TableRowStyle>
  )
}
