import { IRestaurantRepository } from '../domain/RestaurantRepository'
import { Restaurant } from '../domain/Restaurant'
import { RestaurantFilters } from '../domain/RestaurantFilters'

export class GetAllRestaurants {
    constructor(private restaurantRepo: IRestaurantRepository) { }

    async execute(filters: RestaurantFilters): Promise<Restaurant[]> {
        return this.restaurantRepo.getAll(filters)
    }
}
