import { User } from '../../type'
import { TableCell, TableRow } from '@mui/material'

export function Row({ row }: { row: User }) {
	return (
		<TableRow
			key={row.id}
			sx={{
				cursor: 'pointer',
				transition: 'all 0.4s ease',
				'&:hover': {
					opacity: 0.7,
				},
			}}
		>
			<TableCell>+{row.phone}</TableCell>
			<TableCell>{row.first_name}</TableCell>
			<TableCell>{row.last_name}</TableCell>
		</TableRow>
	)
}
