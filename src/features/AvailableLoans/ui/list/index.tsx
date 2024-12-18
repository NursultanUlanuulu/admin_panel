import {
	Box,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material'
import { tokensDark } from '../../../../app/providers/ThemeProvider'
import { StatusResponse } from '../../../../shared/enums'
import TableHeader from '../../../../shared/ui/TableHeader'
import HOCList from '../../../../widgets/HOCList'
import { Row } from './row'
import AvailableLoansService from './service'
import FullScreenModal from '../../../../shared/ui/FullScreenModal'
import AvailableLoansInfo from '../info'

export const AvailableLoansList = () => {
	const {
		headerLinks,
		availableLoans,
		getAvailableLoansStatus,
		modal,
		activeLoan,
		handleModal,
		handleChangeActiveLoan,
	} = AvailableLoansService()

	return (
		<Box>
			<TableHeader title='Доступные кредиты' />
			<FullScreenModal
				open={modal.info}
				handleClose={() => handleModal('info')}
			>
				<AvailableLoansInfo loan={activeLoan} />
			</FullScreenModal>
			<HOCList
				isError={getAvailableLoansStatus === StatusResponse.ERROR}
				isLoading={getAvailableLoansStatus === StatusResponse.LOADING}
				isSuccess={getAvailableLoansStatus === StatusResponse.SUCCESS}
				length={availableLoans.length}
				noLengthMessage='Больше нет доступных кредитов'
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
											textTransform: 'uppercase',
											fontWeight: 700,
											fontSize: '18px',
										}}
									>
										{tableHeaders}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{availableLoans.map((row, index) => (
								<Row
									key={index}
									row={row}
									infoCallback={() => {
										handleChangeActiveLoan(row)
										handleModal('info')
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
