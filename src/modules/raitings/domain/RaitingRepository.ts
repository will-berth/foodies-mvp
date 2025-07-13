import { Rating } from './Raiting'

export interface IRatingRepository {
  getByRestaurantId(restaurantId: string): Promise<Rating[]>
}
