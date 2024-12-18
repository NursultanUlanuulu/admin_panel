import { format } from 'date-fns'
import { Available_loan } from '../../type'
import { TableCell, TableRow } from '@mui/material'
import { ru } from 'date-fns/locale'
import { MyInfoButton } from '../../../../shared/ui/style/style'
import { Info as InfoIcon } from '@mui/icons-material'

export function Row({
	row,
	infoCallback,
}: {
	row: Available_loan
	infoCallback: () => void
}) {
	const actual = format(new Date(row.actual_date), "d MMMM yyyy 'г.'", {
		locale: ru,
	})
	const created = format(new Date(row.created_at), "d MMMM yyyy 'г.' HH:mm", {
		locale: ru,
	})
	return (
		<TableRow
			key={row.id}
			sx={{
				cursor: 'pointer',
				transition: 'all 0.4s ease',
				'&:hover': {
					boxShadow: '6px 4px 6px rgba(0, 0, 0, 0.1)',
				},
			}}
		>
			<TableCell>{row.name}</TableCell>
			<TableCell>{row.description}</TableCell>
			<TableCell>{row.calculation_type}</TableCell>
			<TableCell>{actual}</TableCell>
			<TableCell>{created}</TableCell>
			<TableCell>
				<MyInfoButton
					variant='contained'
					onClick={() => {
						infoCallback()
					}}
				>
					<InfoIcon />
				</MyInfoButton>
			</TableCell>
		</TableRow>
	)
}
