import { format } from 'date-fns'
import { TableCell, TableRow } from '@mui/material'
import { ru } from 'date-fns/locale'
import { WalletProvider } from '../../type'

export function Row({ row }: { row: WalletProvider }) {
	// const actual = format(new Date(row.actual_date), "d MMMM yyyy 'г.'", {
	// 	locale: ru,
	// })
	// const created = format(new Date(row.created_at), "d MMMM yyyy 'г.' HH:mm", {
	// 	locale: ru,
	// })
	// const updated = format(new Date(row.updated_at), "d MMMM yyyy 'г.' HH:mm", {
	// 	locale: ru,
	// })
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
			<TableCell>
				<img src={row.image} width={50} />
			</TableCell>
			<TableCell>{row.name}</TableCell>
			<TableCell>{row.integration_id}</TableCell>
			{/* <TableCell>{actual}</TableCell>
			<TableCell>{row.calculation_type}</TableCell>
			<TableCell>{created}</TableCell>
			<TableCell>{updated}</TableCell> */}
		</TableRow>
	)
}
