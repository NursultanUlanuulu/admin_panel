import { Roles } from "../../shared/enums"
export interface LoginReq {
  phone: string
  password: string
}

export type LoginRes = {
  access: string
  refresh: string
}

export type IProfile = {
  id: number
  phone?: string
  first_name?: string
  last_name?: string
  address?: string
  image?: string
  is_superuser?: boolean
  is_active?: boolean
  role: Roles
}
