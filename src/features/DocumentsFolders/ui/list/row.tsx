import { Stack, TableCell } from "@mui/material"
import { DocumentFolder } from "../../type"
import { getDocumentFolderById } from "../../store/actions"
import { Info as InfoIcon, Delete } from "@mui/icons-material"
import { useAppDispatch } from "@/app/store"
import {
  ImageStyle,
  MyDelateButton,
  MyInfoButton,
  TableRowStyle,
} from "@/shared/ui/style/style"

export const Row = ({
  row,
  infoCallback,
  deleteCallback,
}: {
  row: DocumentFolder
  infoCallback: () => void
  deleteCallback: () => void
}) => {
  const dispatch = useAppDispatch()

  const handleDocumentFolderId = (id: number) => {
    dispatch(getDocumentFolderById(id))
  }

  return (
    <TableRowStyle
      key={row.id}
      onClick={() => {
        handleDocumentFolderId(row.id)
        infoCallback()
      }}
    >
      <TableCell>{row.position}</TableCell>
      <TableCell>
        {row.image && <ImageStyle src={row.image} width={100} />}
      </TableCell>
      <TableCell>{row.name}</TableCell>
      <TableCell>
        <Stack direction="row" spacing={1} sx={{ justifyContent: "flex-end" }}>
          <MyInfoButton
            variant="contained"
            onClick={() => {
              handleDocumentFolderId(row.id)
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
