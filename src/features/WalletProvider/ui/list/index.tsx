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
import Service from './sevice'

export const WalletProviderList = () => {
	const { headerLinks, wallet, getWalletStatus } = Service()

	return (
		<Box>
			<TableHeader title='Доступные кредиты' />
			<HOCList
				isError={getWalletStatus === StatusResponse.ERROR}
				isLoading={getWalletStatus === StatusResponse.LOADING}
				isSuccess={getWalletStatus === StatusResponse.SUCCESS}
				length={wallet.length}
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
							{wallet.map((row, index) => (
								<Row key={index} row={row} />
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</HOCList>
		</Box>
	)
}
