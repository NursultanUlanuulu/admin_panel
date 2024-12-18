import { CheckCircle, Delete, Edit } from "@mui/icons-material"
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined"
import { Button, Stack, TableCell, TableRow } from "@mui/material"
import { format } from "date-fns"
import { Notification } from "../../type"
import { MyDelateButton, MyEditButton } from "@/shared/ui/style/style"

export const Row = ({
  row,
  editCallback,
  deleteCallback,
}: {
  row: Notification
  editCallback: () => void
  deleteCallback: () => void
}) => {
  const formattedDate = format(new Date(row.created_at), "dd.MM.yyyy HH:mm:ss")

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
      <TableCell>{row.message}</TableCell>
      <TableCell>{row.user.first_name}</TableCell>
      <TableCell>{row.user.last_name}</TableCell>
      <TableCell>{row.user.phone}</TableCell>
      <TableCell>{formattedDate}</TableCell>
      <TableCell>
        {row.is_read ? (
          <CheckCircle color="primary" />
        ) : (
          <CancelOutlinedIcon color="error" />
        )}
      </TableCell>
      <TableCell>
        <Stack direction="row" spacing={1} sx={{ justifyContent: "flex-end" }}>
          <MyEditButton
            variant="contained"
            onClick={editCallback}
            sx={{ backgroundColor: "#EE7D00", color: "#fff" }}
          >
            <Edit />
          </MyEditButton>
          <MyDelateButton
            variant="contained"
            onClick={deleteCallback}
            sx={{ backgroundColor: "#EE7D00", color: "#fff" }}
          >
            <Delete />
          </MyDelateButton>
        </Stack>
      </TableCell>
    </TableRow>
  )
}
