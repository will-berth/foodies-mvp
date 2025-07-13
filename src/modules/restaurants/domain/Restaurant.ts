export interface Restaurant {
  id: string
  name: string
  banner_url: string
  address: string
  cuisine_id: string
  location_id: string
  cuisine_name?: string
  location_name?: string
  average_rating?: number
  raiting_count?: number
}
