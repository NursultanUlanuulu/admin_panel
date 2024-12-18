import { Stack, TableCell } from "@mui/material"
import { Branch } from "../../type"
import { Info as InfoIcon, Delete } from "@mui/icons-material"
import { getBranchById } from "../../store/action"
import {
  MyDelateButton,
  MyInfoButton,
  TableRowStyle,
} from "@/shared/ui/style/style"
import { useAppDispatch } from "@/app/store"

export const Row = ({
  row,
  infoCallback,
  deleteCallback,
}: {
  row: Branch
  infoCallback: () => void
  deleteCallback: () => void
}) => {
  const dispatch = useAppDispatch()

  const handleSBranchID = (id: number) => {
    dispatch(getBranchById(id))
  }

  return (
    <TableRowStyle key={row.id}>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.region_name}</TableCell>
      <TableCell>
        <Stack direction="row" spacing={1} sx={{ justifyContent: "flex-end" }}>
          <MyInfoButton
            variant="contained"
            onClick={() => {
              handleSBranchID(row.id)
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
