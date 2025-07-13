import { IRatingRepository } from '../domain/RaitingRepository'
import { Rating } from '../domain/Raiting'

export class GetRatingsByRestaurant {
  constructor(private ratingRepo: IRatingRepository) {}

  async execute(restaurantId: string): Promise<Rating[]> {
    return this.ratingRepo.getByRestaurantId(restaurantId)
  }
}