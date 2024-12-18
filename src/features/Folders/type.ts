export interface LoanApplicationResult {
  id: number
  integration_id: number
  credit_id: number
  mortrage_type_id: number
  income_approve_type_id: number
  request_currency_id: number
  request_sum: number
  request_date: string
  request_period: number
  request_rate: number
  status: number
  officer_user_name: string
  credit_officer_start_date: string
  office_id: number
  partner: string
  purpose: string
  purpose_type_id: number
  relative_full_name: string
  relative_phone: string
  wallet_provider_id: number
  wallet_channel_type_id: number
  scoring_result: boolean
  document_docx: string
  document_pdf: string
  code: string
  code_date: string
  wallet_number: string
  created_at: string
  updated_at: string
  user: number
}

export interface LoanApplications {
  count: number
  next: string | null
  previous: string | null
  results: LoanApplicationResult[]
}
