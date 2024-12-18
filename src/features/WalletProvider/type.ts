export interface WalletProvider {
	id?: number
	integration_id: number
	channel_type_id: number
	name: string
	image: string
}

export type WalletProviders = WalletProvider[]
