import { Box, Modal, Paper } from "@mui/material"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import { MyDelateButton } from "./style/style"
import { tokensDark } from "@/app/providers/ThemeProvider"

export const PromptModal = ({
  open,
  handleClose,
  text,
  agreeCallback,
}: {
  open: boolean
  handleClose: () => void
  text: string
  agreeCallback: () => void
}) => {
  return (
    <Modal sx={{ overflowY: "scroll" }} open={open} onClose={handleClose}>
      <Box
        sx={{
          maxWidth: "500px",
          margin: "250px auto 10px auto",
          background: tokensDark.primary[500],
          padding: "20px",
          "@media(max-width:640px)": {
            maxWidth: "95%",
          },
        }}
        component={Paper}
      >
        <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
          {text}
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: "20px" }}>
          <MyDelateButton onClick={handleClose}>Отмена</MyDelateButton>
          <MyDelateButton onClick={agreeCallback}>Да</MyDelateButton>
        </Stack>
      </Box>
    </Modal>
  )
}
