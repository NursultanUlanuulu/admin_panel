import { TableCell, TableRow, Stack } from "@mui/material"
import { Region } from "../../type"
import { MyInfoButton } from "@/shared/ui/style/style"
import { Info as InfoIcon } from "@mui/icons-material"
import { useAppDispatch } from "@/app/store"
import { getRegionById } from "../../store/actions"

export const Row = ({
  row,
  infoCallback,
}: {
  row: Region
  infoCallback: () => void
}) => {
  const dispatch = useAppDispatch()

  const handleDocumentFolderId = (id: number) => {
    dispatch(getRegionById(id))
  }
  return (
    <TableRow
      key={row.id}
      sx={{
        cursor: "pointer",
        transition: "transform 0.3s",
        "&:hover": {
          boxShadow: "6px 4px 6px rgba(0, 0, 0, 0.1)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <TableCell>{row.position}</TableCell>
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
        </Stack>
      </TableCell>
    </TableRow>
  )
}
