export interface Branch {
  id: number
  name: string
  address: string
  region_name?: string
  work_time: {
    start_time: string
    end_time: string
  }[]
  lat: number
  long: number
  position: number
  region: number
}
