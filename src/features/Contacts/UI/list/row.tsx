import { Stack, TableCell, TableRow } from "@mui/material"
import { Contact } from "../../type"
import InfoIcon from "@mui/icons-material/Info"
import { getContactById } from "../../store/actions"
import { useAppDispatch } from "../../../../app/store"
import { ImageStyle, MyInfoButton } from "../../../../shared/ui/style/style"

const Row = ({
  row,
  infoCallback,
}: {
  row: Contact
  infoCallback: () => void
}) => {
  const dispatch = useAppDispatch()

  const handleContactID = (id: number) => {
    dispatch(getContactById(id))
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
      <TableCell>
        {row.image && <ImageStyle src={row.image} width={100} />}
      </TableCell>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.type}</TableCell>
      <TableCell>{row.contact}</TableCell>
      <TableCell>
        <Stack direction="row" spacing={1} sx={{ justifyContent: "flex-end" }}>
          <MyInfoButton
            variant="contained"
            onClick={() => {
              handleContactID(row.id)
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

export default Row
