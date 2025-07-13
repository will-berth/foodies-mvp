import { Restaurant } from './Restaurant'
import { RestaurantFilters } from './RestaurantFilters'

export interface IRestaurantRepository {
  getAll(filters: RestaurantFilters): Promise<Restaurant[]>
}
