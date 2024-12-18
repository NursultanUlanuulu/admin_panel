export interface Available_loan {
	id?: number
	product_id: number
	name: string
	description: string
	actual_date: string
	calculation_type: number
	created_at: string
	updated_at: string
}

export type Available_loans = Available_loan[]
