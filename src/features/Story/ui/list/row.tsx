import { CheckCircle, Delete, Edit } from "@mui/icons-material"
import { Stack, TableCell, TableRow } from "@mui/material"
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined"
import { format } from "date-fns"
import { StoryCrud } from "../../type"
import { MyDelateButton, MyEditButton } from "@/shared/ui/style/style"

export const Row = ({
  row,
  editCallback,
  deleteCallback,
}: {
  row: StoryCrud
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
        <img
          src={row.image}
          alt=""
          width={200}
          style={{
            objectFit: "cover",
            aspectRatio: "5/3",
            borderRadius: "1.5rem",
          }}
        />
      </TableCell>
      <TableCell>{row.link} ссылка</TableCell>
      <TableCell>{row.main_story} гл стор</TableCell>
      <TableCell>{row.user_views} просм</TableCell>
      <TableCell>{row.video} видео</TableCell>
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
