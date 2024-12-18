import { Button, Stack, TableCell, TableRow } from "@mui/material"
import { Delete, Edit, CheckCircle } from "@mui/icons-material"
// import { Notification } from "../../type";
import { format } from "date-fns"
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined"
import { MainStory } from "../../type"
import { MyDelateButton, MyEditButton } from "@/shared/ui/style/style"

export const Row = ({
  row,
  editCallback,
  deleteCallback,
}: {
  row: MainStory
  editCallback: () => void
  deleteCallback: () => void
}) => {
  const formattedDate = row.created
    ? format(new Date(row.created), "dd.MM.yyyy HH:mm:ss")
    : ""

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
      <TableCell>
        <img src={`${row.image}?${Date.now()}`} alt="" width={150} />
      </TableCell>
      <TableCell>{formattedDate}</TableCell>
      <TableCell>
        {row.is_active ? (
          <CheckCircle color="primary" />
        ) : (
          <CancelOutlinedIcon color="error" />
        )}
      </TableCell>{" "}
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
