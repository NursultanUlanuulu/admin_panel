import React from "react"
import RegionListServise from "./listServise"
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import FullScreenModal from "../../../../shared/ui/FullScreenModal"
import TableHeader from "../../../../shared/ui/TableHeader"
import HOCList from "../../../../widgets/HOCList"
import { StatusResponse } from "../../../../shared/enums"
import { tokensDark } from "../../../../app/providers/ThemeProvider"
// import Row from "./row";
import CreateRegion from "../create"
// import EditRegion from "../edit";
import { Row } from "./row"
import { RegionDetail } from "../detail"

const RegionList = () => {
  const {
    headerLinks,
    modal,
    region,
    activeRegion,
    getRegionStatus,
    handleModal,
    handleChangeActiveRegion,
    handleDeleteRegion,
    detail,
  } = RegionListServise()
  return (
    <Box>
      <FullScreenModal
        open={modal.create}
        handleClose={() => handleModal("create")}
      >
        <CreateRegion />
      </FullScreenModal>
      <FullScreenModal
        open={modal.detail}
        handleClose={() => handleModal("detail")}
      >
        <RegionDetail region={detail} />
      </FullScreenModal>
      <TableHeader
        title="Регионы"
        addHandler={() => {
          handleModal("create")
        }}
        showCreateButton
        buttonText="Добавить регион"
      />
      <HOCList
        isError={getRegionStatus === StatusResponse.ERROR}
        isLoading={getRegionStatus === StatusResponse.LOADING}
        isSuccess={getRegionStatus === StatusResponse.SUCCESS}
        length={region.length}
        noLengthMessage="Больше нет регионов"
      >
        <TableContainer
          sx={{ background: tokensDark.primary[500] }}
          component={Paper}
        >
          <Table>
            <TableHead>
              <TableRow>
                {headerLinks.map((tableHeaders: string) => (
                  <TableCell
                    key={tableHeaders}
                    sx={{
                      textTransform: "uppercase",
                      fontWeight: 700,
                      fontSize: "18px",
                    }}
                  >
                    {tableHeaders}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {region.map((row, index) => (
                <Row
                  key={index}
                  row={row}
                  infoCallback={() => {
                    handleModal("detail")
                    handleChangeActiveRegion(row)
                  }}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </HOCList>
    </Box>
  )
}

export default RegionList
