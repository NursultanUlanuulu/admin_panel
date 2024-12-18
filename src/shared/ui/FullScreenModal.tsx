import CloseIcon from "@mui/icons-material/Close"
import { Box, IconButton, Modal } from "@mui/material"
import Paper from "@mui/material/Paper"
import { tokensDark } from "../../app/providers/ThemeProvider"

interface Props {
  open: boolean
  handleClose: () => void
  children: React.ReactNode
}

const FullScreenModal = ({ open = false, handleClose, children }: Props) => {
  return (
    <Modal sx={{ overflowY: "scroll" }} open={open} onClose={handleClose}>
      <Box
        sx={{
          width: "700px",
          margin: "10px auto 10px auto",
          padding: "60px 20px",
          minHeight: "calc( 100vh - 20px )",
          background: tokensDark.primary[500],
          position: "relative",
        }}
        component={Paper}
      >
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: "20px", right: "20px" }}
        >
          <CloseIcon />
        </IconButton>
        {children}
      </Box>
    </Modal>
  )
}

export default FullScreenModal
